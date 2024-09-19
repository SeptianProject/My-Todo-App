'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import { signup } from '@/app/actions/Auth'

const Card = ({ children, action }: { children: any, action: any }) => {

    return (
        <form action={action} method='POST'
            className='flex flex-col items-center border-2 border-primary 
            shadow-custom shadow-primary w-72 h-[350px] md:w-80 py-5'>
            {children}
        </form>
    )
}

export default Card