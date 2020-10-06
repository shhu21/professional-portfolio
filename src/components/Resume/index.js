// TODO: convert resume into html and add the component
import React from 'react'; 
import ExperienceItem from '../ExperienceItem';
import { experienceList, languageList, technologyList} from '../../assets/data/resumeList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function Resume() {
    return (
        <div>
            <div className='resume-dl'>
                Download:
                <a href='../../files/Resume.doc'>DOC</a>
                <a href='../../files/Resume.pdf'>PDF</a>
            </div>
            <Container className='resume-container'> 
                <Row>
                    <Col xs={12} md={8}>
                        <h2 className='resume-section'>PROFILE</h2>
                        <h3 className='resume-subtitle'>FULL NAME</h3>
                        <p>Sara Haeryun Hu</p>
                        <div className='education'>
                            <h3 className='resume-subtitle'>EDUCATION</h3>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className='contact-info'>
                            <h3 className='resume-subtitle'>CONTACT</h3>
                            <h4>Email</h4>
                            <h4>Phone Number</h4>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <h2 className='resume-section'>SKILLS</h2>
                        <h3 className='resume-subtitle'>LANGUAGES</h3>
                        <ul>
                            {languageList.map((language) => (
                                <li>{language.language}</li>
                            ))}
                        </ul>
                        <h3 className='resume-subtitle'>ADDITIONAL TECHNOLOGIES</h3>
                        <ul>
                            {technologyList.map((tech) => (
                                <li>{tech.technology}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2 className='resume-section'>EXPERIENCE</h2>
                        <ListGroup variant="flush">
                            {experienceList.map((ex) => (
                                <ExperienceItem 
                                    key={ex.company} 
                                    company={ex.company}
                                    title={ex.title}
                                    date={ex.date}
                                    description={ex.description}
                                />
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
 
                <Row>
                    <Col>
                        <h2 className='resume-section'>AWARDS AND ACHIEVEMENTS</h2>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                </Container>
        </div>
    );
}

export default Resume;