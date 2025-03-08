import { Hono } from "hono";
import argon2 from "argon2";
import { db } from "@/lib/prisma";
import { userLoginSchema, userRegisterSchema } from "@/schemas";
import { zValidator } from "@/middleware/zodValidator.middleware";
import { authMiddleware } from "@/middleware/auth_middleware";
import { env } from "@/dotenv_config";
import { setCookie } from "hono/cookie";
import { sign } from "hono/jwt";
import { describeRoute } from "hono-openapi";
import { z } from "zod";

const app = new Hono()
  .post(
    "/register",
    describeRoute({
      tags: ["Authentication"],
      description: "Register a new user",
      request: {
        body: {
          content: {
            "application/json": {
              schema: userRegisterSchema,
            },
          },
        },
      },
      responses: {
        201: {
          description: "User registered successfully",
          content: {
            "application/json": {
              schema: z.object({
                success: z.boolean(),
                user: z.object({
                  id: z.number(),
                  fullName: z.string(),
                  email: z.string(),
                  role: z.string(),
                }),
              }),
            },
          },
        },
        400: {
          description: "User already exists",
        },
        500: {
          description: "Internal server error",
        },
      },
    }),
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

      return c.json({ success: true, user: newUser }, 201);
    }
  )
  .post(
    "/login",
    describeRoute({
      tags: ["Authentication"],
      description: "Log in a user",
      request: {
        body: {
          content: {
            "application/json": {
              schema: userLoginSchema,
            },
          },
        },
      },
      responses: {
        200: {
          description: "User logged in successfully",
          content: {
            "application/json": {
              schema: z.object({
                success: z.boolean(),
                token: z.string(),
              }),
            },
          },
        },
        401: {
          description: "Invalid credentials",
        },
        404: {
          description: "User not found",
        },
        500: {
          description: "Internal server error",
        },
      },
    }),
    zValidator("json", userLoginSchema),
    async (c) => {
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
    }
  )
  .get(
    "/me",
    describeRoute({
      tags: ["Authentication"],
      description: "Get the current authenticated user's details",
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: z.object({
                success: z.boolean(),
                data: z.object({
                  id: z.number(),
                  fullName: z.string(),
                  email: z.string(),
                  role: z.string(),
                }),
              }),
            },
          },
        },
        401: {
          description: "Unauthorized access",
        },
        500: {
          description: "Internal server error",
        },
      },
    }),
    authMiddleware,
    async (c) => {
      const user = c.get("user");

      const formattedUser = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      };

      return c.json({ success: true, data: formattedUser }, 200);
    }
  );

export default app;
