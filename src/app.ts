import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { timing } from "hono/timing";
import authRoutes from "@/controller/auth.controller";
import equipementRoutes from "@/controller/equipment/equipment.controller";

const app = new Hono()
  .basePath("/api/v1")
  // Middlewares
  .use("*", logger())
  .use(
    "*",
    cors({
      origin: "*",
      allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: false,
      maxAge: 600,
    })
  )
  // .use(
  //   "*",
  //   csrf({
  //     origin: "*",
  //   })
  // )
  .use("*", prettyJSON())
  .use("*", secureHeaders())
  .use("*", timing())
  // Routes
  .route("/auth", authRoutes)
  .route("/equipment", equipementRoutes);

// Export the app TYPE
export type AppType = typeof app;

export default app;
