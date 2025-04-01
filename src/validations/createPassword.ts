import { z } from "zod";

export const CreatePasswordSchema = z
  .object({
    password: z
      .string({ required_error: "Insira a senha" })
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
      .regex(/[a-z]/, {
        message: "A senha deve conter pelo menos uma letra minúscula"
      })
      .regex(/[A-Z]/, {
        message: "A senha deve conter pelo menos uma letra maiúscula"
      })
      .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "A senha deve conter pelo menos um caractere especial"
      }),
    confirmPassword: z.string({ required_error: "Confirme a senha" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"]
  });
