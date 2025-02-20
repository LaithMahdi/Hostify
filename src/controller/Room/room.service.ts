import { db } from "@/lib/prisma";

export async function doesRoomExist(id: number): Promise<boolean> {
  const room = await db.room.findUnique({
    where: { id },
  });

  return !!room;
}
