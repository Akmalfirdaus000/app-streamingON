import Image from 'next/image'
import React from 'react'
import { f1, f2, f3, f4, f5, FrameHero, heroq, SpidermanHero } from '../../../public/img/hero'
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
            <ul className=' ml-2 flex items-center text-xs text-white '>
                <li className='flex p-1  border rounded-full'>CBFC:<p>U/A</p></li>
                <li className='p-1 m-2'>Action</li>
                <li className='p-1 m-2'>Adventure</li>
                <li className='p-1 m-2'>2H 28M</li>
            </ul>
            <div>
            <p className='text-white text-xs pr-[500px] mr-5  px-10 text-center'>When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
            <ul className='ml-8 pt-10 text-white text-xs flex'>
                <li className=' bg-red-500 h-8 w-24 flex justify-center items-center font-bold rounded-lg p-3'>
                    <Link href={'/'}>
                        <button> Whatch Now</button>
                    </Link>
                </li>
                <li className='bg-slate-500 h-8 w-24 flex justify-center items-center font-bold rounded-lg ml-10 p-3'>
                    <Link href={'/'}>
                        <button>Add To List </button>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        <div className=' absolute top-[450px]'>
            <Image
            src={FrameHero}
            alt='frame'
            layout=''
            />
            <ul className=' absolute top-[110px] left-28  flex '>
                <li>
                    <Image 
                    src={f5}
                    alt=''
                    layout=''
                    className=' w-40 border-2 rounded-lg'
                    />
                </li>
                <li>
                    <Image 
                    src={f1}
                    alt=''
                    layout=''
                    className=' w-40 border-2 rounded-lg ml-20'
                    />
                </li>
                <li>
                    <Image 
                    src={f2}
                    alt=''
                    layout=''
                    className=' w-40 border-2 rounded-lg ml-20'
                    />
                </li>
                <li>
                    <Image 
                    src={f3}
                    alt=''
                    layout=''
                    className=' w-40 border-2 rounded-lg ml-20'
                    />
                </li>
                <li>
                    <Image 
                    src={f4}
                    alt=''
                    layout=''
                    className=' w-40 border-2 rounded-lg ml-20'
                    />
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Hero