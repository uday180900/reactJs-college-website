import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/ContactUs/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What we offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What student Says" />
        <Testimonials />
        <Title subTitle="contact us" title="Get in Touch" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
