import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Brands from "./Components/Brands/Brands";
import Loan from "./Components/Loan/Loan";

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <Brands />
      <Programs />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loan" element={<Loan />} />
      </Routes>
    </Router>
  );
};

export default App;
