import { z } from "zod";

/* import email from "@/common/validation/email"; */
/* import name from "@/common/validation/name"; */
/* import password from "@/common/validation/password"; */

export default z.object({
  salonName: z
    .string({ required_error: "Insira o nome do salão" })
    .min(1, "O nome do salão não pode estar vazio"),
  cnpj: z.string({ required_error: "Insira o CNPJ" }),
  name: z
    .string({ required_error: "Insira o nome do(a) proprietário(a)" })
    .min(1, "O nome do(a) proprietário(a) não pode estar vazio"),
  cep: z.string({ required_error: "Insira o CEP" }),
  cidade: z
    .string({ required_error: "Insira a cidade" })
    .min(1, "A cidade não pode estar vazia"),
  rua: z
    .string({ required_error: "Insira a rua" })
    .min(1, "A rua não pode estar vazia"),
  bairro: z
    .string({ required_error: "Insira o bairro" })
    .min(1, "O bairro não pode estar vazio"),
  numero: z
    .string({ required_error: "Insira o número" })
    .min(1, "O número não pode estar vazio"),
  complemento: z.string({ required_error: "Insira o complemento" }).optional(),
  email: z
    .string({ required_error: "Insira o email" })
    .email("Insira um email válido"),
  phone: z
    .string({ required_error: "Insira o telefone" })
    .min(10, "O telefone deve ter no mínimo 10 caracteres")
});
/* dob: z.string({ required_error: "Insira uma data de nascimento" }),
    password,
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"]
  });
 */
