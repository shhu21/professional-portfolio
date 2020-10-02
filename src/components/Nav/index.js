import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row px-1">
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a data-testid="about" onClick={() => setContactSelected('about')}>
                About me
                </a>
            </li>
            <li className="mx-2">
                <span onClick={() => setContactSelected('contact')}>Contact</span>
            </li>
            <li className="mx-2">
                <span onClick={() => setContactSelected('projects')}>Projects</span>
            </li>
            <li className="mx-2">
                <span onClick={() => setContactSelected('resume')}>Resume</span>
            </li>
            </ul>
        </nav>
        </header>
    );
}

export default Nav;