import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
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
        {/* <Title subTitle='OUR PROGRAM' title='What We Offer'/> */}
        <Programs />
        <About />
        {/* <Title subTitle='Gallery' title='Campus Photos'/> */}
        {/* <Campus /> */}
        <div className="titleDiv">
        <Title subTitle='TESTIMONIALS' title='What Students Says' />
        </div>
        <Testimonials />
        <div className="titleDiv">
        <Title subTitle='Contact Us' title='Get in Touch'/>
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
