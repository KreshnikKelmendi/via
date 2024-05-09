import React, { useState } from 'react'
import Header from '../components/header/Header';
import Banner from '../components/Banner/Banner';
import About from '../components/about/About';
import OurValues from '../components/about/OurValues';
import CoreWork from '../components/about/CoreWork';
import Services from '../components/about/Services';
import ProjectsOne from '../components/about/ProjectsOne';
import ProjectsTwo from '../components/about/ProjectsTwo';
import ProjectsThree from '../components/about/ProjectThree';
import Contact from '../components/about/Contact';


const HomePage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const switchLanguage = (language) => {
    setCurrentLanguage(language);
    // Here you can implement logic to change the language of your application
    // For example, you can reload the page with the selected language or update the language context
  };

  return (
    <div>
        <Header currentLanguage={currentLanguage} switchLanguage={switchLanguage} />
        <Banner currentLanguage={currentLanguage} />
        <About currentLanguage={currentLanguage} />
        <OurValues currentLanguage={currentLanguage} />
        <CoreWork currentLanguage={currentLanguage} />
        <Services currentLanguage={currentLanguage} />
        <ProjectsOne currentLanguage={currentLanguage} />
        <ProjectsTwo currentLanguage={currentLanguage} />
        <ProjectsThree currentLanguage={currentLanguage} />
        <Contact currentLanguage={currentLanguage} />
    </div>
  )
}

export default HomePage