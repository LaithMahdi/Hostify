import { db } from "@/lib/prisma";

export async function doesGuestHouseExist(id: number): Promise<boolean> {
  const room = await db.guestHouse.findUnique({
    where: { id },
  });

  return !!room;
}
