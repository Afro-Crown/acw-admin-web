import { z } from "zod";

export default z.object({
  staffs: z.array(
    z.object({
      name: z
        .string({ required_error: "Insira o nome" })
        .min(1, "O nome não pode estar vazio"),
      email: z.preprocess((val) => {
        if (typeof val === "string" && val.trim() === "") {
          return undefined;
        }
        return val;
      }, z.string().email("Insira um email válido").optional())
    })
  )
});
