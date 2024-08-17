import React, { useEffect, useState } from 'react';
import IEPanel from './components/IEPanel';
import Preloader from './components/Preloader';
import Navbar from './components/MyComponent';
import SwiperComponent from './components/SwiperComponent';
import ServicesSection from './components/ServicesSection';
import CtaSection from './components/CtaSection';
import LatestProjects from './components/LatestProject';
import ThumbnailGallery from './components/ThumbnailGallery';
import YearsOfExperience from './components/YearsOfExperience';
import MeetTheTeam from './components/MeetTheTeam';
import GetMoreWithUs from './components/GetMoreWithUs';
import WhatPeopleSay from './components/WhatPeopleSay';
import Pricing from './components/Pricing';
import LatestBlogPosts from './components/LatestBlogPosts';
import ContactInformation from './components/ContactInformation';
import ContactForm from './components/ContactForm';
import BottomBanner from './components/BottomBanner';
import GoogleMapComponent from './components/GoogleMap';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './css/style.css';
import 'animate.css/animate.min.css';
// import { Route, Routes } from "react-router-dom";
import WOW from 'wowjs';

function App() {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="App">
      <IEPanel />
      <Preloader />
      <Navbar />
      <SwiperComponent />
      <ServicesSection />
      <CtaSection />
      <LatestProjects />
      <ThumbnailGallery />
      <YearsOfExperience />
      <MeetTheTeam />
      <GetMoreWithUs />
      <WhatPeopleSay />
      <Pricing />
      <LatestBlogPosts />
      <ContactInformation />
      <ContactForm />
      <BottomBanner />
      <GoogleMapComponent />
      <Footer />
      <ContactModal show={modalShow} handleClose={() => setModalShow(false)} />
      <button onClick={() => setModalShow(true)}>Open Contact Modal</button>
    </div>
  );
}

export default App;
