import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Banner";
import About from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contactForm";
import Footer from "./components/Footer"
export default function App() {
  return (
    <div className="bg-[#0A192F] max-w-[1920px] mx-auto ">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>
       <section id="contact">
        <Contact />
      </section>
       <section id="contactForm">
        <Footer />
      </section>
    </div>
  );
}
