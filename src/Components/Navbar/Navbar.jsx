import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo4.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  // Close menu on link click
  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} offset={-100} duration={500}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* Navigation Links */}
      <ul className={`nav-links ${mobileMenu ? "show-menu" : ""}`} >
        {[
          { link: "hero", name: "Home" },
          { link: "brands", name: "Achievments" },
          { link: "Services", name: "Services" },
          { link: "about-container", name: "About Us" },
          { link: "testimonial-page", name: "Reviews" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.link.toLowerCase().replace(" ", "-")}
              smooth={true}
              offset={-85}
              duration={500}
              onClick={closeMenu} // Close menu when clicking on a link
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn"
            onClick={closeMenu} // Close menu when clicking on Contact Us
          >
            Contact us
          </Link>
        </li>
      </ul>

      {/* Hamburger / Cross Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {mobileMenu ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
