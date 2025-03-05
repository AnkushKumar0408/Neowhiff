import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo4.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menuIcon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  // const [activeLink, setActiveLink] = useState("hero"); // Default active link

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  // Function to update active link
  // const handleSetActive = (link) => {
  //   setActiveLink(link);
  // };

  // Function to dynamically position the span
  // const getSpanStyles = () => {
  //   switch (activeLink) {
  //     case "hero":
  //       return { left: "658px", width: "80px" };
  //     case "brands":
  //       return { left: "756px", width: "140px" };
  //     case "services":
  //       return { left: "910px", width: "110px" };
  //     case "about":
  //       return { left: "1035px", width: "110px" };
  //     case "testimonials":
  //       return { left: "1158px", width: "150px" };
  //     default:
  //       return {};
  //   }
  // };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            // onClick={() => handleSetActive("hero")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="brands"
            smooth={true}
            offset={-100}
            duration={500}
            // onClick={() => handleSetActive("brands")}
          >
            Achievment
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            offset={-100}
            duration={500}
            // onClick={() => handleSetActive("services")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-99}
            duration={500}
            // onClick={() => handleSetActive("about")}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-380}
            duration={500}
            // onClick={() => handleSetActive("testimonials")}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-210}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>

        {/* Active Indicator */}
        {/* <span style={getSpanStyles()}></span> */}
      </ul>

      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
