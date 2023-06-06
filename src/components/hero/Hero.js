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
      <div className="hero">

      <div class="fling-minislide">
        <img src={Hero1} alt="Slide 1" />
        <img src={Hero2} alt="Slide 2" />
        <img src={Hero3} alt="Slide 3" />
        <img src={Hero4} alt="Slide 4" />
      </div>

      <div class="title-wrapper">

        {/* <Fade left>
          <h2>WELCOME TO</h2>
        </Fade> */}

        <Fade right>
            <img src={HeroLogo} loading="lazy" width="500px" height="150px" repeat-x alt='wave divider'/>
        </Fade>

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
      </div>

        
        {/* <div className="hero-container">
          <div className="content">
            <h1 className="animate-charcter">Redding Rehab</h1>
            <Fade left>
              <h2 className="subtitle">
                Substance Abuse Addiction and Mental Health Treatment Facility
              </h2>
            </Fade>
            <br />
            <div className="hero-btn">
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
            <br />
            <Fade bottom>
              <p>Find your happiness and learn to put it first.</p>
            </Fade>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
