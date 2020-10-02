import React from 'react'; 

function Footer({profileList}) {
    return (
        <footer className="my-5">
            {profileList.map(profile => (
                <a href={profile.link}>
                    <img className='icon' src={profile.src}/>
                </a>    
            ))}
        </footer>
    );
}

export default Footer;