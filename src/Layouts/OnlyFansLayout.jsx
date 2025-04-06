import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
import HeroSection from '../Components/HomePage/HeroSection '
// import StatsSection from '../Components/HomePage/StatsSection '
import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import OnlyFansHeroSection from '../Components/PremiumTiktokService/OnlyFansHeroSection'
import OnlyFansUsernameClaim from '../Components/PremiumTiktokService/OnlyFansUsernameClaim'

const OnlyFansLayout = () => {
  return (
    <>
    <OnlyFansHeroSection/>
    <OnlyFansUsernameClaim/>
    {/* <ServicesSection/> */}
    <WhyFansFlares/>
    {/* <AvailableOn/> */}
    <FeaturesSection/>
    <Testimonials/>
    <FAQSection/>
    </>
    
  )
}

export default OnlyFansLayout