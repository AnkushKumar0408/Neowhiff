import React, { useState, useEffect, useRef } from "react";
import "./Brands.css";
import image1 from "../../assets/Brand1.jpg";

const images = [image1, image1, image1, image1, image1, image1, image1, image1];

const Brands = () => {
  const [clients, setClients] = useState(0);
  const [growth, setGrowth] = useState(0);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Prevent re-triggering animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateNumber(setClients, 267, 1500); // Animate to 267 in 2 seconds
          animateNumber(setGrowth, 27, 1500); // Animate to 27 in 2 seconds
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateNumber = (setValue, target, duration) => {
    let start = 0;
    const increment = target / (duration / 20); // Adjust speed
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start));
      }
    }, 20);
  };
 
  return (
    <div className="brands" ref={sectionRef}>
      <h1>Trusted by leading global brands</h1>
      <div className="brand-silder">
        <div className="brand-slide">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Brand ${index}`} />
          ))}
          {images.map((src, index) => (
            <img key={index + images.length} src={src} alt={`Brand ${index}`} />
          ))}
        </div>
        <div className="achiev">
          <h3>Achievement</h3>
          <p>Improve the customer engagement with our services</p>
          <div className="numbers">
            <div className="clients">
              <h1>{clients}+</h1>
              <p>TOTAL CLIENTS</p>
            </div>
            <div className="growth">
              <h1>{growth}%</h1>
              <p>PER MONTH GROWTH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
