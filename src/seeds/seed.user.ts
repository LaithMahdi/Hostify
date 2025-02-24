import { Role } from "@prisma/client";
import argon2 from "argon2";
import { faker } from "@faker-js/faker";
import { db } from "@/lib/prisma";

export async function seedUsers() {
  try {
    const usersCount = await db.user.count();

    if (usersCount > 0) {
      console.log("⚠️ Users data already exists. Skipping insert.");
    } else {
      const users = await Promise.all(
        Array.from({ length: 50 }, async (_, i) => {
          const fullName = faker.person.fullName();
          const email = faker.internet.email({
            firstName: fullName.split(" ")[0],
          });

          // Generate a random password using faker
          const password = faker.internet.password();

          return {
            fullName,
            email,
            password: await argon2.hash("123456789"), // Hash the password
            role: i % 2 === 0 ? Role.USER : Role.OWNER,
          };
        })
      );

      // Insert the users into the database
      await db.user.createMany({
        data: users,
      });

      console.log("✅ 50 Users seeded successfully!");
    }
  } catch (error) {
    console.error("❌ Error in seeding:", error);
  }
}
