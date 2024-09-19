'use client'

import Card from '@/components/Card'
import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from '@/context/ThemeContext'
import { useRouter } from 'next/navigation'
import FormField from '@/components/FormField'
import Button from '@/components/Button'
import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import { signup } from './actions/Auth'
import { useAuthContext } from '@/context/AuthContext'

const page = () => {
  const { pending } = useFormStatus()
  const router = useRouter()
  const { dark, toggleTheme } = useTheme()
  const { inputRef, user, createUser } = useAuthContext()
  const [state, action] = useFormState(signup, undefined)

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
      <Card action={action}>
        <div className='text-center'>
          <h1 className={`${dark ? 'text-white' : 'text-dark'} 
                transition-all duration-700 text-lg md:text-xl 
                font-semibold tracking-wide`}>
            Hello👋 Welcome
            <span className='text-primary'>Back!!</span>
          </h1>
        </div>

        <div className={`flex flex-col mt-10 gap-y-4`}>
          <FormField inputRef={inputRef}
          />
        </div>

        <div className={`absolute right-24 text-red-600 text-sm font-medium 
            bg-white border-2 border-primary shadow-custom shadow-primary py-2 px-4 
            transition-all duration-500 ${state?.errors ? 'opacity-100' : 'opacity-0'}`}>
          {state?.errors?.username && <p className=''>{state.errors.username}</p>}
          {state?.errors?.password &&
            <div>
              <p>Password must: </p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}> - {error}</li>
                ))}
              </ul>
            </div>
          }
        </div>

        <div className='mt-8'>
          <Button type={'submit'}
            disabled={pending}
            onclick={state?.data?.username && state?.data?.password
              ? [createUser(), router.push('/todo')]
              : undefined}
          />
        </div>
      </Card>
    </div>
  )
}

export default page