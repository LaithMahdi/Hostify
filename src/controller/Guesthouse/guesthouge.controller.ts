import { Hono } from "hono";
import { db } from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import { guesthouseSchema, patchGuesthouseSchema } from "@/schemas";
import { doesGuesthouseExist } from "./guesthouse.service";
import { authMiddleware } from "@/middleware/auth_middleware";
import { Role } from "@prisma/client";

const app = new Hono()
  // Création d'une guesthouse
  .post("/create", zValidator("json", guesthouseSchema),
  authMiddleware,
  // roleMiddleware([Role.ADMIN,Role.OWNER]),
  
  
  async (c) => {
    try {
      const { name, address, region, numberOfRooms, description, rating } = await c.req.valid("json");

      const newGuesthouse = await db.guesthouse.create({
        data: { name, address, region, numberOfRooms, description, rating },
      });

      return c.json(
        {
          success: true,
          message: "Guesthouse ajoutée avec succès",
          data: newGuesthouse,
        },
        201
      );
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de l'ajout de la guesthouse",
        },
        500
      );
    }
  })

  // Récupération de toutes les guesthouses avec pagination et recherche
  .get("/all", async (c) => {
    try {
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 10);
      const search = c.req.query("search") || "";
      const skip = (page - 1) * limit;

      const filters: any = {
        name: {
          contains: search,
          mode: "insensitive",
        },
      };

      const [totalItems, guesthouses] = await Promise.all([
        db.guesthouse.count({ where: filters }),
        db.guesthouse.findMany({
          skip,
          take: limit,
          where: filters,
          orderBy: { id: "asc" },
        }),
      ]);

      return c.json({
        success: true,
        data: guesthouses,
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
          error: "Erreur lors de la récupération des guesthouses",
        },
        500
      );
    }
  })

  // Récupération d'une guesthouse par son id
  .get("/:id", async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesGuesthouseExist(Number(id)))) {
        return c.json(
          {
            success: false,
            error: "Guesthouse non trouvée",
          },
          404
        );
      }

      const guesthouse = await db.guesthouse.findUnique({
        where: { id: Number(id) },
      });

      return c.json({
        success: true,
        data: guesthouse,
      });
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de la récupération de la guesthouse",
        },
        500
      );
    }
  })

  // Mise à jour complète d'une guesthouse
  .put("/update/:id", zValidator("json", guesthouseSchema), async (c) => {
    try {
      const id = c.req.param("id");
      const { name, address, region, numberOfRooms, description, rating } = await c.req.valid("json");

      if (!(await doesGuesthouseExist(Number(id)))) {
        return c.json(
          {
            success: false,
            error: "Guesthouse non trouvée",
          },
          404
        );
      }

      const updatedGuesthouse = await db.guesthouse.update({
        where: { id: Number(id) },
        data: { name, address, region, numberOfRooms, description, rating },
      });

      return c.json({
        success: true,
        message: "Guesthouse mise à jour avec succès",
        data: updatedGuesthouse,
      });
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de la mise à jour de la guesthouse",
        },
        500
      );
    }
  })

  // Suppression d'une guesthouse
  .delete("/delete/:id", async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesGuesthouseExist(Number(id)))) {
        return c.json(
          {
            success: false,
            error: "Guesthouse non trouvée",
          },
          404
        );
      }

      await db.guesthouse.delete({ where: { id: Number(id) } });

      return c.json({
        success: true,
        message: "Guesthouse supprimée avec succès",
      });
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de la suppression de la guesthouse",
        },
        500
      );
    }
  })

  // Mise à jour partielle d'une guesthouse
  .patch("/patch/:id", zValidator("json", patchGuesthouseSchema), async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesGuesthouseExist(Number(id)))) {
        return c.json(
          {
            success: false,
            error: "Guesthouse non trouvée",
          },
          404
        );
      }

      const { name, address, region, numberOfRooms, description, rating } = await c.req.valid("json");

      const updatedGuesthouse = await db.guesthouse.update({
        where: { id: Number(id) },
        data: { name, address, region, numberOfRooms, description, rating },
      });

      return c.json({
        success: true,
        message: "Guesthouse mise à jour avec succès",
        data: updatedGuesthouse,
      });
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de la mise à jour partielle de la guesthouse",
        },
        500
      );
    }
  });

export default app;


