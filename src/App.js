import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ProjectList from './assets/data/projectList';
import ProfileList from './assets/data/profileList';

function App() {
  const [contactSelected, setContactSelected] = useState('home');
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
            home: <Home/>,
            about: <About/>,
            contact: <ContactForm/>,
            portfolio: <Portfolio projects={projects}/>,
            resume: <Resume/>,
          }[contactSelected]
        }
      </main>
      <Footer profileList={ProfileList}/>
    </div>
  );
}

export default App;