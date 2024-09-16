import React from 'react'

const Button = () => {
    return (
        <div className="">
            <button className='bg-primary text-white border-2 border-primary 
            hover:bg-gradient-to-r hover:to-white hover:from-primary transform from-10% to-100%
            font-medium transition-all duration-300
            py-1 px-4 rounded-md'
                type="submit">
                Login
            </button>
        </div>
    )
}

export default Button