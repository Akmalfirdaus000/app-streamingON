import Image from 'next/image'
import React from 'react'
import { f1, f2, f3, f4, f5, FrameHero, heroq, SpidermanHero } from '../../../../../../public/img/hero'
import Link from 'next/link'

const Hero = () => {
  return (
    <section>
        <Image
        src={heroq}
        alt='hero'
        layout=''
        />
        <div className=' absolute top-40 left-[500px]'>
            <Image 
            src={SpidermanHero}
            height={300}
            width={300}
            alt='spiderman'
            className=''
            />
           
            
        </div>
      
    </section>
  )
}

export default Hero