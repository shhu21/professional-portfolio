import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InfoModal = ({ onClose, project, languages, description }) => {
    return (
        <Modal
            className='modal'
            show={onClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Body className='modal-container'>
            <Container>
                <Row>
                    <Col><img className='modal-img' src={require(`../../assets/images/${project}.png`)} alt="current category" /></Col>
                    <Col>
                        <h2>{project}</h2>
                        <p><span>Languages: </span>{languages}</p>
                        <p>{description}</p>
                        <Button className='modal-btn' onClick={onClose}>Close</Button>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
    );
}

export default InfoModal;