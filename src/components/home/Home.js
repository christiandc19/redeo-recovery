import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Team from '../../components/team/TeamSection'
import HomeSection1 from '../homeSection1/HomeSection1';



const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <HomeSection1 />
    <Whoweare />
    <Team />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
