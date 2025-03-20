import React from 'react'
import FAQSection from '../Components/FaqSection'
import Testimonials from '../Components/Testimonials'
import AvailableOn from '../Components/AvailableOn'
import WhyFansFlares from '../Components/WhyFansFlares'
import HeroSection from '../Components/HeroSection '
import StatsSection from '../Components/StatsSection '
import FeaturesSection from '../Components/FeaturesSection'
import ServicesSection from '../Components/ServicesSection'

const HomeLayout = () => {
  return (
    <>
    <HeroSection/>
    <StatsSection/>
    <ServicesSection/>
    <WhyFansFlares/>
    <AvailableOn/>
    <FeaturesSection/>
    <Testimonials/>
    <FAQSection/>
    </>
    
  )
}

export default HomeLayout