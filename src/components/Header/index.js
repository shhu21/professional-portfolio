import React from 'react'; 
import Nav from '../Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header({contactSelected, setContactSelected}) {
    return (
        <header>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h1>Sara Hu</h1>
                    </Col>
                    <Col xs={12} md={8}>
                        <Nav
                            contactSelected={contactSelected}
                            setContactSelected={setContactSelected}
                        ></Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;