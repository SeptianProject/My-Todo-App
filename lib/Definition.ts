import { z } from "zod";

export const SignUpFormSchema = z.object({
    username: z
        .string()
        .min(5, { message: "Username must be at least 5 characters long" })
        .trim(),
    password: z
        .string()
        .min(6, {
            message: "Password must be at least 6 characters long",
        })
        .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
        .regex(/[0-9]/, { message: "Contain at least one number." })
        .trim(),
});

export type FormState =
    | {
        errors?: {
            username?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined 
