import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { AdditionalContext, PayloadType } from "@/types";
import { JWT_SECRET } from "@/dotenv_config";
import { db } from "@/lib/prisma";

// Create an authentication middleware using Hono's middleware factory
export const authMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    // Retrieve the token from the Authorization header
    const authHeader = c.req.header("Authorization");

    // If no Authorization header or token is provided, return an unauthorized error response
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return c.json(
        { error: "Unauthorized access - Bearer token is required." },
        401
      );
    }

    // Extract the token by removing the 'Bearer ' prefix
    const token = authHeader.slice(7);

    try {
      // Verify the token and extract the payload
      const payload = (await verify(token, JWT_SECRET)) as PayloadType;

      // Look up the user in the database using the user ID from the payload
      const user = await db.user.findFirst({
        where: { id: payload.userId },
      });

      // If no user is found, return an unauthorized error response
      if (!user) {
        return c.json({ error: "Unauthorized access - user not found." }, 401);
      }

      // Store the user and role in the context for later use in the request
      c.set("user", user);

      // Proceed to the next middleware or route handler
      await next();
    } catch (error) {
      // If token verification fails or an error occurs, return an unauthorized error response

      return c.json(
        { error: "Unauthorized access - invalid or expired token." },
        401
      );
    }
  }
);
