import { db } from "@/lib/prisma";

export async function doesEquipmentExist(id: number): Promise<boolean> {
  const equipment = await db.equipment.findUnique({
    where: { id },
  });

  return !!equipment;
}
