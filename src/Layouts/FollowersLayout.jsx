import React from 'react'
import FAQSection from '../Components/HomePage/FAQSection'
import Testimonials from '../Components/HomePage/Testimonials'
import AvailableOn from '../Components/HomePage/AvailableOn'
import WhyFansFlares from '../Components/HomePage/WhyFansFlares'
// import StatsSection from '../Components/HomePage/StatsSection '
import FeaturesSection from '../Components/HomePage/FeaturesSection'
import ServicesSection from '../Components/HomePage/ServicesSection'
import FollowerHeroSection from '../Components/Followerpage/FollowerHeroSection'
import ViewServicesSection from '../Components/ViewPage/ViewServicesSection'
import ViewDeliveredLikesSection from '../Components/ViewPage/ViewDeliveredLikesSection'
import ViewPricingSlider from '../Components/ViewPage/ViewPricingSlider'
import ViewsFAQSection from '../Components/ViewPage/ViewsFAQSection'
import AutoViews from '../Components/ViewPage/AutoViews'
import FollowersServicesSection from '../Components/Followerpage/FollowersServicesSection'
import DeliveredFollowersSection from '../Components/Followerpage/DeliveredFollowersSection'
import FollowersPricingSlider from '../Components/Followerpage/FollowersPricingSlider'
import FollowersFAQSection from '../Components/Followerpage/FollowersFAQSection'

const FollowersLayout = () => {
  return (
    <>
    <FollowerHeroSection/>
    <FollowersServicesSection/>
    <DeliveredFollowersSection/>
    {/* <ViewServicesSection/> */}
    <FollowersPricingSlider/>
    <WhyFansFlares/>
    <FeaturesSection/>
    {/* <AutoViews/> */}
    <Testimonials/>
    <FollowersFAQSection/>
    </>
    
  )
}

export default FollowersLayout