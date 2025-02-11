import { serve } from "@hono/node-server";
import { env } from "../src/dotenv_config";
import { showRoutes } from "hono/dev";
import app from "@/app";
const port = Number(env.PORT) || 3001;

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

showRoutes(app);
