import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIATE from '../components/Addiction-Opiate/Opiate'
import OpiateSection from '../components/Addiction-Opiate/OpiateSection'
import ContactForm from '../components/contact/ContactForm'


const Fentanyl = () => {
  return (
    <>
    <Navbar /> 
    <OPIATE />
    <OpiateSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Fentanyl