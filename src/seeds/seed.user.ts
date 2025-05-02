import { Role, Gender } from "@prisma/client";
import argon2 from "argon2";
import { db } from "@/lib/prisma";
import { env } from "@/dotenv_config";

export async function seedUsers() {
  try {
    // Check if any users exist
    const usersCount = await db.user.count();

    if (usersCount > 0) {
      console.log("⚠️ Users data already exists. Skipping insert.");
      return await db.user.findMany({
        select: { id: true, email: true },
      });
    }

    // Define user data
    const usersData = [
      {
        fullName: env.ADMIN_NAME,
        email: env.ADMIN_EMAIL,
        password: await argon2.hash(env.ADMIN_PASSWORD),
        role: Role.ADMIN,
      },
      {
        fullName: "mahdi laith",
        email: "mahdilaith380@gmail.com",
        password: await argon2.hash("123456789"),
        role: Role.GUEST,
      },
      {
        fullName: "dalel loussaief",
        email: "dalel@gmail.com",
        password: await argon2.hash("123456789"),
        role: Role.USER,
      },
    ];

    // Use transaction to ensure data consistency
    const result = await db.$transaction(async (prisma) => {
      // Create users
      await prisma.user.createMany({
        data: usersData,
      });

      console.log("✅ Users seeded successfully!");

      // Get the created users
      const createdUsers = await prisma.user.findMany({
        select: { id: true, email: true, role: true, fullName: true },
      });

      // For users with USER role, create corresponding guest records
      const userUsers = createdUsers.filter((user) => user.role === Role.USER);
      if (userUsers.length > 0) {
        await prisma.guest.createMany({
          data: userUsers.map((user) => ({
            id: user.id,
            addedById: user.id,
            fullName: user.fullName,
            email: user.email,
            cin: 0,
            gender: Gender.FEMALE,
          })),
        });
        console.log(
          `✅ ${userUsers.length} Guest records seeded successfully!`
        );
      }

      return createdUsers;
    });

    return result.map((user) => ({ id: user.id, email: user.email }));
  } catch (error) {
    console.error("❌ Error in seeding:", error);
    return [];
  }
}
