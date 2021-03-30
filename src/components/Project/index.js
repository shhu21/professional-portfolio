import React, { useState } from 'react';
import InfoModal from '../Modal';
import Image from 'react-bootstrap/Image';

function Project({project, languages, description, website, github}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <section>
            <div className="project" onClick={toggleModal} >
                <img src={require(`../../assets/images/${project}.png`)}  alt={project} className="project-img"/>
                <div className="overlay project-title">
                    <h3 className='text'>{project} <span>(Click for more details...)</span></h3>
                </div>
            </div>
            {isModalOpen && (
                <InfoModal onClose={toggleModal} project={project} languages={languages} description={description} github={github} website={website} />
            )}
        </section>
    );
}

export default Project;