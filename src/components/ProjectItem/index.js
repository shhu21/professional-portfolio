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
                {website ? <Card.Link href={website} target='_blank'>|<span>Website</span></Card.Link> : ''}
                <Card.Link href={github} target='_blank'><span>GitHub</span></Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectItem;