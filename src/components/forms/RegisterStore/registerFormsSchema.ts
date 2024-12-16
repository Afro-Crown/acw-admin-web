import { z } from "zod";

export const registerFormSchema = z.object({
  salon_name: z
    .string()
    .min(3, "O nome deve conter no mínimo 3 caracteres.")
    .nonempty("O nome do salão é obrigatório."),
  cnpj: z.string().min(14, "Digite um CNPJ válido."),
  owner_name: z
    .string()
    .min(3, "O nome do proprietário deve conter no mínimo 3 caracteres."),
  zip_code: z.string().min(8, "Digite um CEP válido."),
  city: z.string().min(3, "Digite uma cidade válida."),
  address: z.string().min(3, "Digite uma Rua válida."),
  neighborhood: z.string().min(3, "Digite um Bairro válido."),
  address_number: z.string().min(1, "Digite um Número válido."),
  complement: z.string(),
  email: z
    .string()
    .email("Digite um E-mail válido."),
  phone: z.string().min(11, "Digite um Telefone válido."),
  
});

export type TRegisterFormStore = z.infer<typeof registerFormSchema>;