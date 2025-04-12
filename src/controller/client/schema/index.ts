import { Gender, Relationship } from "@prisma/client";
import { z } from "zod";

export const clientSchema = z.object({
  cin: z.coerce
    .number()
    .min(1, { message: "CIN is required." })
    .max(8, { message: "CIN must be 8 digits." }),
  numPassport: z.coerce
    .number()
    .min(1, {
      message: "Passport number is required.",
    })
    .max(18, {
      message: "Passport number must be 18 digits.",
    }),
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  gender: z.nativeEnum(Gender).default(Gender.MALE),
  age: z.coerce.number().min(1, { message: "Age is required." }),
  relationship: z.nativeEnum(Relationship).default(Relationship.OTHER),
  members: z.array(
    z.object({
      fullName: z.string().min(1, { message: "Full name is required." }),
      gender: z.nativeEnum(Gender).default(Gender.MALE),
      relationship: z.nativeEnum(Relationship).default(Relationship.OTHER),
      isManier: z.boolean().default(false),
    })
  ),
});

export const patchClientSchema = clientSchema.partial();
