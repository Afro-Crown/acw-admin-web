import { z } from "zod";

export default z.string().regex(/^[0-9]+$/, {
  message: "Insira um número válido"
});
