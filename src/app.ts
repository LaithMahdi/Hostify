import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { timing } from "hono/timing";
import authRoutes from "@/controller/auth_controller";

const app = new Hono()
  .basePath("/api/v1")
  // Middlewares
  .use("*", logger())
  .use("*", cors())
  .use("*", csrf())
  .use("*", prettyJSON())
  .use("*", secureHeaders())
  .use("*", timing())
  // Routes
  .route("/auth", authRoutes);

// Export the app TYPE
export type AppType = typeof app;

export default app;
