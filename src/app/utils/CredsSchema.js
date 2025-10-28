import * as z from "zod";

export const loginSchema = z
  .object({
    emailId: z.string().email(),
    password: z.string().min(8),
  })
  .required();

export const registerSchema = z
  .object({
    first_name: z.string().min(2,{message:"Your name must be more than 2 letters."}),
    last_name: z.string().min(2,{message:"Your name must be more than 2 letters."}),
    emailId: z.string().email(),
    password: z.string().min(8),
  })
  .required();
