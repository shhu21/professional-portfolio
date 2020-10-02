import React from 'react'; 

function Project({project, languages, description}) {
    return (
        <section>
            {/* TODO: add links to projects */}
            <img className='project-img' alt={project} src={require(`../../assets/images/${project}.png`)}></img>
            <div>
                <h3 className='project-title'>{project}</h3>
                <div className='project-content'>
                    <h4 className='project-subtitle'>Languages</h4>
                    <p>{languages}</p>
                    <h4 className='project-subtitle'>Description</h4>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
}

export default Project;