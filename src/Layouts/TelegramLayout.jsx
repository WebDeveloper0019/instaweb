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
import TelegramHeroSection from '../Components/PremiumTiktokService/TelegramHeroSection'
import TelegramVerification from '../Components/PremiumTiktokService/TelegramVerification'
import TelegramVerificationServices from '../Components/PremiumTiktokService/TelegramVerificationServices'
import TelegramFAQSection from '../Components/PremiumTiktokService/TelegramFAQSection'

const TelegramLayout = () => {
  return (
    <>
    <TelegramHeroSection/>
    {/* <StatsSection/> */}
    {/* <TelegramVerification/> */}
    <TelegramVerificationServices/>
    <WhyFansFlares/>
    {/* <AvailableOn/> */}
    <FeaturesSection/>
    <Testimonials/>
    <TelegramFAQSection/>
    </>
    
  )
}

export default TelegramLayout