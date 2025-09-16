import React from 'react'
import Hero from './components/Hero'
import FeaturesSection from './components/FeaturesSection'
import AoinBonusSection from './components/AoinBonusSection'
import HowBusinessWorksSection from './components/HowBusinessWorksSection'
import WhatWillISellSection from './components/WhatWillISellSection'
import StorePreviewSection from './components/StorePreviewSection'
import FreeFeatures from './components/FreeFeatures'
import AoinBusinessPackage from './components/AoinBusinessPackage'
import TestimonialCarousel from './components/TestimonialCarousel'
import BusinessStartSection from './components/BusinessStartSection'
import PricingSection from './components/PricingSection'
import WhySellAoinStoreSection from './components/WhySellAoinStoreSection'
import WhoCanSellSection from './components/WhoCanSellSection'
import OfferStrip from '@/component/OfferStrip'

const Landing2 = () => {
  return (
    <div>
      <OfferStrip />
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <AoinBonusSection />
      <WhoCanSellSection />
      <HowBusinessWorksSection />
      <WhySellAoinStoreSection />
      <WhatWillISellSection />
      <StorePreviewSection />
      <FreeFeatures />
      <AoinBusinessPackage />
      <TestimonialCarousel />
      <BusinessStartSection />
    </div>
  )
}

export default Landing2