import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { heroq } from '../../../public/img/hero'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import './category.css'



export function Category() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay:1000})])

  return (
    <>
      <div className="emblaa  text-white  items-center flex  justify-center bg-slate-800 px-96 m-5 p-3 rounded-full border" ref={emblaRef}>
        <div className="emblaa__container  ">
            <div className='emblaa__slide  '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Action</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Adventure</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Romance</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Comedy</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Slice</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Over Power</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>School</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Fantasy</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Drama</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Love</button>
              </Link>
            </div>
            <div className='emblaa__slide '>
              <Link href="/" className='bg-red-500 h-8  w-28  items-center flex justify-center rounded-full'>
                <button>Sad</button>
              </Link>
            </div>

        </div>
      </div>
    </>
  )
}
