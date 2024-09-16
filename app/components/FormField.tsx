import React from 'react'
import { formFieldLogin } from './assets'
import { useTheme } from '../context/ThemeContext'

const FormField = () => {
    const { dark } = useTheme()

    return (
        <>
            {
                formFieldLogin.map((field, index) => (
                    <div key={index} className="flex flex-col gap-y-2">
                        <label htmlFor={field.id}
                            className={`text-sm font-medium transition-all 
                            duration-300 transform w-20 ${dark ? 'text-white' : 'text-dark'}`}>
                            {field.label}
                        </label>
                        <input autoComplete='true' type={field.type}
                            placeholder={field.placeholder}
                            className='border-2 box-border border-slate-400 rounded-md py-2 px-4 
                            text-start text-sm font-medium focus:border-primary 
                            outline-none select-none transition-all duration-300'
                        />
                    </div>
                ))
            }
        </>
    )
}

export default FormField