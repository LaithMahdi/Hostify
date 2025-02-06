import { Hono } from "hono";
import argon2 from "argon2";
import { db } from "@/lib/prisma";
import { userLoginSchema, userRegisterSchema } from "@/schemas";
import { zValidator } from "@hono/zod-validator";
import { sign } from "hono/jwt";

const app = new Hono()
  .post("/register", zValidator("json", userRegisterSchema), async (c) => {
    const { fullName, email, password, role } = c.req.valid("json");

    // Check if user already exists
    const user = await db.user.findUnique({ where: { email } });

    if (user) {
      return c.json({ error: "User already exists" }, 400);
    }

    const hashedPassword = await argon2.hash(password);

    // Create user in database with hashed password
    const newUser = await db.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role,
      },
    });

    return c.json({ success: true, user: newUser }, 201);
  })
  .post("/login", zValidator("json", userLoginSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    // Check if user exists
    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    // Verify password
    const validPassword = await argon2.verify(user.password, password);

    if (!validPassword) {
      return c.json({ error: "Invalid password" }, 401);
    }

    const token = await sign(
      {
        id: user.id,
        email: user.email,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 2, // 2 days
      },
      "secret"
    );

    return c.json({ success: true, token }, 200);
  })
  .post("/logout", async (c) => {});
export default app;
