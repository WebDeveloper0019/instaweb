import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
// import StatsSection from '../Components/HomePage/StatsSection '
import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import InstaUnbanHeroSection from '../Components/PremiumInstagramService/InstaUnbanHeroSection'
import InstaUnbanReqHeroSection from '../Components/PremiumInstagramService/InstaUnbanReqHeroSection'
import InstagramUnbanRequests from '../Components/PremiumInstagramService/InstagramUnbanRequests'

const InstagramUnbanReqLayout = () => {
  return (
    <>
    <InstaUnbanReqHeroSection/>
    <InstagramUnbanRequests/>
    {/* <ServicesSection/> */}
    <WhyFansFlares/>
    {/* <AvailableOn/> */}
    <FeaturesSection/>
    <Testimonials/>
    <FAQSection/>
    </>
    
  )
}

export default InstagramUnbanReqLayout