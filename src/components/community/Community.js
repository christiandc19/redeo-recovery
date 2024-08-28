import React from 'react'
import Fade from 'react-reveal/Fade';

import './Community.css'
import CommuntiySection from '../community/CommunitySection'
import Contact from '../contact/ContactForm'

const Community = () => {
    return (
        <>
        <div className='community submenu'>

                <div className="community-content">
                    <Fade top>
                    <h1>Useful <span>Community</span> information <br/>about <span>recovery</span> </h1>
                    <p>Addiction recovery communities refer to supportive networks and groups that play a crucial role in helping individuals overcome substance abuse and addiction.</p>
                    </Fade>
                </div>
            </div>
        <CommuntiySection />
        <Contact />
        </>
    )
}

export default Community