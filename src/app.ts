import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { timing } from "hono/timing";
import authRoutes from "@/controller/auth.controller";
import equipementRoutes from "@/controller/equipment/equipment.controller";
import guesthouseRoutes from "@/controller/guest-house/guest.house.controller";
import roomRoutes from "@/controller/room/room.controller";
import { apiReference } from "@scalar/hono-api-reference";
import { openAPISpecs } from "hono-openapi";

const app = new Hono();

app
  .basePath("/api/v1")
  .use(
    "*",
    cors({
      origin: "*",
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
      maxAge: 600,
    })
  )
  .use("*", prettyJSON())
  .use("*", secureHeaders())
  .use("*", timing());

app
  .route("/auth", authRoutes)
  .route("/equipment", equipementRoutes)
  .route("/guest-house", guesthouseRoutes)
  .route("/room", roomRoutes);

app.get(
  "/openapi",
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "API Documentation",
        version: "1.0.0",
        description:
          "API for managing equipment, guest houses, rooms, and more",
      },
      servers: [
        { url: "http://localhost:3005/api/v1/", description: "Local Server" },
      ],
      paths: {},
    },
  })
);

app.get(
  "/docs",
  apiReference({
    theme: "purple",
    spec: { url: "http://localhost:3005/openapi" },
  })
);

// Export the app type
export type AppType = typeof app;

export default app;
