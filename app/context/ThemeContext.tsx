'use client'

import React, { createContext, useContext, useRef, useState } from "react";

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


// type Theme = {
//     colors: {
//         dark: string;
//         light: string;
//     }
// }

// const defaultTheme: Theme = {
//     colors: {
//         dark: '#090909',
//         light: '#ffffff'
//     }
// }

// const ThemeContext = createContext<Theme>(defaultTheme);

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {


//     return (
//         <ThemeContext.Provider value={defaultTheme}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export const useTheme = () => useContext(ThemeContext);