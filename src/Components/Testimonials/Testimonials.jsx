import "./Testimonials.css";
import user_1 from "../../assets/testi1.svg";
import user_2 from "../../assets/testi2.svg";
import user_3 from "../../assets/testi3.svg";
import user_4 from "../../assets/testi4.svg";
import user_5 from "../../assets/testi5.svg";
import test_1 from "../../assets/user-1.png";
import test_2 from "../../assets/user-2.png";
import test_3 from "../../assets/user-3.png";
import test_4 from "../../assets/user-4.png";

import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const images = [user_1, user_2, user_3, user_4, user_5];

const testimonials = [
  {
    img: test_1,
    name: "Vaidahi Kapoor",
    text: "Neowhiff has transformed our marketing strategy. The intuitive platform and precise targeting have significantly improved our engagement rates. The real-time analytics offer valuable insights, making it an essential tool for businesses looking to optimize their communication strategies.",
  },
  {
    img: test_2,
    name: "Abhishek Rao",
    text: "Neowhiff's voice solutions have streamlined our customer interactions, ensuring high-quality, efficient communication. The advanced call tracking and seamless integration have enhanced our workflow, making it an indispensable asset for businesses seeking reliable voice solutions.",
  },
  {
    img: test_3,
    name: "Mike Johnson",
    text: "From automated messaging to detailed analytics, Neowhiff provides everything we need to enhance customer outreach. Highly recommended for businesses aiming to scale their communication efforts.",
  },
  {
    img: test_4,
    name: "Emily Davis",
    text: "Neowhiff has exceeded our expectations. The ability to send targeted, personalized messages at scale has strengthened our customer relationships. The platform's efficiency and insightful reporting make it a game-changer for businesses looking to improve customer engagement.",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  const testimonialHandlers = useSwipeable({
    onSwipedLeft: handleNextTestimonial,
    onSwipedRight: handlePrevTestimonial,
  });

  return (
    <div className="testimonial-page">
      {/* Image Slider */}
      <div className="image-slider-container">
        <div className="image-slider">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={i === index ? "active" : ""}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-container" {...testimonialHandlers}>
        <div className="testimonial-card">
          <h1 style={{ color: "white" }}>What Other Says</h1>
          <div className="testChng">
            <img src={testimonials[currentTestimonial].img} alt="" />
            <p>"{testimonials[currentTestimonial].text}"</p>
            <h3>- {testimonials[currentTestimonial].name}</h3>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="dots-navigation">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentTestimonial === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
