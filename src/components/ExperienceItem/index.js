import React from 'react'; 
import Card from 'react-bootstrap/Card';

function ExperienceItem({company, title, date, description, website}) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Title>{company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Company Website</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ExperienceItem;