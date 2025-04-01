import { z } from "zod";

export default z.object({
  name: z
    .string({ required_error: "Insira o nome do(a) proprietário(a)" })
    .min(1, "O nome do(a) proprietário(a) não pode estar vazio"),
  preco: z.string({ required_error: "Insira o preço" }),
  duracaoHoras: z.string({ required_error: "Insira a duração" }),
  duracaoMinutos: z.string({ required_error: "Insira a duração" }),
  descricao: z.string({ required_error: "Insira a descrição" })
});
