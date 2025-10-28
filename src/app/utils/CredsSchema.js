import * as z from "zod";

export const loginSchema = z
  .object({
    emailId: z.string().email(),
    password: z.string().min(8),
  })
  .required();

export const registerSchema = z
  .object({
    first_name: z.string({ message: "Enter your first name." }),
    last_name: z.string({ message: "Enter your last name." }),
    emailId: z.string().email(),
    password: z.string().min(8),
  })
  .required();
