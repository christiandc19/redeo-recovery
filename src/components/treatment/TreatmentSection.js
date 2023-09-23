import React from 'react'

import Treatment1 from '../../assets/treatment1.webp'
import Treatment2 from '../../assets/treatment2.webp'
import TreatmentImage2 from '../../assets/treatment-2.webp'
import Activities from "../../assets/activities-min.webp";

// import { FaRegStar } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';


import './TreatmentSection.css'


const TreatmentSection = () => {
  return (
    <>

      {/* SECTION 1 - OVERVIEW */}

      <div className="container treatment-section-overview">

        <div className='overview-flex'>

          <div className='overview-left'>
              <img src={Treatment1} alt="Psychiatrist" loading="lazy" />
          </div>

          <div className='overview-right'>
              <h1>Mental Health and Substance Abuse Treatment Above and Beyond the Norms</h1>
              <p>
              Here at Rodeo Recovery, we firmly stand that without addressing
              our physical aspect, the mind cannot successfully recover. We go above
              and beyond the norms of mental health care, through a thorough and
              intentional treatment plan that is specific to every kind of
              individual that addresses not only the mental but also the physical
              inequalities in the body.
              <br />
              <br />
              Methods used by Rodeo Recovery are non-invasive, distinct, and
              successful in relieving acute symptoms that act as roadblocks to
              receiving the full therapy. Additionally, to get past more difficult
              progress barriers, these services are provided on a consistent and
              ongoing basis which is closely observed in coordination with our
              clinical team.
              <br />
              <br />
              The physical, mental, and spiritual imbalances have been found to be
              restored by its healing methods. Our design of mental health treatment
              is custom-fit to every individual. Compared to the programs which are
              commonly used, we are a firm believer that we can reach the full
              potential of our well-being by healing the body, mind and spirit.
            </p>
          </div>
        </div>
      </div>



      {/* SECTION 2 - TREATMENT PLAN */}

      <div className="treatment-section2">

      <div className='treatment-section2-header container'>
                  <h1>Treatment Plan</h1>
                  <p>
                    All treatment clients will have a recovery/treatment plan developed
                    within 30 days of admission. Measurement and re-assessment of
                    treatment plan progress happen on a weekly basis through the weekly
                    summary. In the weekly summary, the drug and alcohol counselor will
                    ensure that action steps to be taken by client or counselor are on
                    target and that the action step achievements will enable resolution
                    of the objective. All treatment plans are reviewed by and signed off
                    on by the clinical director.{" "}
                  </p>
          </div>


        <div className="treatment-section2-flex container">


          <div className="treatment-section2-left">
            <p>
              The treatment plan will be developed between client and counselor
              from key information gleaned from the assessment and intake
              process. This treatment plan will be goal and action oriented with
              objective and measurable criteria. Each treatment plan will have a
              statement of problem(s) with which the client identifies,
              statement of objectives to be reached that addressees each
              problem, action steps for client and counselor to ensure that
              objective will be completed.
              <br />
              <br />
              Counselor and client will work together to compose a treatment
              plan with clear objectives and goals based on key areas intake
              assessment. It will include: challenges that the client may
              encounter during recovery process, clear methods of navigating
              obstacles in recovery, action steps to be taken by the program
              and/or client to overcome the challenges of recovery.
            </p>

            <p>
            Some areas to be examined may be personal relationships, work, anger
            management, lack of power, financial burdens, separation from
            children, past trauma as it relates to present, school, etc.
            <ul>
              <br />
              <li>
                <AiOutlineCheckCircle className="star" /> Counselor and client will set
                clear and tangible goals regarding above mentioned obstacles.
              </li>
              <br />
              <li>
                <AiOutlineCheckCircle className="star" /> Counselor and client will
                brainstorm potential hurdles as client attempts to accomplish
                goals.
              </li>
              <br />
              <li>
                <AiOutlineCheckCircle className="star" /> Counselor and client discuss
                systems for working through hurdles. Counselor and client will —
                upon following weekly session — discuss successes and setbacks
                for set goals.
              </li>
            </ul>
          </p>
          </div>

          <div className="treatment-section2-right">
            <img src={Treatment2} alt="Rehab Team" loading="lazy" />
          </div>
        </div>
      </div>




      {/* SECTION 3 */}

      <div className="treatment-section3">

      <div className="treatment-section3-flex container">

        <div className="treatment-section3-left">
          <img src={TreatmentImage2} alt="Rehab Team" loading="lazy" />
        </div>

        <div className="treatment-section3-right">
          <p>
            Some areas to be examined may be personal relationships, work, anger
            management, lack of power, financial burdens, separation from
            children, past trauma as it relates to present, school, etc.
            <ul>
              {" "}
              <br />
              <li>
                <AiOutlineCheckCircle className="star" /> Counselor and client will set
                clear and tangible goals regarding above mentioned obstacles.
              </li>
              <br />
              <li>
                <AiOutlineCheckCircle className="star" /> Counselor and client will
                brainstorm potential hurdles as client attempts to accomplish
                goals.
              </li>
              <br />
              <li>
                <AiOutlineCheckCircle className="star" /> Counselor and client discuss
                systems for working through hurdles. Counselor and client will —
                upon following weekly session — discuss successes and setbacks
                for set goals.
              </li>
            </ul>
          </p>
        </div>
      </div>
      </div>





      {/* SECTION 4 - RECREATIONS */}

      <div className="treatment-section4">
        <div className='treatment-section4-flex container'>

          <div className="treatment-section4-left">
            <div className="tile-header">
              <h1>Recreations</h1>
            </div>
              <p>
                Rodeo Recovery promotes fun activities that clients learn how to
                develop interests and hobbies that helps then improve their mental
                health. Clients must be cleared by the doctor to participate.
                Organized activities may include but are not limited to:
              <ul>
              <br />
              <li>
                <AiOutlineCheckCircle className="star" /> Movies.
              </li>
              <li>
                <AiOutlineCheckCircle className="star" /> Bowling.
              </li>
              <li>
                <AiOutlineCheckCircle className="star" /> Beach/Lake Activities.
              </li>
              <li>
                <AiOutlineCheckCircle className="star" /> Miniature Golf.
              </li>
              <li>
                <AiOutlineCheckCircle className="star" /> Bonfires (Weather permitting).
              </li>
              <li>
                <AiOutlineCheckCircle className="star" /> Major League Baseball Games.
              </li>
              <li>
                <AiOutlineCheckCircle className="star" /> Hiking/Nature walk.
              </li>
              <li>
                <AiOutlineCheckCircle className="star" /> Community Pool.
              </li>
            </ul>
          </p>
        </div>

              <div className="treatment-section4-right">
                <img src={Activities} alt="activities" />
              </div>
        </div>
      </div>




      {/* SECTION 5 - GROUP AND INDIVIDUAL THERAPY */}

      <div className="container treatment-section5">

            <div className='treatment-section5-header'>
              <h1>Individual and Group Counseling Sessions</h1>
            </div>

            <div className='treatment-section5-icon'>
                <h3><AiOutlineCheckCircle className="star" /> Individual Sessions.</h3>
                <p>
                  All program Clients will receive, at a minimum, one weekly
                  individual session. The focus of the individual sessions will
                  range from completion of the assessment, completion of the
                  treatment plan.
              </p>
            </div>


            <div className='treatment-section5-icon'>
                <h3><AiOutlineCheckCircle className="star" /> Group Sessions.</h3>
                <p>
                Groups provide face to face contact with two or more clients and
                one or more counselor that are facilitated by staff.
              </p>
            </div>

            <br />




            <div className='treatment-section5-header'>
              <h1>Individual and Group Therapy</h1>
            </div>

            <div className='treatment-section5-icon'>
                <h3><AiOutlineCheckCircle className="star" /> Cognitive Behavioral Therapy.</h3>
                <p>
                This method helps you develop your way of thinking towards
              difficult situation and handle your emotional challenges in a
              lightly manner.
              </p>
            </div>


            <div className='treatment-section5-icon'>
                <h3><AiOutlineCheckCircle className="star" /> Dialectal Behavioral Therapy.</h3>
                <p>
                This method is to help you learn skills on how to accept and understand your difficult feelings. This therapy tries to change negative feelings into positive behavior.
              </p>
            </div>


            <div className='treatment-section5-icon'>
                <h3><AiOutlineCheckCircle className="star" /> Psychodynamic Therapy.</h3>
                <p>
                This method is used to describe the study of emotional forces and processes, particularly those that develop during the childhood stage, and their effects on behavior and mental states. Psychodynamic therapy is a form of talking therapy that helps clients deal with depression, anxiety, pain, and other mental issues
              </p>
            </div>


            <div className='treatment-section5-icon'>
                <h3><AiOutlineCheckCircle className="star" /> Interpersonal Therapy.</h3>
                <p>
                This method is used to describe the study of emotional forces and processes, particularly those that develop during the childhood stage, and their effects on behavior and mental states. Psychodynamic therapy is a form of talking therapy that helps clients deal with depression, anxiety, pain, and other mental issues.
              </p>
            </div>

      </div>


      {/* <Contact2 /> */}


    </>
  )
}

export default TreatmentSection