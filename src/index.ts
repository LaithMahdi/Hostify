import { serve } from "@hono/node-server";
import { Hono } from "hono";
import auth from "@/controller/auth_controller";
const app = new Hono().basePath("/api/v1");
import equipment from "@/controller/equiment_controller";
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/auth", auth);
app.route("/Equipment", equipment);
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
