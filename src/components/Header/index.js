import React from 'react'; 
import Nav from '../Nav';

function Header({contactSelected, setContactSelected}) {
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