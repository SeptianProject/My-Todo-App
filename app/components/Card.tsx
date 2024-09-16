import React from 'react'
import FormField from './FormField'
import Button from './Button'
import { useTheme } from '../context/ThemeContext'

const Card = () => {
    const { dark } = useTheme()

    return (
        <form className='flex flex-col items-center border-2 border-primary shadow-custom shadow-primary w-72 h-[350px] md:w-80 py-5'>
            <div className='text-center'>
                <h1 className={`${dark ? 'text-white' : 'text-dark'} transition-all duration-700 text-lg md:text-xl font-semibold tracking-wide`}>Hello👋 Welcome <span className='text-primary'>Back!!</span></h1>
            </div>
            <div className={`flex flex-col mt-10 gap-y-4`}>
                <FormField />
            </div>
            <div className='mt-8'>
                <Button />
            </div>
        </form>
    )
}

export default Card