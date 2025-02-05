import { z } from "zod";

import email from "@/common/validation/email";
import password from "@/common/validation/password";

const SignInFormSchema = z.object({
  email: z.string({ required_error: "Insira o email" }),
  password: z.string({ required_error: "Insira a senha" })
});

export default SignInFormSchema;
