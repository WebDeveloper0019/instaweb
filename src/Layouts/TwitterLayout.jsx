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
import TwitterHeroSection from '../Components/PremiumTiktokService/TwitterHeroSection'
import TwitterGoldBadgeService from '../Components/PremiumTiktokService/TwitterGoldBadgeService'

const TwitterLayout = () => {
  return (
    <>
    <TwitterHeroSection/>
    {/* <StatsSection/> */}
    <TwitterGoldBadgeService/>
    <WhyFansFlares/>
    {/* <AvailableOn/> */}
    <FeaturesSection/>
    <Testimonials/>
    <FAQSection/>
    </>
    
  )
}

export default TwitterLayout