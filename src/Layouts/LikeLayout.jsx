import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
import FeaturesSection from '../Components/HomePage/FeaturesSection'
// import ServicesSection from '../Components/HomePage/ServicesSection'
import LikeHeroSection from '../Components/LikePage/LikeHeroSection '
import DeliveredLikesSection from '../Components/LikePage/DeliveredLikesSection'
import PricingSection from '../Components/LikePage/PricingSection'
import PricingSlider from '../Components/LikePage/PricingSlider'
import LikeFAQSection from '../Components/LikePage/LikeFAQSection'
import AutoLikes from '../Components/LikePage/AutoLikes'

const LikeLayout = () => {
  return (
    <>
    <LikeHeroSection/>
    {/* <ServicesSection/> */}
    <DeliveredLikesSection/>
    <PricingSection/>
    <PricingSlider/>
    <WhyFansFlares/>
    <FeaturesSection/>
    <AutoLikes/>
    <Testimonials/>
    <LikeFAQSection/>
    </>
    
  )
}

export default LikeLayout