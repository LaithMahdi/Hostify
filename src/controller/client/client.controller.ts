import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { clientSchema, patchClientSchema } from "./schema";
import { authMiddleware } from "@/middleware/auth_middleware";
import { db } from "@/lib/prisma";
import { roleMiddleware } from "@/middleware/role_middleware";
import { Role } from "@prisma/client";
import {
  createClientDocs,
  deleteClientDocs,
  getAllClientsDocs,
  getUserClientsDocs,
  patchClientDocs,
  updateClientDocs,
} from "./docs";

const app = new Hono()
  .post(
    "/create",
    createClientDocs,
    zValidator("json", clientSchema),
    authMiddleware,
    async (c) => {
      try {
        const user = c.get("user");
        const { fullName, email, phone, age, relation } = c.req.valid("json");

        const newClient = await db.guest.create({
          data: {
            fullName,
            email,
            phone,
            age,
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
  .get("/added-by", getUserClientsDocs, authMiddleware, async (c) => {
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
  })
  .get(
    "/all",
    getAllClientsDocs,
    authMiddleware,
    roleMiddleware([Role.ADMIN]),
    async (c) => {
      try {
        const page = Number(c.req.query("page") || 1);
        const limit = Number(c.req.query("limit") || 10);
        const search = c.req.query("search") || "";
        const phone = c.req.query("phone") || "";
        const skip = (page - 1) * limit;

        const filters: any = {
          fullName: {
            contains: search,
            mode: "insensitive",
          },
          phone: {
            contains: phone,
            mode: "insensitive",
          },
        };

        const [totalItems, clients] = await Promise.all([
          db.guest.count({ where: filters }),
          db.guest.findMany({
            skip,
            take: limit,
            where: filters,
            orderBy: { createdAt: "desc" },
          }),
        ]);
        return c.json({
          success: true,
          data: clients,
          totalItems,
          pageInfo: {
            hasPreviousPage: page > 1,
            hasNextPage: page * limit < totalItems,
          },
        });
      } catch (error) {
        return c.json(
          {
            success: false,
            error: "An error occurred while fetching clients.",
          },
          500
        );
      }
    }
  )
  .put(
    "update/:id",
    updateClientDocs,
    zValidator("json", clientSchema),
    authMiddleware,
    async (c) => {
      try {
        const id = c.req.param("id");

        const user = c.get("user");
        const { fullName, email, phone, age, relation } = c.req.valid("json");

        const updatedClient = await db.guest.update({
          where: { id },
          data: {
            fullName,
            email,
            phone,
            age,
            relationship: relation,
            addedById: user.id,
          },
        });
        return c.json({
          success: true,
          message: "Client updated successfully.",
          data: updatedClient,
        });
      } catch (error) {
        console.log("error", error);
        return c.json(
          {
            success: false,
            error: "An error occurred while updating the client.",
          },
          500
        );
      }
    }
  )
  .patch(
    "/patch/:id",
    patchClientDocs,
    zValidator("json", patchClientSchema),
    authMiddleware,
    async (c) => {
      try {
        const id = c.req.param("id");

        const user = c.get("user");
        const { fullName, email, phone, age, relation } = c.req.valid("json");

        const updatedClient = await db.guest.update({
          where: { id },
          data: {
            fullName,
            email,
            phone,
            age,
            relationship: relation,
            addedById: user.id,
          },
        });
        return c.json({
          success: true,
          message: "Client updated successfully.",
          data: updatedClient,
        });
      } catch (error) {
        console.log("error", error);
        return c.json(
          {
            success: false,
            error: "An error occurred while updating the client.",
          },
          500
        );
      }
    }
  )
  .delete("/delete/:id", deleteClientDocs, authMiddleware, async (c) => {
    try {
      const id = c.req.param("id");

      await db.guest.delete({
        where: { id },
      });
      return c.json({
        success: true,
        message: "Client deleted successfully.",
      });
    } catch (error) {
      console.log("error", error);
      return c.json(
        {
          success: false,
          error: "An error occurred while deleting the client.",
        },
        500
      );
    }
  });

export default app;
