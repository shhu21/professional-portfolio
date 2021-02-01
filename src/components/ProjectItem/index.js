import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectItem({project, lang, github, website, summary, desc}) {
    return(
        <Card>
            <Card.Body>
                <Card.Title className='company-title'>{project}</Card.Title>
                <Card.Subtitle className="mb-2 project-lang">{lang}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted company-title">{summary}</Card.Subtitle>
                <Card.Text>
                    <ul>
                        {desc.map(d => (
                            <li>{d}</li>
                        ))}
                    </ul>
                </Card.Text>
                <Row classname='project-link'>
                    <Col classname='col-6 col-sm-12'></Col>
                    <Col classname='col-3 col-sm-12'>
                        <Card.Link href={github} target='_blank'>GitHub</Card.Link>
                    </Col>
                    <Col classname='col-3 col-sm-12'>
                        <Card.Link href={website} target='_blank'>Website</Card.Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProjectItem;