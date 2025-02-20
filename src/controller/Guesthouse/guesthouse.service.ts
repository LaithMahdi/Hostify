import { db } from "@/lib/prisma";

export async function doesGuesthouseExist(id: number): Promise<boolean> {
  const guesthouse = await db.guesthouse.findUnique({
    where: { id },
  });

  return guesthouse !== null;
}
