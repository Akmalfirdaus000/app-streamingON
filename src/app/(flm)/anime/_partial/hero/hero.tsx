import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { TitanHero } from '../../../../../../public/img/anime'


const Hero = () => {
  return (
    <section>
        <Image
        src={TitanHero}
        alt='hero'
        layout=''
        />
        <div className='absolute text-white top-72 left-28 font-extrabold uppercase text-5xl'>Attack On Titan</div>
    </section>
  )
}

export default Hero