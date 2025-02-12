import { Role } from "@prisma/client";
import z from "zod";

export const userRegisterSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters long." })
    .max(45, { message: "Full name cannot exceed 45 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .min(1, { message: "Email is required." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
  role: z
    .nativeEnum(Role)
    .default(Role.GUEST)
    .optional()
    .describe("User role, defaults to GUEST if not provided."),
});

export const userLoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .min(1, { message: "Email is required." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

export const equipmentSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  icon: z.string().url().min(1, { message: "icon is required" }),
  isActive: z
    .boolean()
    .default(true)
    .describe("Equipment status, defaults to true if not provided."),
});
