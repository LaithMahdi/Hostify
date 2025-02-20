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
  description: z.string().optional(),
});

export const patchEquipmentSchema = z.object({
  name: z.string().optional(),
  icon: z.string().url().optional(),
  isActive: z.boolean().optional(),
  description: z.string().optional(),
});
export const guesthouseSchema = z.object({
  name: z.string().min(3, { message: "Le nom doit contenir au moins 3 caractères." }),
  address: z.string().min(1, { message: "L'adresse est requise." }),
  region: z.string().min(1, { message: "La région est requise." }),
  numberOfRooms: z.number().int().positive({ message: "Le nombre de chambres doit être un entier positif." }),
  description: z.string().optional(),
  rating: z.number().optional(),
});
export const patchGuesthouseSchema = guesthouseSchema.partial();



export const roomSchema = z.object({
  nbRooms: z
    .number()
    .int()
    .positive({ message: "Number of rooms must be a positive integer." }),
  type: z.enum(["SINGLE", "DOUBLE", "SUITE", "FAMILY"]),
  pricePerNight: z
    .number()
    .positive({ message: "Price per night must be a positive number." }),
  status: z.enum(["AVAILABLE", "BOOKED", "MAINTENANCE"]),
  description: z.string().optional(),
});

export const patchRoomSchema = z.object({
  nbRooms: z.number().int().positive().optional(),
  type: z.enum(["SINGLE", "DOUBLE", "SUITE", "FAMILY"]).optional(),
  pricePerNight: z.number().positive().optional(),
  status: z.enum(["AVAILABLE", "BOOKED", "MAINTENANCE"]).optional(),
  description: z.string().optional(),
});
