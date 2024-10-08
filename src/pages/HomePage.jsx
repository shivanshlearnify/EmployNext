import React from 'react'
import HeroSection from '../components/HeroSection'
import AcheivementPercent from '../components/AcheivementPercent'
import DetailedSearch from '../components/DetailedSearch'
import JobSection from '../components/JobSection'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Reviwes from '../components/Reviwes'
import Premium from '../components/Premium'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <AcheivementPercent/>
        <DetailedSearch/>
        <JobSection/>
        <Reviwes/>
        <Premium/>
        <Subscribe/>
    </div>
  )
}

export default HomePage