import React from 'react'
import Hero from '../components/home/Hero'
 import WhatSetsUsApart from '../components/home/WhatSetsUsApart'
import CoreValues from '../components/home/CoreValues';

function Home() {
  return (
    <div >
     <Hero/>
     <div>
     <WhatSetsUsApart/> 
     </div>
     <CoreValues/>
    </div>
  )
}

export default Home;