import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo4.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      {window.location.pathname === "/loan" ? (
        // If on loan page, clicking the logo redirects to the home page
        <RouterLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </RouterLink>
      ) : (
        // On other pages, scrolls to the top of the page
        <ScrollLink to="hero" smooth={true} offset={-100} duration={500}>
          <img src={logo} alt="Logo" className="logo" />
        </ScrollLink>
      )}

      <ul className={`nav-links ${mobileMenu ? "show-menu" : ""}`}>
        {location.pathname === "/" ? (
          <>
            {[
              { link: "hero", name: "Home" },
              { link: "brands", name: "Achievments" },
              { link: "services", name: "Services" },
              { link: "about-container", name: "About Us" },
              { link: "testimonial-page", name: "Reviews" },
            ].map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  offset={-85}
                  duration={500}
                  onClick={closeMenu}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </>
        ) : (
          // If not on the home page, clicking links should return to "/"
          <>
            <li>
              <RouterLink to="/" onClick={closeMenu} className="loan-nav">
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/" onClick={closeMenu} className="loan-nav">
                Achievements
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/" onClick={closeMenu} className="loan-nav">
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/" onClick={closeMenu} className="loan-nav">
                About Us
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/" onClick={closeMenu} className="loan-nav">
                Reviews
              </RouterLink>
            </li>
          </>
        )}
        {/* Loan Page Link */}
        <li>
          <a
            href="https://testyesha.netlify.app/#/products"
            className="loan-nav"
          >
            Loan
          </a>
        </li>

        {window.location.pathname === "/loan" ? (
          // If on loan page, clicking the logo redirects to the home page
          <RouterLink to="/" className="btn">
            <li>Contact us</li>
          </RouterLink>
        ) : (
          // On other pages, scrolls to the top of the page
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn"
              onClick={closeMenu}
            >
              Contact us
            </ScrollLink>
          </li>
        )}

        {/* <li>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn"
            onClick={closeMenu}
          >
            Contact us
          </ScrollLink>
        </li> */}
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        {mobileMenu ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
