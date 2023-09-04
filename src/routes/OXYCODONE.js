import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OXYCODONE from '../components/Addiction-Oxycodone/Oxycodone'
import OxycodoneSection from '../components/Addiction-Oxycodone/OxycodoneSection'
import ContactForm from '../components/contact/ContactForm'


const Oxycodone = () => {
  return (
    <>
    <Navbar /> 
    <OXYCODONE />
    <OxycodoneSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Oxycodone