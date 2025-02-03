import { z } from "zod";

export default z.string().refine(
  (value) => {
    const regex = /^[0-9./-]+$/;
    return regex.test(value);
  },
  {
    message: "Insira um número válido"
  }
);
