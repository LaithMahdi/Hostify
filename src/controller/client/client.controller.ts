import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { clientSchema } from "./schema";
import { authMiddleware } from "@/middleware/auth_middleware";
import { db } from "@/lib/prisma";

const app = new Hono()
  .post(
    "/create",
    zValidator("json", clientSchema),
    authMiddleware,
    async (c) => {
      try {
        const user = c.get("user");
        const { fullName, email, phone, relation } = c.req.valid("json");

        const newClient = await db.guest.create({
          data: {
            fullName,
            email,
            phone,
            relationship: relation,
            addedById: user.id,
          },
        });
        return c.json(
          {
            success: true,
            message: "Client created successfully.",
            data: newClient,
          },
          201
        );
      } catch (error) {
        console.log("error", error);
        return c.json(
          {
            success: false,
            error: "An error occurred while creating the client.",
          },
          500
        );
      }
    }
  )
  .get("/added-by", authMiddleware, async (c) => {
    try {
      const user = c.get("user");

      const allClients = await db.guest.findMany({
        where: { addedById: user.id },
      });
      return c.json({ success: true, data: allClients });
    } catch (error) {
      console.log("error", error);
      return c.json(
        {
          success: false,
          error: "An error occurred while fetching clients.",
        },
        500
      );
    }
  });

export default app;
