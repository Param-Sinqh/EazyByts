import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container } from 'reactstrap';
import '../components/css/ViewCourseModal.css';

const ViewCourseModal = ({ selectedCourse, isOpen, toggle, onStartCourse }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{selectedCourse?.coursename}</ModalHeader>
            <ModalBody>
                <p>Author: {selectedCourse?.courseauthor}</p>
                <Container className="modal-video-container">
                    <iframe
                        title="Selected Video"
                        className="modal-embed-responsive-item"
                        src={`https://www.youtube.com/embed/${extractVideoId(selectedCourse?.url)}`}
                        allowFullScreen
                    ></iframe>
                </Container>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onStartCourse}>Start Course</Button>
                <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
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

export default ViewCourseModal;
