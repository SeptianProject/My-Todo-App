'use client'

import Card from '@/app/components/Card'
import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from './context/ThemeContext'

const page = () => {
  const { dark, toggleTheme } = useTheme()

  return (
    <div className={`${dark ? 'bg-dark' : 'bg-white'} transition-all duration-500
    flex flex-col items-center justify-center min-h-screen selection:bg-primary selection:text-white`}>
      {/* Mode */}
      <div className='absolute top-24 sm:top-60 lg:top-20 flex items-center gap-x-3'>
        <h1 className='font-semibold text-primary'>Choose Mode🤙</h1>
        <div className='text-2xl bg-primary p-1 rounded text-white'>
          <BiMoon
            onClick={toggleTheme}
            className={`${dark ? 'block' : 'hidden'} cursor-pointer`} />
          <BiSun
            onClick={toggleTheme}
            className={`${dark ? 'hidden' : 'block'} cursor-pointer`} />
        </div>
      </div>
      {/* <Card /> */}
      <Card />
    </div>
  )
}

export default page