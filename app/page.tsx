'use client'

import Card from '@/components/Card'
import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from '@/context/ThemeContext'
import FormField from '@/components/FormField'
import Button from '@/components/Button'
import { useForm } from 'react-hook-form'
import { loginFormSchema, LoginFormSchema } from '@/context/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'


const page = () => {
  const { dark, toggleTheme } = useTheme()
  const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  })

  const onSubmit = handleSubmit((values) => {
    alert(`Username: ${values.username} || Password: ${values.password}`)
  })

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
      <form onSubmit={onSubmit}>
        <Card>
          <div className='text-center'>
            <h1 className={`${dark ? 'text-white' : 'text-dark'} 
                transition-all duration-700 text-lg md:text-xl 
                font-semibold tracking-wide`}>
              Hello👋 Welcome
              <span className='text-primary'>Back!!</span>
            </h1>
          </div>

          <div className={`flex flex-col mt-10 gap-y-4`}>
            {/* Field Username */}
            <FormField
              id='username'
              label='Username'
              placeholder='Enter your username'
              theme={dark}
              type='text'
              rest={{ ...register('username') }}
              error={formState.errors.username}
              txtError={formState.errors.username?.message}
            />
            {/* field password */}
            <FormField
              id='password'
              label='Password'
              placeholder='Enter your password'
              theme={dark}
              type='password'
              rest={{ ...register('password') }}
              error={formState.errors.password}
              txtError={formState.errors.password?.message}
            />
          </div>

          <div className='mt-8'>
            <Button type={'submit'}
              onclick={onSubmit} />
          </div>
        </Card>
      </form>
    </div>
  )
}

export default page