import React from 'react'
import Banner from '../components/Banner'
import JobCategories from '../components/JobCategories'
import MainMobileDiv from '../mainDivision/Mobileview/MainMobileDiv'
import Footer from '../components/Footer';
import FilterMobile from '../components/FilterMobile';

const Home = () => {
  return (
    <div>
      <Banner />
      <JobCategories />
      <FilterMobile />
      <MainMobileDiv />
      <Footer />
    </div>
  )
}

export default Home