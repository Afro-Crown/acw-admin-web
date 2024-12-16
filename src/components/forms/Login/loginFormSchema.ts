import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email("Digite um E-mail válido."),
    password: z.string(),
});

export type TLoginForm = z.infer<typeof loginFormSchema>;