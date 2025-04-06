import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
// import StatsSection from '../Components/HomePage/StatsSection '
import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import UnbanTiktokHeroSection from '../Components/PremiumTiktokService/UnbanTiktokHeroSection'
import UserClaimHeroSection from '../Components/PremiumTiktokService/UserClaimHeroSection'
import KickUsernameClaimHeroSection from '../Components/PremiumKickService/KickUserClaimHeroSection'
import KickUsernameClaims from '../Components/PremiumKickService/KickUsernameClaims'

const KickUsernameClaimLayout = () => {
  return (
    <>
    <KickUsernameClaimHeroSection/>
    <KickUsernameClaims/>
    {/* <ServicesSection/> */}
    <WhyFansFlares/>
    {/* <AvailableOn/> */}
    <FeaturesSection/>
    <Testimonials/>
    <FAQSection/>
    </>
    
  )
}

export default KickUsernameClaimLayout