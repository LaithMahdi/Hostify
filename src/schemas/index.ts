import { ContactType, Role, RoomStatus, RoomType } from "@prisma/client";
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
    .default(Role.USER)
    .optional()
    .describe("User role, defaults to USER if not provided."),
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

export const guestHouseSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters long." }),
  region: z
    .string()
    .min(3, { message: "Region must be at least 3 characters long." }),
  description: z.string().optional(),
  hasParking: z.boolean().default(false),
  isPetFriendly: z.boolean().default(false),
  contacts: z.array(
    z.object({
      type: z.nativeEnum(ContactType).default(ContactType.PHONE),
      value: z.string().min(3, {
        message: "Contact value must be at least 3 characters long.",
      }),
    })
  ),
  rooms: z.array(z.number()).optional(),
  images: z.array(z.string()).optional(),
});

export const patchGuestHouseSchema = guestHouseSchema.partial();

export const roomSchema = z.object({
  roomNumber: z.number().min(1, { message: "Room number is required." }),
  type: z.nativeEnum(RoomType).default(RoomType.SINGLE),
  pricePerNight: z
    .number()
    .positive()
    .min(1, { message: "Price per night is required." }),
  status: z.nativeEnum(RoomStatus).default(RoomStatus.AVAILABLE),
  capacity: z.number().positive().min(1, { message: "Capacity is required." }),
  hasBalcony: z.boolean().default(false),
  description: z.string().optional(),
  guestHouseId: z.number().optional(),
  isActive: z.boolean().default(true),
  images: z.array(z.string()).optional(),
});

export const patchRoomSchema = z.object({
  roomNumber: z.number().optional(),
  type: z.nativeEnum(RoomType).optional(),
  pricePerNight: z.number().optional(),
  status: z.nativeEnum(RoomStatus).optional(),
  capacity: z.number().optional(),
  hasBalcony: z.boolean().optional(),
  description: z.string().optional(),
  guestHouseId: z.number().optional(),
  isActive: z.boolean().optional(),
  images: z.array(z.string()).optional(),
});
