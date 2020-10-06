import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({contactSelected, setContactSelected}) {
    const tabs = ['about', 'portfolio', 'contact', 'resume'];

    return (
        <ul className="nav nav-tabs">
            {tabs.map(tab => (
                <li className="nav-item" key={tab}>
                    <a
                        href={'#' + tab}
                        onClick={() => setContactSelected(tab)}
                        className={
                        contactSelected === tab ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {capitalizeFirstLetter(tab)}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Nav;