import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";

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
      </div>
    </div>
  );
};

export default App;
