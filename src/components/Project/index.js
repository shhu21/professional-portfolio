import React, { useState } from 'react';
import Modal from '../Modal';

function Project({project, languages, description}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <section>
            <div className="project"><img className='project-img' src={require(`../../assets/images/${project}.png`)} onClick={toggleModal} />
                {isModalOpen && (
                    <Modal project={project} languages={languages} description={description} onClose={toggleModal} />
                )}
                <h3 className='project-title'>{project} <span>({languages})</span></h3>
            </div>
        </section>
    );
}

export default Project;