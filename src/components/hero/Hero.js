import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./Hero.css";
import Hero1 from '../../assets/Hero1.jpg'
import Hero2 from '../../assets/Hero2.jpg'
import Hero3 from '../../assets/Hero3.jpg'
import Hero4 from '../../assets/Hero4.jpg'
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
            <Fade right>
              <img src={HeroLogo} loading="lazy" repeat-x alt='Rodeo Recovery Logo'/>
            </Fade>
          </div>

        <Fade left>
          <h3><span>SUBSTANCE ABUSE </span> ADDICTION AND </h3>
          <h3><span>MENTAL HEALTH </span> TREATMENT FACILITY</h3>
        </Fade>

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
              <Fade right>
                <button>LEARN MORE</button>
              </Fade>
            </Link>
          </div>

        </div>

        
        <Fade left>
          <div className="rate">
          <h4>60%</h4>
          <h3>Sobriety Success</h3>
          <p>60% of our clients are abstinent from drugs and alcohol 6 months.</p>
          </div>
        </Fade>

        </div>


      </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
