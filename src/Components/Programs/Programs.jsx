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
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, consectetur optio animi accusantium eveniet aliquid.",
    },
    {
      title: "Market Analysis",
      content:
        "Market analysis helps businesses understand industry trends, customer preferences, and competition to make informed decisions.",
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
        <p>Services offered</p>
        <h1>We Help You Reach The World Through</h1>
        <div className="offers">
          {offers.map((offer, index) => (
            <div key={index} className="offer">
              <h2 onClick={() => toggleContent(index)}>
                <span className="toggle-icon">{activeIndex === index ? "-" : "+"}</span> {offer.title}
              </h2>
              {activeIndex === index && <p>{offer.content}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="right-service">
        <img src={program1} alt="" />
      </div>
    </div>
  );
};

export default Programs;
