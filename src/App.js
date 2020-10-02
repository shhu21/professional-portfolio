import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState('about');

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {
          {
            about: <About></About>,
            contact: <ContactForm></ContactForm>,
            projects: <Projects></Projects>,
            resume: <Resume></Resume>
          }[contactSelected]
        }
      </main>
    </div>
  );
}

export default App;