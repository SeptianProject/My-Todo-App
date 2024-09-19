import { FormState, SignUpFormSchema } from "@/lib/Definition";

export async function signup(state: FormState, formData: FormData) {
    const validatedFields = SignUpFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    return {
        data: {
            username: formData.get('username'),
            password: formData.get('password')
        }
    }
}