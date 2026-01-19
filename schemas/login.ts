import { z } from "zod";

export const userSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type UserFormData = z.infer<typeof userSchema>;
