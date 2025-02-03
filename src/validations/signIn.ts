import { z } from "zod";

import email from "@/common/validation/email";
import password from "@/common/validation/password";

const SignInFormSchema = z.object({
  email,
  password
});

export default SignInFormSchema;
