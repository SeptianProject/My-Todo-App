'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { z } from "zod";

export const loginFormSchema = z.object({
    username: z.string()
        .nonempty('Username tidak boleh kosong')
        .min(3, 'Username minimal 3 karakter')
        .max(15, 'Username maksimal 16 karakter'),
    password: z.string()
        .nonempty('Password tidak boleh kosong')
        .min(6, 'Password minimal 6 karakter')
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userStorage = localStorage.getItem('users')
            if (userStorage) {
                try {
                    setUsers(JSON.parse(userStorage))
                } catch (error) {
                    console.error('Invalid', error)
                    setUsers([])
                }
            }
        }
    }, [])

    const createUser = (username: string, password: string) => {
        if (!username || !password) return;

        const newUser = {
            id: Date.now(),
            username: username,
            password: password
        }

        setUsers((users: any) => [...users, newUser])
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('users', JSON.stringify(users))
        }
    }, [users])

    return (
        <AuthContext.Provider value={{ users, createUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}



