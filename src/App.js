import React, { useRef } from "react";
import SwiperComp from "./swiper";
import Services from "./services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./footer";
import Logo from "./media/logo2.png";

function App() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  return (
    <div className="App">
      <div className="navbar-block">
        <div className="nav_title">
          <h2>House of tails and paws</h2>
        </div>
        <img src={Logo} alt="Logo" className="logo-pic" />
        <ul className="nav_content">
          <li className="nav" onClick={() => scrollToRef(servicesRef)}>
            SERVICES
          </li>
          <li className="nav" onClick={() => scrollToRef(aboutRef)}>
            ABOUT
          </li>
          <li
            className="nav nav_contact"
            onClick={() => scrollToRef(contactRef)}
          >
            CONTACT
          </li>
        </ul>
      </div>
      <div className="main_welcome_block">
        <SwiperComp />
      </div>
      <div className="services_block" ref={servicesRef}>
        <Services />
      </div>
      <div className="about_block" ref={aboutRef}>
        <About />
      </div>
      <div className="contact_block" ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
