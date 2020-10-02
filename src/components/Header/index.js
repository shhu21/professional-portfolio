import React from 'react'; 
import Nav from '../Nav';

function Header(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header>
            <Nav
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </header>
    );
}

export default Header;