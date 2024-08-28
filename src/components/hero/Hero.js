import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import "./Hero.css";
import Hero1 from '../../assets/hero8.webp'
import Hero2 from '../../assets/hero7.webp'
import Hero3 from '../../assets/hero6.webp'
import Hero4 from '../../assets/hero5.webp'
import HeroLogo from '../../assets/hero-logo.png'


const Hero = () => {
  return (
    <>
    <div className="hero-content">
      <div className="hero">

      <div class="fling-minislide">
        <img src={Hero1} alt="Slide 1" />
        <img src={Hero2} alt="Slide 2" />
        <img src={Hero3} alt="Slide 3" />
        <img src={Hero4} alt="Slide 4" />
      </div>

      <div class="title-wrapper">

        <div className="hero-box">

          <div className="hero-image">
          <Zoom duration={2000}>
              <img src={HeroLogo} loading="lazy" repeat-x alt='Rodeo Recovery Logo'/>
            </Zoom>
          </div>

          <Zoom duration={2500}>
          <h3><span>SUBSTANCE ABUSE </span> ADDICTION AND </h3>
          <h3><span>MENTAL HEALTH </span> TREATMENT FACILITY</h3>
          </Zoom>

        <div className="hero-btn">

          <div>
            <Link to="/contact">
              <Fade left>
                <button>CALL US</button>
              </Fade>
            </Link>
          </div>

          <div className="hero-btn2">
            <Link to="/treatment">
            <Zoom duration={3000}>
                <button>LEARN MORE</button>
              </Zoom>
            </Link>
          </div>

        </div>

        
        <Zoom duration={3000}>
          <div className="rate">
          <h4>60%</h4>
          <h3>Sobriety Success</h3>
          <p>60% of our clients are abstinent from drugs and alcohol in 6 months.</p>
          </div>
        </Zoom>

        </div>


      </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
