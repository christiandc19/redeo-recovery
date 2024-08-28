import React from 'react'

import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy'
import PrivacyPolicySection from '../components/privacyPolicy/PrivacyPolicySection'

import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const PrivacyPolicyPage = () => {
    return (
        <>
           <Navbar />
           <PrivacyPolicy />
           <PrivacyPolicySection />
           <Footer />
        </>
    )
}

export default PrivacyPolicyPage
