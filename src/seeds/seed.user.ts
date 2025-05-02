import { Role } from "@prisma/client";
import argon2 from "argon2";
import { db } from "@/lib/prisma";
import { env } from "@/dotenv_config";

export async function seedUsers() {
  try {
    const usersCount = await db.user.count();

    if (usersCount > 0) {
      console.log("⚠️ Users data already exists. Skipping insert.");
    } else {
      // const users = await Promise.all(
      // Array.from({ length: 50 }, async (_, i) => {
      //   const id = faker.string.uuid();
      //   const fullName = faker.person.fullName();
      //   const email = faker.internet.email({
      //     firstName: fullName.split(" ")[0],
      //   });

      //   return {
      //     id,
      //     fullName,
      //     email,
      //     password: await argon2.hash("123456789"),
      //     role: i % 2 === 0 ? Role.USER : Role.OWNER,
      //   };
      // })
      // );

      // await db.user.createMany({
      //   data: users,
      // });

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

      await db.user.createMany({
        data: usersData,
      });

      console.log("✅ 50 Users seeded successfully!");
    }

    const usersWithIds = await db.user.findMany({
      select: { id: true, email: true },
    });

    return usersWithIds;
  } catch (error) {
    console.error("❌ Error in seeding:", error);
    return [];
  }
}
