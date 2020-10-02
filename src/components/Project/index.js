import React from 'react'; 

function Project({project, languages, description}) {
    return (
        <section>
            <h3>{project}</h3>
            <div>
                <h4>Languages</h4>
                <p>{languages}</p>
            </div>
            <div>
                <h4>Description</h4>
                <p>{description}</p>
            </div>
        </section>
    );
}

export default Project;