import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ALCOHOL from '../components/Addiction-Alcohol/Alcohol'
import AlcoholSection from '../components/Addiction-Alcohol/AlcoholSection'
import ContactForm from '../components/contact/ContactForm'


const Alcohol = () => {
  return (
    <>
    <Navbar /> 
    <ALCOHOL />
    <AlcoholSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Alcohol