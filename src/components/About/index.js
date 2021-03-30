import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <section className="my-5 section-about">
            <h1 className='section-title' id='about'>About Me</h1>
            <Row>
                <Col xs={12} md={3}>
                    <img className='profile' alt='profile' src={require(`../../assets/images/profile.jpeg`)}></img> 
                </Col>
                <Col xs={12} md={9} className='bio'>
                    <p>Front-End Web developer with skills in Javascript, C++, CSS, React.js, mobile applications and responsive web design.  Graduated with a Bachelor’s of Science in Computer Science with Business Applications at the University of California, Riverside and received a certificate in full stack development from the University of California, Berkeley.  Strengths in team collaboration, innovative and critical thinking, problem solving, and attention to detail.  Experience in collaborative teams to create fully-functional applications, such as mobile applications to help a user centralize data and web applications to allow users to connect and share information.  Passionate about solving new challenges to create innovative applications.  Excited to use these skills, experience, and passion to create meaningful applications to provide users quality performance and experience.</p>
                </Col>
            </Row>
        </section>
    );
}

export default About;