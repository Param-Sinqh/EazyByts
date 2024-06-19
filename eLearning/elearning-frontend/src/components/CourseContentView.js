import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/css/CourseContentView.css';
import { useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';

const CourseContentView = () => {
    const location = useLocation();
    const courseId = location.state?.courseId || null;
    const userid = location.state?.userid || null;
    const username = location.state?.username || null;
    const role = location.state?.role || null;
    const [contents, setContents] = useState([]);
    const [selectedContent, setSelectedContent] = useState({});
    const [message, setMessage] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (courseId) {
            fetchMaterials(courseId);
        }
    }, [courseId]);

    const fetchMaterials = async (courseId) => {
        try {
            const response = await axios.get(`http://localhost:8080/material/course/${courseId}`);
            if (Array.isArray(response.data)) {
                setContents(response.data);
                const firstIncompleteMaterial = response.data.find(material => !material.completed);
                if (firstIncompleteMaterial) {
                    setSelectedContent(firstIncompleteMaterial);
                } else if (response.data.length > 0) {
                    setSelectedContent(response.data[0]);
                }
            } else {
                console.error('Fetched data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching materials:', error);
        }
    };

    const markAsCompleted = async () => {
        try {
            const formData = new URLSearchParams();
            formData.append('materialId', selectedContent.id);
            formData.append('isCompleted', true);

            await axios.put(`http://localhost:8080/material/updateProgress`, formData);

            fetchMaterials(courseId); // Refresh materials after marking as completed
        } catch (error) {
            console.error('Error updating material progress:', error);
        }
    };

    const handleCourseCompletion = async () => {
        try {
            // Remove the course from the user
            await axios.post('http://localhost:8080/user/removeCourse', {
                userId: userid,
            });

            // Reset the completion status of all materials in the course
            await axios.put(`http://localhost:8080/material/resetProgress/${courseId}`);

            console.log('Course removed and materials reset successfully.');

        } catch (error) {
            console.error('Error handling course completion:', error);
            alert('Error handling course completion: ' + error.message);
        }
    };

    useEffect(() => {
        if (contents.length > 0 && contents.every(material => material.completed)) {
            setMessage('Congratulations! Your course has been completed!🎉');
            setShowConfetti(true);
            handleCourseCompletion();
        } else {
            setMessage('');
        }
    }, [contents]);

    const extractVideoId = (url) => {
        if (!url) return '';
        const videoId = url.split('v=')[1];
        if (videoId) {
            const ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition !== -1) {
                return videoId.substring(0, ampersandPosition);
            }
            return videoId;
        }
        return '';
    };

    return (
        <div className="course-content-view">
            {showConfetti && (
                <>
                    <Confetti gravity={0.05} />
                    <div className="completion-message">
                        {message}
                        <button className="CourseContentView-btn" onClick={() => navigate('/courses', { state: { role: role, username: username, userid: userid } })}>
                            Choose New Course
                        </button>
                    </div>
                </>
            )}

            <div className="content-list">
                <h3>Course Content</h3>
                <ul>
                    {contents.map((content, index) => (
                        <li
                            key={index}
                            className={`${content.completed ? 'completed' : ''} ${content.name === selectedContent?.name ? 'active' : ''}`}
                            onClick={() => setSelectedContent(content)}
                        >
                            {content.name}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedContent && selectedContent.name && (
                <div className="content-details">
                    <div className="header">
                        <h3>{selectedContent.name}</h3>
                        {selectedContent && !selectedContent.completed && (
                            <button className="CourseContentView-btn" onClick={markAsCompleted}>
                                Mark as Completed
                            </button>
                        )}
                    </div>

                    <div className="video-container">
                        <iframe
                            title={selectedContent.name}
                            src={`https://www.youtube.com/embed/${extractVideoId(selectedContent.url)}`}
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="transcript">
                        <h4>Video Transcript</h4>
                        <p>{selectedContent.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseContentView;
