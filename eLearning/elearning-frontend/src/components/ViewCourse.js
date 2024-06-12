import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Card, CardBody, CardSubtitle, CardText } from 'reactstrap';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import the confirm alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the CSS for react-confirm-alert
import '../components/css/ViewCourse.css'; // Import the CSS file

const ViewCourse = () => {
    const { id } = useParams(); // Get course ID from URL
    const [course, setCourse] = useState(null);
    const location = useLocation();
    const role = location.state?.role || 'user';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/course/get/${id}`);
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };

        fetchCourse();
    }, [id]);

    const handleDeleteCourse = async (courseId) => {
        try {
            await axios.delete(`http://localhost:8080/course/deletecourse`, {
                params: { courseId, role }
            });
            navigate('/courses');
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

    if (!course) return <div>Loading...</div>;

    return (
        <Container className="view-course-container">
            {role === 'admin' && (
                <Button className="delete-btn" onClick={() => {
                    console.log('Role:', role); // Print the role value to the console
                    confirmDelete(course.id)
                }
                }>Delete</Button>
            )}

            <Card className="course-card">
                <CardBody>
                    <CardSubtitle tag="h5" className="course-title">{course.coursename}</CardSubtitle>
                    <CardText className="course-author">{course.courseauthor}</CardText>
                    <Container className="video-container">
                        <iframe
                            title="Course Video"
                            className="embed-responsive-item"
                            src={`https://www.youtube.com/embed/${extractVideoId(course.url)}`}
                            allowFullScreen
                        ></iframe>
                    </Container>
                    <Container className="content-container">
                        <h2>Course Content</h2>
                        <p>{course.content}</p>
                    </Container>
                </CardBody>
            </Card>
        </Container>
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

export default ViewCourse;
