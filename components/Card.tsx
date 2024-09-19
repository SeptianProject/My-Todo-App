'use client'
import React from 'react'

const Card = ({ children }: { children: any }) => {

    return (
        <div
            className='flex flex-col items-center border-2 border-primary 
            shadow-custom shadow-primary w-72 h-[350px] md:w-80 py-5'>
            {children}
        </div>
    )
}

export default Card