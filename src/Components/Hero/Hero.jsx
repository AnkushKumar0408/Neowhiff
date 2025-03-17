import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.css";
import homeImg from "../../assets/MainBanner.svg";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["ONE TIME PASSWORD", "VOICE OTP", "WHATSAPP"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1 style={{ fontWeight: "900" }}>
          {text}
          <Cursor />
        </h1>
        <h4>CONNECT WITH EASE</h4>
        <p>
          Instant{" "}
          <span className="splFont">
            Connections. Seamless <br />
            Communication.
          </span>{" "}
          Strengthen Customer <br />
          Relationships.
        </p>

        <button className="btn">
          <ScrollLink
            to="services"
            smooth={true}
            offset={-90}
            duration={500}
            style={{
              textDecoration: "None",
              margin: "10px",
              color: "black",
              cursor: "pointer",
            }}
          >
            Explore More
          </ScrollLink>
        </button>
      </div>
      <div className="hero-Image">
        <img src={homeImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
