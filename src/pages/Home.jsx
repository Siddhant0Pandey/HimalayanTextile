import React from 'react'
import Hero from '../components/home/Hero'
 import WhatSetsUsApart from '../components/home/WhatSetsUsApart'
import CoreValues from '../components/home/CoreValues';
import MyMap from '../components/map/MyMap';
import AboutSection from '../components/home/AboutSection';
import ProductsSection from '../components/home/ProductsSection';
import ProcessSection from '../components/home/ProcessSection';

function Home() {
  return (
    <div >
     <Hero/>
     <ProcessSection/>
     <div >
      <AboutSection />
    </div>
     <div>
     <WhatSetsUsApart/> 
     </div>
     <ProductsSection/>
     <CoreValues/>
     <MyMap/>
    </div>
  )
}

export default Home;