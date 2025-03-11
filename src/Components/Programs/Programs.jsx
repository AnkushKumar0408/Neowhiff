import React, { useState } from "react";
import "./Programs.css";
import program1 from "../../assets/ServiceImg.svg";

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const offers = [
    {
      title: "Insights and Reports",
      content:
        "By choosing our services, you get all the insights and reports, so that you can improve your further strategy.",
    },
    {
      title: "Highly personalised and feature-rich solutions",
      content:
        "You get highly customer personalized and feature-rich solutions for your business that will lead to growing the business.",
    },
    {
      title: "Strategic Planning",
      content:
        "Strategic planning enables businesses to set goals, allocate resources effectively, and stay ahead in a competitive market.",
    },
  ];

  return (
    <div className="services">
      <div className="left-service">
        <p>WHAT WE DO</p>
        <h1>Neowhiff Solutions Offers The Best Features</h1>
        <div className="offers">
          {offers.map((offer, index) => (
            <div key={index} className="offer">
              <h2 style={{color:"#ffa641"}} onClick={() => toggleContent(index)}>
                <span className="toggle-icon">{activeIndex === index ? "-" : "+"}</span> {offer.title}
              </h2>
              <div className={`content ${activeIndex === index ? "open" : ""}`}>
                <p style={{color:"black",fontSize:"20px",fontFamily:"serif"}}>{offer.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-service">
        <img src={program1} alt="Service" />
      </div>
    </div>
  );
};

export default Programs;
