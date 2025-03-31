import { z } from "zod";

export const CreateServiceSchema = z.object({
  name: z.string().min(1, "Insira o nome do serviço"),
  preco: z.string().min(1, "Insira o preço do serviço"),
  horas: z.string().min(1, "Insira a duração (horas) do serviço"),
  minutos: z.string().min(1, "Insira a duração (minutos) do serviço"),
  descricao: z.string().optional(),
  services: z.string().optional(),
  staffs: z.array(
    z.object({
      name: z.string({ required_error: "Insira o nome do funcionário" })
    })
  )
});
