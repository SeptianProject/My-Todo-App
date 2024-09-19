'use client'

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(undefined);

export const ThemeProvider = ({ children }:
    { children: React.ReactNode }) => {
    const [dark, setDark] = useState(false)
    const toggleTheme = () => {
        setDark(!dark)
    }

    return (
        <ThemeContext.Provider value={{
            dark,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}