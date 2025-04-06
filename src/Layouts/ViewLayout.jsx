import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'

import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import ViewHeroSection from '../Components/ViewPage/ViewHeroSection'
import StatsSection from '../Components/HomePage/StatsSection'
import DeliveredLikesSection from '../Components/LikePage/DeliveredLikesSection'
import PricingSection from '../Components/LikePage/PricingSection'
import PricingSlider from '../Components/LikePage/PricingSlider'
import AutoLikes from '../Components/LikePage/AutoLikes'
import LikeFAQSection from '../Components/LikePage/LikeFAQSection'
import ViewServicesSection from '../Components/ViewPage/ViewServicesSection'
import ViewDeliveredLikesSection from '../Components/ViewPage/ViewDeliveredLikesSection'
import ViewPricingSection from '../Components/ViewPage/ViewPricingSection'
import ViewPricingSlider from '../Components/ViewPage/ViewPricingSlider'
import AutoViews from '../Components/ViewPage/AutoViews'
import ViewsFAQSection from '../Components/ViewPage/ViewsFAQSection'

const ViewLayout = () => {
  return (
    <>
    <ViewHeroSection/>
    <ViewServicesSection/>
    <ViewDeliveredLikesSection/>
    <ViewPricingSection/>
    <ViewPricingSlider/>
    <WhyFansFlares/>
    <FeaturesSection/>
    <AutoViews/>
    <Testimonials/>
    <ViewsFAQSection/>
    </>
    
  )
}

export default ViewLayout