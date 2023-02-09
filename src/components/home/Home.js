import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Team from '../../components/team/TeamSection'



const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Whoweare />
    <Team />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
