import { Relationship } from "@prisma/client";
import { z } from "zod";

export const clientSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  relation: z.nativeEnum(Relationship).default(Relationship.OTHER),
});
