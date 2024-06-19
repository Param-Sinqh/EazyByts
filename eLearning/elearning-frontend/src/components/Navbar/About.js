import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{ color: '#3fffcf', backgroundColor: '#20018', padding: '2rem', marginTop: '1rem' }}>
            <Row>
                <Col>
                    <h1>About Us</h1>
                    <p>
                        Welcome to our eLearning platform! We are dedicated to providing the best online education experience. 
                        Our platform offers a wide range of courses designed to help you achieve your personal and professional goals.
                    </p>
                    <p>
                        Our mission is to make education accessible to everyone, everywhere. We believe in the power of learning 
                        and are committed to helping you succeed.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
