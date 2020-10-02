import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import ProjectList from './assets/data/projectList';
import ProfileList from './assets/data/profileList';

function App() {
  const [contactSelected, setContactSelected] = useState('about');
  const [projects] = useState(ProjectList);

  return (
    <div className='main'>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {
          {
            about: <About/>,
            contact: <ContactForm/>,
            portfolio: <Portfolio projects={projects}/>
          }[contactSelected]
        }
      </main>
      <Footer profileList={ProfileList}/>
    </div>
  );
}

export default App;