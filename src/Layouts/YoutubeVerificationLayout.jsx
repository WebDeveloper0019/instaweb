import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
// import StatsSection from '../Components/HomePage/StatsSection '
import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import YoutubeVerifiedAccountHeroSection from '../Components/PremiumTiktokService/YoutubeVerifiedAccountHeroSection'
import YoutubeVerificationHeroSection from '../Components/PremiumTiktokService/YoutubeVerificationHeroSection'
import YouTubeVerifications from '../Components/PremiumTiktokService/YouTubeVerifications'

const YoutubeVerificationLayout = () => {
  return (
    <>
    <YoutubeVerificationHeroSection/>
    <YouTubeVerifications/>
    {/* <ServicesSection/> */}
    <WhyFansFlares/>
    {/* <AvailableOn/> */}
    <FeaturesSection/>
    <Testimonials/>
    <FAQSection/>
    </>
    
  )
}

export default YoutubeVerificationLayout