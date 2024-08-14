import React from 'react'
import HeroSection from '../components/HeroSection'
import AcheivementPercent from '../components/AcheivementPercent'
import DetailedSearch from '../components/DetailedSearch'
import JobSection from '../components/JobSection'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <AcheivementPercent/>
        <DetailedSearch/>
        <JobSection/>
        <Subscribe/>
    </div>
  )
}

export default HomePage