import { apiReference } from "@scalar/hono-api-reference";
import { openAPISpecs } from "hono-openapi";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { timing } from "hono/timing";
import authRoutes from "@/controller/auth.controller";
import equipementRoutes from "@/controller/equipment/equipment.controller";
import guesthouseRoutes from "@/controller/guest-house/guest.house.controller";
import roomRoutes from "@/controller/room/room.controller";

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
  .use("*", timing())
  .route("/auth", authRoutes)
  .route("/equipment", equipementRoutes)
  .route("/guest-house", guesthouseRoutes)
  .route("/room", roomRoutes);

app.get(
  "/openapi",
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "Hostify API Documentation",
        version: "1.0.0",
        description:
          "Hositify is a comprehensive web application designed to streamline the management of maison d'hôte (guest houses) in Tunisia. This platform offers an all-in-one solution for property owners, managers, and guests to manage bookings, reservations, and other property-related tasks.",
        contact: {
          name: "Hostify Team",
          email: "Mahdilaith380@gmail.com",
          url: "https://hostify.com",
        },
        licence: {
          name: "MIT",
          url: "https://opensource.org/licenses/MIT",
        },
      },
      servers: [{ url: "http://localhost:3005/", description: "Local Server" }],
    },
  })
);

app.get(
  "/docs",
  apiReference({
    theme: "bluePlanet",
    withDefaultFonts: true,
    spec: { url: "http://localhost:3005/openapi" },
    baseServerURL: "http://localhost:3005/api/v1",
    darkMode: true,
  })
);

export type AppType = typeof app;

export default app;
