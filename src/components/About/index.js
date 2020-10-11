import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <section className="my-5">
            <h1 className='section-title' id='about'>About Me</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img className='profile' alt='profile' src={require(`../../assets/images/profile.jpeg`)}></img> 
                    </Col>
                    <Col xs={12} md={6}>
                        <div class="animated-title">
                            <div class="text-top">
                                <div>
                                <span>Hello,</span>
                                <span>I'm Sara Hu.</span>
                                </div>
                            </div>
                            <div class="text-bottom">
                                <div>
                                    <span>Front-End Developer,</span>
                                    <span>Art Hobbist,</span>
                                    <span>and</span>
                                    <span>Animal Enthusiast.</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;