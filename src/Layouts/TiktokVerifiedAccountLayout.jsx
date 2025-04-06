import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
// import StatsSection from '../Components/HomePage/StatsSection '
import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import VerifiedAccountHeroSection from '../Components/PremiumTiktokService/VerifiedAccountHeroSection'
import TikTokVerifiedAccounts from '../Components/PremiumTiktokService/TikTokVerifiedAccounts'

const TiktokVerifiedAccountLayout = () => {
  return (
    <>
    <VerifiedAccountHeroSection/>
    <TikTokVerifiedAccounts/>
    {/* <ServicesSection/> */}
    <WhyFansFlares/>
    {/* <AvailableOn/> */}
    <FeaturesSection/>
    <Testimonials/>
    <FAQSection/>
    </>
    
  )
}

export default TiktokVerifiedAccountLayout