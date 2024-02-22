import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

import "./TherapyMH.css";
import { BiBrain } from "react-icons/bi";
import { BiSad } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const TherapyMH = () => {
  return (
    <>
      <div className="TherapyMH">
        <div className="content">
            <div className="TherapyMH-left">
              <div className="left-content container">
                <h1>CONDITIONS WE TREAT</h1>
                <p>Recovery begins here.</p>
                <br />
              </div>
            </div>

          <div className="TherapyMH-right container">
            <Zoom duration={1500}>
              <div className="box1 item">
                <div className="box-content">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/anxiety">
                  <BiBrain className="box-icon" />
                  <h1>ANXIETY</h1>
                  <p>
                  Anxiety is a pervasive mental health condition characterized by excessive worry, fear, and heightened physiological arousal.
                  </p>
                  </Link>
                  </LinkRoll>
                </div>
              </div>
            </Zoom>

            <Zoom duration={1500}>
              <div className="box2 item">
                <div className="box-content">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/depression">
                  <BiSad className="box-icon" />
                  <h1>DEPRESSION</h1>
                  <p>
                  Depression is a mood disorder marked by persistent feelings of sadness, hopelessness, and a loss of interest or pleasure in activities once enjoyed.
                  </p>
                  </Link>
                  </LinkRoll>
                </div>
              </div>
            </Zoom>

            <Zoom duration={1500}>
              <div className="box3 item">
                <div className="box-content">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/bipolar-disorder">
                  <FaTheaterMasks className="box-icon" />
                  <h1>BIPOLAR</h1>
                  <p>
                  Bipolar disorder is a mental health condition characterized by alternating periods of elevated mood (mania or hypomania) and depression, often accompanied by changes in energy, activity levels, and cognition.
                  </p>
                  </Link>
                  </LinkRoll>
                </div>
              </div>
            </Zoom>

            <Zoom duration={1500}>
              <div className="box4 item">
                <div className="box-content">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/ptsd">
                  <GiBrain className="box-icon" />
                  <h1>PTSD DISORDER</h1>
                  <p>
                  Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a traumatic event, manifesting in symptoms such as flashbacks, nightmares, hypervigilance, and emotional numbness.
                  </p>
                  </Link>
                  </LinkRoll>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="TherapyMH-btn">
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/mental-health">
                <div className="TherapyMH-btn">
                  <button class="TherapyMH-cta">
                    <span>VIEW ALL</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </Link>
            </LinkRoll>
          </div>

          <div className="TherapyMH-btn2">
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/mental-health">
                <div className="TherapyMH-btn2">
                  <button class="TherapyMH-cta">
                    <span>VIEW ALL</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </Link>
            </LinkRoll>
          </div>
        </div>
      </div>
    </>
  );
};

export default TherapyMH;
