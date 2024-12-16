import { z } from "zod";

export const registerPasswordStoreSchema = z.object({
    password: z
        .string()
        .nonempty("Digite uma senha.")
        .min(6, "A senha deve conter no mínimo 6 caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")  
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos um caracter minúsculo.")
        .regex(/(?=.*?[0-9])/, "É necesário pelo menos um número."),
    confirm: z.string().nonempty("Confirme a senha."),
}).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não correspondem.",
    path: ["confirm"],
});

export type TRegisterPasswordStore = z.infer<typeof registerPasswordStoreSchema>;