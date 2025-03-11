import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.css";
import homeImg from "../../assets/MainBanner.svg";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["ONE TIME PASSWORD", "VOICE OTP", "WHATSAPP"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const handleRedirect = () => {
    window.location.href = "https://testyesha.netlify.app/";
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1 style={{fontWeight:'900'}}>
          {text}
          <Cursor />
        </h1>
        <h4>CONNECT WITH EASE</h4>
        <p>
          Instant <span className="splFont">Connections. Seamless <br />
          Communication.</span> Strengthen Customer <br />
          Relationships.
        </p>

        <button className="btn" onClick={handleRedirect}>
          Exolore More
        </button>
      </div>
      <div className="hero-Image">
        <img src={homeImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
