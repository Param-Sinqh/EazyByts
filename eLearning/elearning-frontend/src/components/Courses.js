import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from 'reactstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import the confirm alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the CSS for react-confirm-alert
import '../components/css/Courses.css'; // Import the CSS file
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import Typewriter from 'typewriter-effect';
import WelcomeTypewriter from './WelcomeTypewriter';

const ManageCourses = () => {
    const [videos, setVideos] = useState([]);
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ coursename: '', courseauthor: '', url: '' });
    const location = useLocation();
    const role = location.state?.role || 'user';
    const username = location.state?.username;
    const vantaRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!vantaRef.current) return;

        const vantaEffect = GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.00,
            minWidth: 100.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3fffcf,
            backgroundColor: 0x20018,
            THREE,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaRef.current]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/course/getall');
                if (Array.isArray(response.data)) {
                    setVideos(response.data);
                } else {
                    console.error('Expected an array but got:', response.data);
                }
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/course/getall');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleAddCourse = async () => {
        try {
            await axios.post('http://localhost:8080/course/addcourse', newCourse, {
                params: { role }
            });
            fetchCourses();
            setNewCourse({ coursename: '', courseauthor: '', url: '' });
        } catch (error) {
            alert('Error adding course: ' + error.message);
        }
    };

    const handleDeleteCourse = async (courseId) => {
        try {
            await axios.delete('http://localhost:8080/course/deletecourse', {
                params: { courseId, role }
            });
            fetchCourses();
        } catch (error) {
            alert('Error deleting course: ' + error.message);
        }
    };

    const confirmDelete = (courseId) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this course?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleDeleteCourse(courseId)
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true
        });
    };

    return (
        <div>
            <button className="LogOut-Btn" onClick={() => navigate('/', { state: { role: 'admin' } })}>
                <div className="sign">
                    <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                </div>
                <div className="text">Logout</div>
            </button>

            {role === 'admin' ? (
                <h1 className="header" style={{ color: "#000000" }}>
                    Admin Dashboard
                </h1>
            ) : (
                <div ref={vantaRef} className="userdash">
                    <h1 className="header-user" style={{ color: "#ffffff" }}>
                        StudyNest
                    </h1>

                    <WelcomeTypewriter username={username} />

                    {/* reffer this site for TypeWriter information: https://www.npmjs.com/package/typewriter-effect?activeTab=readme#methods */}

                    <Typewriter
                        options={{
                            strings: [
                                "Unlock your potential with StudyNest!",
                                "Embark on a journey of knowledge and growth.",
                                "Ignite your curiosity with our curated courses.",
                                "Transform your learning experience today.",
                                "Explore a world of endless possibilities.",
                                "Empower yourself through education.",
                                "Discover new passions and skills.",
                                "Expand your horizons with StudyNest.",
                                "Turn dreams into achievements with us.",
                                "Join a community of lifelong learners.",
                                "Experience the joy of continuous learning.",
                                "Fuel your ambition with our diverse courses.",
                                "Every step you take brings you closer to success.",
                                "Start your learning adventure with StudyNest!",
                                "Let's shape a brighter future together."
                            ],
                            delay: 30,
                            deleteSpeed: 30,
                            autoStart: true,
                            loop: true,
                            // pause: 5000,
                            wrapperClassName: "typewriter-messages",
                            cursorClassName: "typewriter-messages-cursor"
                        }}
                        className="info-typewriter"
                    />

                </div>
            )}

            {role === 'admin' && (
                <div className="button-section">
                    <Button className="add-course-button" onClick={() => navigate('/addcourse', { state: { role: 'admin' } })}>
                        Add New Course
                    </Button>
                </div>
            )}

            <div className="video-cards">
                {videos.map((video, index) => (
                    <Card key={index} className="video-card" onClick={() => navigate(`/viewcourse/${video.id}`, { state: { role } })}>
                        <CardBody className="video-card-body">
                            <CardSubtitle tag="h5" className="video-card-title">{video.coursename}</CardSubtitle>
                            <CardText className="video-card-text">{video.courseauthor}</CardText>
                            <Container className="video-container">
                                <iframe
                                    title={`Video ${index}`}
                                    className="embed-responsive-item"
                                    src={`https://www.youtube.com/embed/${extractVideoId(video.url)}`}
                                    allowFullScreen
                                ></iframe>
                            </Container>
                            <Container className="button-group">
                                <Button className="view-btn" href={video.url} target="_blank" rel="noopener noreferrer">
                                    View On Youtube
                                </Button>
                                {role === 'admin' && (
                                    <Button className="delete-btn" onClick={() => confirmDelete(video.id)}>Delete</Button>
                                    
                                )}
                            </Container>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

const extractVideoId = (url) => {
    const videoId = url.split('v=')[1];
    if (videoId) {
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
            return videoId.substring(0, ampersandPosition);
        }
        return videoId;
    }
    return null;
};

export default ManageCourses;
