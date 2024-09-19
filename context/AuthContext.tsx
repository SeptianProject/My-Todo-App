'use client'
import { createContext, useContext } from "react";
import { z } from "zod";


export const loginFormSchema = z.object({
    username: z.string()
        .min(3, 'Username minimal 3 karakter')
        .max(15, 'Username maksimal 16 karakter'),
    password: z.string()
        .min(6, 'Password minimal 6 karakter')
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

// const AuthContext = createContext<any>(undefined)

// export const AuthProvider = () => {
//     return (
//         <AuthContext.Provider value={{}}>
//         </AuthContext.Provider>
//     )
// }

// export const useAuthContext = () => {
//     return useContext(AuthContext)
// }

