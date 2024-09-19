'use client'

import { createContext, useContext, useEffect, useRef, useState } from "react";

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const inputRef: any = useRef()

    const [user, setUser] = useState(
        localStorage.getItem('users')
            ? JSON.parse(localStorage.getItem('users'))
            : []
    )
    const createUser = () => {
        const inputText = inputRef.current.value.trim()
        if (inputText === '') return;

        const newUser = {
            id: Date.now(),
            username: inputText,
            password: 'password'
        }
        setUser((user: any) => [...user, newUser])

        inputRef.current.value = '';
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ inputRef, user, createUser }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}