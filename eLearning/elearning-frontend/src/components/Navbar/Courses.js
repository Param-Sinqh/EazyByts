import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Courses = () => {
    return (
        <Container style={{ color: '#3fffcf', backgroundColor: '#20018', padding: '2rem', marginTop: '1rem' }}>
            <Row>
                <Col>
                    <h1>Courses</h1>
                    <p>
                        Explore our diverse range of courses. Whether you're looking to advance your career, learn a new skill, 
                        or pursue a passion, we have something for everyone.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Courses;
