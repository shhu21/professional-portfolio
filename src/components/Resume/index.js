import React from 'react'; 
import ExperienceItem from '../ExperienceItem';
import ProjectItem from '../ProjectItem';
import { experienceList, languageList, technologyList, resumeProjList, associationsList, awardsList } from '../../assets/data/resumeList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Resume() {
    return (
        <div>
            <div className='resume-dl'>
                <h4>Download:</h4>
                <a href='/files/Resume.docx' download><Button>Doc</Button></a>
                <a href='/files/Resume.pdf' download><Button>PDF</Button></a>
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
                            <ListGroup.Item>
                                <Container>
                                    <Row>
                                        <Col>
                                            <p>2020</p>
                                        </Col>
                                        <Col>
                                            <p>University of California, Berkeley</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5>Full Stack Web Development</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5>Certificate</h5>
                                        </Col>
                                    </Row>
                                </Container>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <Container>
                                    <Row>
                                        <Col>
                                            <p>2014-2018</p>
                                        </Col>
                                        <Col>
                                            <p>University of California, Riverside</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5>Computer Science with Business Applications</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5>Bachelor's of Science</h5>
                                        </Col>
                                    </Row>
                                </Container>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <Container>
                                <Row>
                                    <Col>
                                        <p>2010-2014</p>
                                    </Col>
                                    <Col>
                                        <p>Homestead High School</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h5>High School Diploma</h5>
                                    </Col>
                                </Row>
                            </Container>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className='contact-info'>
                            <h3 className='resume-subtitle'>CONTACT</h3>
                            <a href = "mailto: hu.sara21@gmail.com">hu.sara21@gmail.com</a>
                            <a href="tel:+1-650-823-3319">+1-650-823-3319</a>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2 className='resume-section'>SKILLS</h2>
                        <h3 className='resume-subtitle'>LANGUAGES</h3>
                        <ul>
                            {languageList.map((language) => (
                                <li>{language}</li>
                            ))}
                        </ul>
                        <h3 className='resume-subtitle'>ADDITIONAL TECHNOLOGIES</h3>
                        <ul>
                            {technologyList.map((tech) => (
                                <li>{tech}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='resume-section'>PROJECTS</h2>
                        <ListGroup variant="flush">
                            {resumeProjList.map((proj) => (
                                <ProjectItem 
                                    key={proj.project}
                                    project={proj.project}
                                    lang={proj.languages}
                                    github={proj.github}
                                    website={proj.website ? proj.website : undefined}
                                    summary={proj.summary}
                                    desc={proj.desc}
                                />
                            ))}
                        </ListGroup>
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
                                    location={ex.location}
                                    description={ex.description}
                                    website={ex.website}
                                />
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='resume-section'>ASSOCIATIONS</h2>
                        <ul>
                            {associationsList.map((association) => (
                                <li>{association}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='resume-section'>AWARDS AND ACHIEVEMENTS</h2>
                        <ul>
                            {awardsList.map((award) => (
                                <li>{award}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;