import { ReservationStatus } from "@prisma/client";
import { z } from "zod";

export const reservationSchema = z.object({
  checkIn: z.string().min(1, { message: "Check-in date is required." }),
  checkOut: z.string().min(1, { message: "Check-out date is required." }),
  totalPrice: z.coerce.number().min(1, { message: "Total price is required." }),
  roomId: z.string().min(1, { message: "Room ID is required." }),
  members: z.array(z.string()),
  status: z.nativeEnum(ReservationStatus).default(ReservationStatus.PENDING),
});

export const patchReservationSchema = reservationSchema.partial();
