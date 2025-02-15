import { z } from "zod";

export default z.object({
  name1: z
    .string({ required_error: "Insira o nome" })
    .min(1, "O nome não pode estar vazio"),
  email: z
    .string()
    .email("Insira um email válido")
    .optional()
});