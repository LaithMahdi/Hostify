import { serve } from "@hono/node-server";
import app from "@/app";
import { env } from "@/dotenv_config";
import { showRoutes } from "hono/dev";
import { seedEquipments } from "@/seeds/seed.equipment";
import { seedData } from "@/seeds/seed.data";

const port = Number(env.PORT) || 3001;
console.log(`Server is running on http://localhost:${port}`);

const init = async () => {
  await seedEquipments();
  await seedData();
  console.log("✅ Seeding completed.");
};

init();

serve({
  fetch: app.fetch,
  port,
});

showRoutes(app);
