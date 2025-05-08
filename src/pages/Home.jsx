import React from 'react'
import Hero from '../components/home/Hero'
 import WhatSetsUsApart from '../components/home/WhatSetsUsApart'
import CoreValues from '../components/home/CoreValues';
import MyMap from '../components/map/MyMap';
import AboutSection from '../components/home/AboutSection';

function Home() {
  return (
    <div >
     <Hero/>
     <AboutSection/>
     <div>
     <WhatSetsUsApart/> 
     </div>
     <CoreValues/>
     <MyMap/>
    </div>
  )
}

export default Home;