import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InfoModal = ({ onClose, project, languages, description, website, github }) => {
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
                    <Col className='modal-desc'>
                        <h2>{project}</h2>
                        <h3 className='project-subtitle'>Languages:</h3>
                        <p>{languages}</p>
                        <p>{description}</p>
                        {website ? <Card.Link href={website} target='_blank' className='modal-link'><span>Website</span></Card.Link> : ''}
                        <Card.Link href={github} target='_blank' className='modal-link'><span>GitHub</span></Card.Link>
                        <Button className='modal-btn' onClick={onClose}>Close</Button>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
    );
}

export default InfoModal;