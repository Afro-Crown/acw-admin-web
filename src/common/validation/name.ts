import { z } from "zod";

export default z
  .string({ required_error: "Insira seu nome" })
  .min(4, "Deve ter no mínimo 4 caracteres")
  .regex(/^[A-zÀ-ú-\s]+$/, "Não utilize caracteres especiais")
  .regex(/^(.*\s)+.+(\s)?$/, "Inclua também seu sobrenome")
  .transform((value) => value.replace(/\s+/g, " ").trim());
