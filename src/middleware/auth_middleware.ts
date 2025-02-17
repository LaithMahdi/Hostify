import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { AdditionalContext, PayloadType } from "@/types";
import { db } from "@/lib/prisma";
import { env } from "@/dotenv_config";
import { getCookie } from "hono/cookie";

export const authMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    // Retrieve the token from the cookie
    const token = getCookie(c, env.AUTH_COOKIE);

    // If no token is found in the cookie, return an unauthorized error response
    if (!token) {
      return c.json(
        { error: "Unauthorized access - authentication required." },
        401
      );
    }

    try {
      // Verify the token and extract the payload
      const payload = (await verify(token, env.JWT_SECRET)) as PayloadType;

      // Look up the user in the database using the user ID from the payload
      const user = await db.user.findFirst({
        where: { id: payload.userId }, // Make sure this matches your token payload structure
      });

      // If no user is found, return an unauthorized error response
      if (!user) {
        return c.json({ error: "Unauthorized access - user not found." }, 401);
      }

      // Store the user in the context for later use in the request
      c.set("user", user);

      // Proceed to the next middleware or route handler
      await next();
    } catch (error) {
      return c.json(
        { error: "Unauthorized access - invalid or expired token." },
        401
      );
    }
  }
);
