import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WeDo from '../../components/Whatwedo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Team from '../../components/team/TeamSection'
import HomeSection1 from '../homeSection1/HomeSection1';
import HomeMission from '../mission/HomeMission';
import TherapyMH from '../theraphyMH/TheraphyMH';



const home = () => {
  return (
    <>
    <WeDo />
    <HomeSection1 />
    <TherapyMH />
    <Whoweare />
    <Team />
    <HomeMission />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
