import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import logo from "../../assets/nav-logo.png";
import DHCS from "../../assets/DHCS-logo2.png";
import JointCommission from "../../assets/joint_commission_logo.webp";

import "./FooterStyles.css";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <img src={logo} alt="Rodeo Recovery Rehab Logo" loading="lazy" />
              {/* <h1>RODEO RECOVERY</h1> */}
            </div>

            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <BsFillArrowUpCircleFill className="footer-icon2" />
            </LinkRoll>

            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <BsFillArrowUpCircleFill className="footer-icon" />
            </LinkRoll>
          </div>
          <div className="col-container">
            <div className="footer-col">
              <h3>Company</h3>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mission">
                  <p>Our Mission</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/about-us">
                  <p>About Us</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/team">
                  <p>Our Team</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/testimonials">
                  <p>Testimonials</p>
                </Link>
              </LinkRoll>
            </div>

            <div className="footer-col">
              <h3>Navigation</h3>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/">
                  <p>Home</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health">
                  <p>Mental Health Treatment</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/substance-abuse">
                  <p>Substance Abuse Treatment</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/jobs">
                  <p>Jobs Program</p>
                </Link>
              </LinkRoll>
            </div>


            <div className="certification">

<div className="certificationLeft">
      <h3>Licensed by the State Department of Health Care Services</h3>
      <p>Certification number: 191057BP <br />Certification Expiration date: 6 / 30 / 2025</p>
      <br />
      <a href="https://data.chhs.ca.gov/dataset/sud-recovery-treatment-facilities"
      target="_blank"
      rel="noreferrer">( View License & Certification Information here ).</a>
          <div className='certificationLeftImage'>
              <img
              src={DHCS}
              alt="DHCS Logo"
              loading="lazy"
              />
          </div>
  </div>

  <div className="certificationRight">
      <h3>Rodeo Recovery is accredited by The Joint Commission and have been awarded its Gold Seal of Approval™</h3>
      
          <div className='certificationRightImage'>
              <img
              src={JointCommission}
              alt="Joint Commission Logo"
              loading="lazy"
              />
          </div>
  </div>

</div>



          </div>

          <p className="copyright">
            <p>&copy; 2023 Rodeo Recovery. All rights reserved</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
