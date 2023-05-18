import React from "react";
import "./Whatwedo.css";

import wrapper1 from "../../assets/wrapper1-min.jpg";

const WhatWeDo = () => {
  return (
    <>
      <div className="wrapper1 ">
        <div className="wrapper-content container">
          <div className="wrapper-content-left">
            <img src={wrapper1} alt="nurse" loading="lazy" />
          </div>

          <div className="wrapper-content-right">
            <h1>What We Do</h1> <br />
            <h2>
              <i>We always care about your mental health</i>
            </h2>{" "}
            <br />
            <p>
              At Rodeo Rehab Treatment Center, we provide Substance Abuse Addiction and Mental Health Disorder treatment in a caring, professional environment focused on meeting the needs of our patients. From our welcoming front office staff to our skilled nurses and counselors, we are here to assist you with your recovery process. Each patient’s treatment plan is shaped to address their personal recovery needs and goals. This level of flexibility is also apparent in our extended weekday dispensary hours, which enable us to provide treatment services to more individuals in our community.
            </p>{" "}
            {/* <br />
            <h1>Treatment</h1> <br />
            <p>
              All treatment clients will have a recovery/treatment plan
              developed within 30 days of admission. Measurement and
              reassessment of treatment plan progress happen on a weekly basis
              through the weekly summary. <br />
              <br /> In the weekly summary, the drug and alcohol counselor will
              ensure that action steps to be taken by client or counselor are on
              target and that the action step achievements will enable
              resolution of the objective. All treatment plans are reviewed by
              and signed off on by the clinical director.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
