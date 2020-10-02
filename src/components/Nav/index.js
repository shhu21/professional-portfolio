import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    const tabs = ['about', 'contact', 'portfolio'];
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
            <li><a className='nav-link' href=''>Resume</a></li>
        </ul>
    );
}

export default Nav;