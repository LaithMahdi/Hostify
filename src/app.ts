import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { timing } from "hono/timing";
import { env } from "@/dotenv_config";
import authRoutes from "@/controller/auth.controller";
import equipementRoutes from "@/controller/equipment/equipment.controller";
import guesthouseRoutes from "@/controller/guest-house/guest.house.controller";
import roomRoutes from "@/controller/room/room.controller";
const app = new Hono()
  .basePath("/api/v1")
  // Middlewares
  .use(
    "*",
    cors({
      origin: env.NEXT_FRONT_URL,
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
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
  .route("/equipment", equipementRoutes)
  .route("/guest-house", guesthouseRoutes)
  .route("/room", roomRoutes);

// Export the app TYPE
export type AppType = typeof app;

export default app;
