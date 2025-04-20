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
        const {
          fullName,
          email,
          phone,
          age,
          cin,
          gender,
          members,
          relationship,
          numPassport,
        } = c.req.valid("json");

        const newClient = await db.guest.create({
          data: {
            fullName,
            email,
            phone,
            age,
            cin,
            numPassport,
            gender,
            relationship,
            membre: {
              create: members.map((member) => ({
                fullName: member.fullName,
                gender: member.gender,
                relationship: member.relationship,
                isManier: member.isManier,
              })),
            },
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
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 10);

      const search = c.req.query("search") || "";
      const cinQuery = c.req.query("cin") || "";
      const skip = (page - 1) * limit;

      // Parse CIN as number if it exists
      const cin = cinQuery ? Number(cinQuery) : undefined;

      const filters: any = {
        fullName: {
          contains: search,
          mode: "insensitive",
        },
        ...(cin &&
          !isNaN(cin) && {
            cin: cin,
          }),
      };

      const [totalItems, clients] = await Promise.all([
        db.guest.count({
          where: {
            addedById: user.id,
            ...filters,
          },
        }),
        db.guest.findMany({
          where: {
            addedById: user.id,
            ...filters,
          },
          skip,
          take: limit,
          orderBy: { createdAt: "desc" },
          include: {
            membre: true,
            reservations: true,
          },
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
        const cin = c.req.query("cin") || "";
        const skip = (page - 1) * limit;

        const filters: any = {
          fullName: {
            contains: search,
            mode: "insensitive",
          },
          phone: {
            contains: cin,
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
            include: {
              membre: true,
              reservations: true,
            },
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
        const {
          fullName,
          email,
          phone,
          age,
          cin,
          gender,
          members,
          relationship,
          numPassport,
        } = c.req.valid("json");

        await db.membre.deleteMany({
          where: { guestId: id },
        });

        const updatedClient = await db.guest.update({
          where: { id },
          data: {
            fullName,
            email,
            phone,
            age,
            cin,
            numPassport,
            gender,
            relationship,
            membre: {
              create: members.map((member) => ({
                fullName: member.fullName,
                gender: member.gender,
                relationship: member.relationship,
                isManier: member.isManier,
              })),
            },
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
        const {
          fullName,
          email,
          phone,
          age,
          cin,
          gender,
          members,
          relationship,
          numPassport,
        } = c.req.valid("json");

        await db.membre.deleteMany({
          where: { guestId: id },
        });

        const updatedClient = await db.guest.update({
          where: { id },
          data: {
            fullName,
            email,
            phone,
            age,
            cin,
            numPassport,
            gender,
            relationship,
            membre: {
              create: members?.map((member) => ({
                fullName: member.fullName,
                gender: member.gender,
                relationship: member.relationship,
                isManier: member.isManier,
              })),
            },
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
      await db.membre.deleteMany({
        where: { guestId: id },
      });
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
