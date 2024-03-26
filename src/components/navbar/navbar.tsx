import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className=' px-10 fixed flex z-10 text-slate-100 m-5 items-center p-3 bg-slate-700 rounded-full border'>
        <div className=' font-bold font-serif text-4xl'>
            <span className='flex'>Stream <p className='text-red-500'>ON</p></span>
        </div>
        <div className=' font-bold pl-48'>
            <ul className=' flex items-center'>
                <li className=' hover:text-slate-300 pl-10'>
                    <Link href={'/'}>
                    <button>Home</button>
                    </Link>
                </li>
                <li className=' hover:text-slate-300 pl-10'>
                    <Link href={'/movie'}>
                    <button>Movies</button>
                    </Link>
                </li>
                <li className=' hover:text-slate-300 pl-10'>
                    <Link href={'/anime'}>
                    <button>Anime</button>
                    </Link>
                </li>
                <li className=' hover:text-slate-300 pl-10'>
                    <Link href={'/my-list'}>
                    <button>My List</button>
                    </Link>
                </li>
                <li className=' hover:bg-blue-500 ml-[290px] bg-blue-600 border  rounded-xl w-24 h-10 flex justify-center items-center'>
                    <Link href={'/login'}>
                    <button>Login</button>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar