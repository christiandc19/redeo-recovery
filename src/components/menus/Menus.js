import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'
import './Menus.css'

import Contact2 from '../contact/Contact2'
import SubCardBg from '../../assets/sub-card-bg-min.jpg'


const Menus = () => {
  return (
    <>

<div className="mh-cards-header container">
                <h1>RODEO RECOVERY REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH PROGRAMS </h1>
                <p>At Rodeo Recovery Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>

<div class="mh-card-wrap">
</div>



{/* Mental Health Thumbnails */}



<div class="mh-thumbnail-wrap container">

 <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>Depression</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/depression">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>ANXIETY</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/anxiety">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>PANIC DISORDER</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/panic-disorder">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>STRESS DISORDER</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/acute-stress-disorder">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>ANGER DISORDER</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/anger-disorder">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>ADHD</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/adhd">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>PTSD</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/ptsd">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>BIPOLAR</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/bipolar-disorder">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>SCHIZOAFFECTIVE</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/schizoaffective">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="mh-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>MENTAL HEALTH TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>SCHIZOPHRENIA</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/schizophrenia">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>


 </div>
 <div>
</div>



<Contact2 />

    </>

  )
}

export default Menus
