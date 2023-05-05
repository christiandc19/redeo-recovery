import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import Wave from '../../assets/waves.svg'
import HeroLogo from '../../assets/hero-logo.png'


const Hero = () => {
    return (
<>        
        <div className='hero'>


        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>


            <div className="hero-container container">
                <div className="content">
                    <Fade right>
                        <img src={HeroLogo} loading="lazy" width="500px" height="150px" repeat-x alt='wave divider'/>
                    </Fade>
                    <Fade left>
                        <h2 className='subtitle'>Substance Abuse Addiction and <br/>Mental Health Treatment Facility</h2>
                    </Fade>
                        <br />



                        <div className='hero-btn'>




                        <Link to="/contact">

                        <button class="cta">
  <span>Call Us</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>






                    </Link>





                    </div>





                    <br />
                    <Fade bottom>
                        <p><i>"Walk the road of recovery with us"</i></p>
                    </Fade>
                </div>
            </div>
        </div>
</>

    )
}

export default Hero