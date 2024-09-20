'use client'

import { useAuth } from '@/context/AuthContext'
import React from 'react'

const page = () => {
    const { users } = useAuth()

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1>Todo</h1>
            {users.map((user: any) => (
                <div key={user.id}>
                    <h1>Username {user.username}</h1>
                    <h1>Password {user.password}</h1>
                </div>
            ))}
        </div>
    )
}

export default page