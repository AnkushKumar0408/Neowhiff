// import React, { useEffect, useState } from 'react'
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import './Hero.css'
import homeImg from '../../assets/MainBanner.svg'

// const texts = ["ONE TIME PASSWORD", "VOICE MESSAGE", "THANK YOU"];

const Hero = () => {

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  const [text] = useTypewriter({
    words : ['PASSWORD','VOICE OTP','WHATSAPP'],
    loop : {},
    typeSpeed : 120,
    deleteSpeed : 80,
  })
 
  return (
    <div className='hero container'>
        <div className="hero-text">
            {/* <h1 key={index} className="fade-text">{texts[index]}</h1> */}
            <h1>{text}
            <Cursor/>
            </h1>
            <h4>CONNECT WITH EASE</h4>
            <p>Instant Connections. Seamless <br />Communication. Strengthen Customer <br />Relationships.</p>
        </div>
        <div className="hero-Image">
          <img src={homeImg} alt="" />
        </div>
    </div>
  )
}

export default Hero