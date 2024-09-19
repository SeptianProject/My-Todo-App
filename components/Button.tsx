import React from 'react'

const Button = ({ type, disabled, onclick }: { type: "submit", disabled: boolean, onclick: any | undefined }) => {
    return (
        <button className='bg-primary text-white text-base font-medium 
            border border-transparent box-border 
            hover:rounded-none hover:bg-white hover:text-primary
            hover:border-primary hover:shadow-custom2 hover:shadow-primary 
            transition-all duration-300 hover:translate-y-2
            py-1 px-4' type={type} disabled={disabled} onClick={onclick}>
            Sign Up
        </button>
    )
}

export default Button