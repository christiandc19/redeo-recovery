import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'

import Contact from '../contact/ContactForm'
import TreatmentSection from './TreatmentSection';

const Treatment = () => {
    return (
        <>


{/* -------------------------------- HERO -------------------------------------- */}

        <div className='treatment'>

            <div className="treatment-content">
                <Fade right>
                    <h1>TREATMENT PROGRAMS</h1>
                    <p>Treatment Planning for Long-Lasting Recovery</p>
                </Fade>
            </div>
        </div>

        <TreatmentSection />
        <Contact />
        </>
    )
}

export default Treatment
