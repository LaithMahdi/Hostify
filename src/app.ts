import { apiReference } from "@scalar/hono-api-reference";
import { openAPISpecs } from "hono-openapi";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { timing } from "hono/timing";
import authRoutes from "@/controller/auth/auth.controller";
import equipementRoutes from "@/controller/equipment/equipment.controller";
import guesthouseRoutes from "@/controller/guest-house/guest.house.controller";
import roomRoutes from "@/controller/room/room.controller";
import reservationRoutes from "@/controller/reservation/reservation.controller";
import clientRoutes from "@/controller/client/client.controller";
import dashRoutes from "@/controller/dashbored/dash.controller";
import { env } from "@/dotenv_config";

const app = new Hono();
app
  .basePath("/api/v1")
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
  .use("*", prettyJSON())
  .use("*", secureHeaders())
  .use("*", timing())
  .route("/auth", authRoutes)
  .route("/equipment", equipementRoutes)
  .route("/guest-house", guesthouseRoutes)
  .route("/room", roomRoutes)
  .route("/client", clientRoutes)
  .route("/reservation", reservationRoutes)
  .route("/dashbored", dashRoutes);
app.get(
  "/openapi",
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "Hostify API Documentation",
        version: "1.0.0",
        description: `
        ## About Hostify  
        Hostify is a powerful platform designed to streamline the management of guest houses in Tunisia. It provides a seamless experience for property owners, managers, and guests to handle bookings, reservations, and administrative tasks efficiently.

        ## Authentication  
        - Users must authenticate using the **/auth/login** endpoint.  
        - A **JWT token** is provided upon successful login.  
        - The token should be stored in cookies and sent with every request for authentication.  

        ## Base URL  
        All API requests should be prefixed with the base URL:  
        **\`http://localhost:3005/api/v1\`**  

        ## Key Features  
        - Secure authentication with JWT & cookies  
        - Full management of guest houses, rooms, and equipment  
        - Real-time data synchronization  
        - Robust API security with CORS & secure headers  

        **For more details, visit the API documentation below.**
        `,
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
      servers: [
        { url: "http://localhost:3005/", description: "Local Server" },
        { url: "https://api.hostify.com/", description: "Production Server" },
      ],
      security: [
        {
          bearerAuth: [],
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            description:
              "JWT Token is required for authentication. After logging in, include the token in the 'Authorization' header or in cookies.",
          },
        },
      },
    },
  })
);

app.get(
  "/api-docs",
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
function route(arg0: string, dashRoutes: any) {
  throw new Error("Function not implemented.");
}

