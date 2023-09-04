import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import XANAX from '../components/Addiction-Xanax/Xanax'
import XanaxSection from '../components/Addiction-Xanax/XanaxSection'
import ContactForm from '../components/contact/ContactForm'


const Xanax = () => {
  return (
    <>
    <Navbar /> 
    <XANAX />
    <XanaxSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Xanax