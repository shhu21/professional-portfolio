import React from 'react'; 
import Card from 'react-bootstrap/Card';

function ExperienceItem({company, title, date, description, website}) {
    return(
        <Card>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted company-title">{date}</Card.Subtitle>
                <Card.Title className='company-title'>{company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted company-title">{title}</Card.Subtitle>
                <Card.Text>
                    <ul>
                        {description.map((desc) => (
                            <li>{desc}</li>
                        ))}
                    </ul>
                </Card.Text>
                <Card.Link href={website} target='_blank'>Company Website</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ExperienceItem;