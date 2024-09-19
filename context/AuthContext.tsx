import { z } from "zod";

export const loginFormSchema = z.object({
    username: z.string()
        .min(3, 'Username minimal 3 karakter')
        .max(15, 'Username maksimal 16 karakter'),
    password: z.string()
        .min(6, 'Password minimal 6 karakter')
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

