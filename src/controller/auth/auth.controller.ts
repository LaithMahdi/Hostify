import { Hono } from "hono";
import argon2 from "argon2";
import { db } from "@/lib/prisma";
import { userLoginSchema, userRegisterSchema } from "@/schemas";
import {
  loginDocs,
  meDocs,
  registerDocs,
} from "@/controller/auth/docs/auth.docs";
import { zValidator } from "@/middleware/zodValidator.middleware";
import { authMiddleware } from "@/middleware/auth_middleware";
import { env } from "@/dotenv_config";
import { setCookie } from "hono/cookie";
import { sign } from "hono/jwt";
import { Gender, Role } from "@prisma/client";

const app = new Hono()
  // Register endpoint
  .post(
    "/register",
    registerDocs,
    zValidator("json", userRegisterSchema),
    async (c) => {
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

      if (role === Role.USER) {
        await db.guest.create({
          data: {
            id: newUser.id,
            addedById: newUser.id,
            fullName: newUser.fullName,
            email: newUser.email,
            cin: 0,
            gender: Gender.MALE,
          },
        });
      }

      return c.json({ success: true, user: newUser }, 201);
    }
  )
  // Login endpoint
  .post("/login", loginDocs, zValidator("json", userLoginSchema), async (c) => {
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

    // Generate JWT token
    const token = await sign(
      {
        id: user.id,
        name: user.fullName,
        email: user.email,
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
      },
      env.JWT_SECRET
    );

    // Set cookie with JWT token
    setCookie(c, env.AUTH_COOKIE, token, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ success: true, token }, 200);
  })
  // Me endpoint
  .get("/me", meDocs, authMiddleware, async (c) => {
    const user = c.get("user");

    const formattedUser = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    };

    return c.json({ success: true, data: formattedUser }, 200);
  });

export default app;
