import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Brands from "./Components/Brands/Brands";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Brands />
        <Programs />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
