'use client'
import React from 'react'
import { Hero, OnePiece } from './_partial'
import { Category } from '@/components/category/category'

const Page = () => {
  return (
    <main>
        <Hero/>
        <Category/>
        <OnePiece/>
    </main>
  )
}

export default Page