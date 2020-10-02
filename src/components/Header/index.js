import React from 'react'; 
import Nav from '../Nav';

function Header(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header>
            <h1>Sara Hu</h1>
            <Nav
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </header>
    );
}

export default Header;