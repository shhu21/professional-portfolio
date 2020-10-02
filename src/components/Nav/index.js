import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({contactSelected, setContactSelected}) {
    const tabs = ['about', 'portfolio', 'contact'];

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
            {/* FIXME: resume doesn't download */}
            <li><a className='nav-link' href="../../assets/images/Resume.pdf" target="_blank">Resume</a></li>
        </ul>
    );
}

export default Nav;