'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { heroq } from '../../../../../../public/img/hero'


export default function OnePiece() {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <>
      <div className="embla text-white h-40 px-52  items-center flex justify-center mx-16 border m-5  " ref={emblaRef}>
        <div className="embla__container ">
          <div className="embla__slide">
            <Image
              src={heroq}
              alt='ok'
              height={300}
              width={300}
              className='rounded-lg border-2 border-red-500 w-40'
            />
          </div>
          <div className="embla__slide">
            <Image
              src={heroq}
              alt='ok'
              height={500}
              width={300}
              className='rounded-lg border-2 border-red-500 w-40'
            />
          </div>
          <div className="embla__slide">
            <Image
              src={heroq}
              alt='ok'
              height={500}
              width={300}
              className='rounded-lg border-2 border-red-500 w-40'
            />
          </div>
          <div className="embla__slide">
            <Image
              src={heroq}
              alt='ok'
              height={500}
              width={300}
              className='rounded-lg border-2 border-red-500 w-40'
            />
          </div>
          <div className="embla__slide">
            <Image
              src={heroq}
              alt='ok'
              height={500}
              width={300}
              className='rounded-lg border-2 border-red-500 w-40'
            />
          </div>
          <div className="embla__slide">
            <Image
              src={heroq}
              alt='ok'
              height={500}
              width={300}
              className='rounded-lg border-2 border-red-500 w-40'
            />
          </div>
          <div className="embla__slide">
            <Image
              src={heroq}
              alt='ok'
              height={500}
              width={300}
              className='rounded-lg border-2 border-red-500 w-40'
            />
          </div>
        </div>
      </div>
    </>
  )
}