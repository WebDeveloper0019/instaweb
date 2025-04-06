import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
// import StatsSection from '../Components/HomePage/StatsSection '
import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import AutoLikesHeroSection from '../Components/AutomaticLikesPage/AutoLikesHeroSection'
import AutoLikesPricingSlider from '../Components/AutomaticLikesPage/AutoLikesPricingSlider'
import AutoLikesServicesSection from '../Components/AutomaticLikesPage/AutoLikesServicesSection'
import AutoLikesDeliveredLikesSection from '../Components/AutomaticLikesPage/AutoLikesDeliveredLikesSection'
import AutoLikesPricingSection from '../Components/AutomaticLikesPage/AutoLikesPricingSection'
import AutoLikesFAQSection from '../Components/AutomaticLikesPage/AutoLikesFAQSection'

const AutomaticLikesLayout = () => {
  return (
    <>
    <AutoLikesHeroSection/>
    <AutoLikesServicesSection/>
    <AutoLikesDeliveredLikesSection/>
    <AutoLikesPricingSection/>
    <AutoLikesPricingSlider/>
    <WhyFansFlares/>
    <FeaturesSection/>
    {/* <AutoViews/> */}
    <Testimonials/>
    <AutoLikesFAQSection/>
    </>
    
  )
}

export default AutomaticLikesLayout