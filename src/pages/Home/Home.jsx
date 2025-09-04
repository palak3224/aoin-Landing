import React from 'react'
import HeroSection from './Components/Hero'
import BenefitsSection from './Components/BenefitsSection'
import HowItWorksSection from './Components/HowItWorksSection'
import ProofAndTrustSection from './Components/ProofAndTrustSection'
import GrowthTools from './Components/GrowthTools'
import TrustCarousel from './Components/TrustCarousel'
import FAQSection from './Components/FAQSection'
import PremiumFooter from '@/component/PremiumFooter'

function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ProofAndTrustSection />
      <GrowthTools />
      <TrustCarousel />
      <FAQSection />
      <PremiumFooter />
    </div>
  )
}

export default Home