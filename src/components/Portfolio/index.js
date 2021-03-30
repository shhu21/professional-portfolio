import React, { useState } from 'react';
import Project from '../Project';

const Portfolio = ({projects}) => {
  return (
    <section>
      <h1 className='section-title'>Projects</h1>
      <div className='flex-container'>
        {projects.map((proj) => (
          <Project 
            key={proj.project} 
            project={proj.project}
            languages={proj.languages}
            description={proj.description} 
            website={proj.website}
            github={proj.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;