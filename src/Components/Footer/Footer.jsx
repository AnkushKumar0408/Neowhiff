import React from "react";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 Neowhiff. All rights reserved.</p>
      {window.location.pathname === "/loan" ? (
        // If on loan page, clicking the logo redirects to the home page
        <div>
          <RouterLink
            to="/"
            style={{ textDecoration: "None", margin: "10px", color: "black" }}
          >
            Home
          </RouterLink>
          <RouterLink
            to="/loan"
            style={{ textDecoration: "None", margin: "10px", color: "black" }}
          >
            Loan
          </RouterLink>
        </div>
      ) : (
        // On other pages, scrolls to the top of the page
        <div>
          <ScrollLink
            to="hero"
            smooth={true}
            offset={-80}
            duration={500}
            style={{
              textDecoration: "None",
              margin: "10px",
              color: "black",
              cursor: "pointer",
            }}
          >
            Home
          </ScrollLink>
          <a
            href="https://testyesha.netlify.app/#/products"
            style={{ textDecoration: "None", margin: "10px", color: "black" }}
          >
            Loan
          </a>
        </div>
      )}
    </div>
  );
};

export default Footer;
