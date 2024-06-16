import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/css/CourseContentView.css';
import { useLocation } from 'react-router-dom';

const CourseContentView = () => {
    const location = useLocation();
    const selectedCourse = location.state?.selectedCourse || null;
    const [contents, setContents] = useState([]);
    const [selectedContent, setSelectedContent] = useState({});

    useEffect(() => {
        if (selectedCourse && selectedCourse.id) {
            fetchMaterials(selectedCourse.id);
        }
    }, [selectedCourse]);

    const fetchMaterials = async (courseId) => {
        try {
            const response = await axios.get(`http://localhost:8080/material/course/${courseId}`);
            if (Array.isArray(response.data)) {
                setContents(response.data);
                if (response.data.length > 0) {
                    setSelectedContent(response.data[0]);
                }
            } else {
                console.error('Fetched data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching materials:', error);
        }
    };

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
            <div className="content-list">
                <h3>Course Content</h3>
                <ul>
                    {contents.map((content, index) => (
                        <li
                            key={index}
                            className={content.name === selectedContent.name ? 'active' : ''}
                            onClick={() => setSelectedContent(content)}
                        >
                            {content.name}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedContent && selectedContent.name && (
                <div className="content-details">
                    <h3>{selectedContent.name}</h3>
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
