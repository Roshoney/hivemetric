import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email address"),
  company: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)"),
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
