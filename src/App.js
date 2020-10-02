import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState('about');
  const [projects] = useState([
    {
      project: 'CampusMate',
      languages: 'Swift',
      description: 'An IOS mobile application.',
    },
    {
      project: 'Trip Planner',
      languages: 'JS',
      description: 'A trip planner.',
    }
  ]);

  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {
          {
            about: <About/>,
            contact: <ContactForm/>,
            portfolio: <Portfolio projects={projects}/>
          }[contactSelected]
        }
      </main>
      <Footer/>
    </div>
  );
}

export default App;