import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container style={{ color: '#3fffcf', backgroundColor: '#20018', padding: '2rem', marginTop: '1rem' }}>
            <Row>
                <Col>
                    <h1>Contact Us</h1>
                    <p>
                        If you have any questions or need further information, feel free to reach out to us. 
                        Our team is here to help you.
                    </p>
                    <p>Email: support@elearningplatform.com</p>
                    <p>Phone: +1 234 567 890</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
