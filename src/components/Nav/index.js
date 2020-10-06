import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { capitalizeFirstLetter } from '../../utils/helpers';

function NavItem({contactSelected, setContactSelected}) {
    const tabs = ['about', 'portfolio', 'contact', 'resume'];

    return (
        <Nav className="justify-content-end" activeKey="/home">
            {tabs.map(tab => (
                <Nav.Item>
                    <Nav.Link 
                        eventKey={tab}
                        href={'#' + tab}
                        onClick={() => setContactSelected(tab)}
                        className={
                        contactSelected === tab ? 'nav-link active' : 'nav-link'
                        }>
                        {capitalizeFirstLetter(tab)}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default NavItem;