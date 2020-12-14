import React from 'react'
import Hero from '../../hero/Hero.component'
import Pricing from '../../pricing/Pricing.component';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Home() {
    return (
        <>
            <Hero {...homeObjOne} />
            <Hero {...homeObjThree} />
            <Hero {...homeObjTwo} />
            <Pricing />
            <Hero {...homeObjFour} />
        </>
    )
}

export default Home
