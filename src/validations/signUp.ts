import { z } from "zod";

/* import email from "@/common/validation/email"; */
/* import name from "@/common/validation/name"; */
/* import password from "@/common/validation/password"; */

export default z
  .object({
    salonName: z.string({ required_error: "Insira o nome do salão" }),
    cnpj: z.string({ required_error: "Insira o CNPJ" }),
    name: z.string({ required_error: "Insira o nome do(a) proprietário(a)" }),
    cep: z.string({ required_error: "Insira o CEP" }),
    cidade: z.string({ required_error: "Insira a cidade" }),
    rua: z.string({ required_error: "Insira a rua" }),
    bairro: z.string({ required_error: "Insira o bairro" }),
    numero: z.string({ required_error: "Insira o número" }),
    complemento: z.string({ required_error: "Insira o complemento" }),
    email: z.string({ required_error: "Insira o email" }),
    phone: z.string({ required_error: "Insira o telefone" }),
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