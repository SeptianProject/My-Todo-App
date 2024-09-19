import React, { HTMLInputTypeAttribute } from 'react'

type FormFieldProps = {
    id: string
    label: string
    placeholder: string
    type: HTMLInputTypeAttribute
    inputRef?: any
    theme?: any
    txtError?: any
    error?: any
    rest?: any
}

const FormField = ({ id, label, placeholder, type, inputRef, theme, txtError, error, rest }: FormFieldProps) => {

    return (
        <div className='box-border '>
            <div className="flex flex-col gap-y-2">
                <label htmlFor={id}
                    className={`text-sm font-medium transition-all 
                            duration-300 transform w-20 ${theme ? 'text-white' : 'text-dark'}`}>
                    {label}
                </label>
                <input autoComplete='true' placeholder={placeholder}
                    id={id} name={id} type={type} ref={inputRef}
                    className='border-2 box-border border-slate-400 rounded-md py-2 px-4 
                            text-start text-sm font-medium focus:border-primary 
                            outline-none select-none transition-all duration-300'
                    {...rest}
                />
            </div>
            <div className='mt-1'>
                {error && <p className={`text-xs text-red-500 font-semibold`}>
                    {txtError}
                </p>}
            </div>
        </div>
    )
}

export default FormField