import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
// import StatsSection from '../Components/HomePage/StatsSection '
import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import AutoViewsHeroSection from '../Components/AutomaticViewPage/AutoViewHeroSection'
import AutoViewServicesSection from '../Components/AutomaticViewPage/AutoViewServicesSection'
import ViewDeliveredLikesSection from '../Components/ViewPage/ViewDeliveredLikesSection'
import ViewPricingSlider from '../Components/ViewPage/ViewPricingSlider'
import AutoViews from '../Components/ViewPage/AutoViews'
import ViewsFAQSection from '../Components/ViewPage/ViewsFAQSection'
import AutoViewPricingSection from '../Components/AutomaticViewPage/AutoViewPricingSection'
import AutoViewsFAQSection from '../Components/AutomaticViewPage/AutoViewsFAQSection'

const AutomaticViewLayout = () => {
  return (
    <>
    <AutoViewsHeroSection/>
    {/* <StatsSection/> */}
    <AutoViewServicesSection/>
    <ViewDeliveredLikesSection/>
    <AutoViewPricingSection/>
    <ViewPricingSlider/>
    <WhyFansFlares/>
    <FeaturesSection/>
    <AutoViews/>
    <Testimonials/>
    <AutoViewsFAQSection/>
    </>
    
  )
}

export default AutomaticViewLayout