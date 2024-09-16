import React from 'react'
import FormField from './FormField'
import Button from './Button'

const Card = () => {

    return (
        <div className='flex flex-col items-center rounded-xl shadow-custom shadow-primary w-80 h-[350px] py-5'>
            <div className='text-center'>
                <h1 className='text-xl font-semibold tracking-wider'>Hello Welcome <span className='text-primary'>Back!!</span></h1>
            </div>
            <div className={`flex flex-col mt-10 gap-y-4`}>
                <FormField
                    focusEvent={true}
                    label='Email'
                    placeholder='Enter your email'
                />
                <FormField
                    focusEvent={true}
                    label='Password'
                    placeholder='Enter your password'
                />
            </div>
            <div className='mt-10'>
                <Button />
            </div>
        </div>
    )
}

export default Card