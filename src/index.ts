import { serve } from "@hono/node-server";
import { env } from "../src/dotenv_config";
import { showRoutes } from "hono/dev";
import app from "@/app";
import { seedEquipments } from "./seeds/seed.equipment";

const port = Number(env.PORT) || 3001;
console.log(`Server is running on http://localhost:${port}`);

const init = async () => {
  await seedEquipments();
  console.log("✅ Seeding completed.");
};

init();

serve({
  fetch: app.fetch,
  port,
});

showRoutes(app);
