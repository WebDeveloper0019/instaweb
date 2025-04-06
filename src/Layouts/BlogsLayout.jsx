import React from 'react'
import BlogsHeroSection from '../Components/BlogsPage/BlogsHeroSection'
import BlogsSection from '../Components/BlogsPage/BlogsSection'
import AllBlogsSection from '../Components/BlogsPage/AllBlogsSection'
import InstaBlogsSection from '../Components/BlogsPage/InstaBlogsSection'


const BlogsLayout = () => {
  return (
    <>
    {/* <BlogsHeroSection/> */}
    <BlogsSection/>
    <AllBlogsSection/>
    <InstaBlogsSection/>
    
    </>
    
  )
}

export default BlogsLayout