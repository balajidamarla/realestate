// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoHero from "./components/VideoHero";
import About from "./components/About";
import Location from "./components/Location";
import SitePlan from "./components/SitePlan";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <section id="home">
                <VideoHero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="location">
                <Location />
              </section>
              <section id="siteplan">
                <SitePlan />
              </section>
              <section id="gallery">
                <Gallery />
              </section>
              <section id="contact">
                <ContactForm />
              </section>
            </>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
