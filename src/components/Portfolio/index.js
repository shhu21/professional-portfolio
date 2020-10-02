import React, { useState } from 'react';
import Project from '../Project';

const Portfolio = ({projects}) => {
  return (
    <section id="Portfolio" className="my-5">
      <h1 className='section-title'>Portfolio</h1>
      <div className='flex-container'>
        {projects.map((proj) => (
          <Project 
            key={proj.project} 
            project={proj.project}
            languages={proj.languages}
            description={proj.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;