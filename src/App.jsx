import React from 'react'
import SalonHomePage from './Component/SalonHomePage'
import SecondPage from './Component/Secondpage'
import ThirdPage from './Component/ThirdPage'
import PackagesSection from './Component/PackagesSection'
import PopularPackagesSection from './Component/PopularPackagesSection'
import WhyChooseSection from './Component/WhyChooseSection'
import TestimonialsSection from './Component/TestimonialsSection'
import FAQSection from './Component/FAQSection'
import FooterSection from './Component/FooterSection'

const App = () => {
  return (
    <div>
      <SalonHomePage/>
      <SecondPage/>
      <ThirdPage/>
      <PackagesSection/>
      <PopularPackagesSection/>
      <WhyChooseSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <FooterSection/>
    </div>
  )
}

export default App