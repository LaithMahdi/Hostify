import { Hono } from "hono";
import { db } from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import { equipmentSchema } from "@/schemas";
import { doesEquipmentExist } from "./equipment.service";

const app = new Hono()
  .post("/create", zValidator("json", equipmentSchema), async (c) => {
    try {
      const { name, icon, isActive } = await c.req.valid("json");

      const newEquipement = await db.equipment.create({
        data: { name, icon, isActive },
      });

      return c.json(
        {
          success: true,
          message: "Équipement ajouté avec succès",
          data: newEquipement,
        },
        201
      );
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de l'ajout de l'équipement",
        },
        500
      );
    }
  })
  .get("/all", async (c) => {
    try {
      // Get query params for pagination
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 10);
      const skip = (page - 1) * limit;

      // Get total count of items
      const totalItems = await db.equipment.count();

      // Fetch paginated items
      const equipements = await db.equipment.findMany({
        skip,
        take: limit,
      });

      return c.json({
        success: true,
        data: equipements,
        totalPages: Math.ceil(totalItems / limit),
        pageInfo: {
          hasPreviousPage: page > 1,
          hasNextPage: page * limit < totalItems,
        },
      });
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de la récupération des équipements",
        },
        500
      );
    }
  })

  .get("/:id", async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesEquipmentExist(Number(id)))) {
        return c.json(
          {
            success: false,
            error: "Équipement non trouvé",
          },
          404
        );
      }

      const equipement = await db.equipment.findUnique({
        where: { id: Number(id) },
      });
      return c.json({
        success: true,
        data: equipement,
      });
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de la récupération de l'équipement",
        },
        500
      );
    }
  })
  .put("/update/:id", zValidator("json", equipmentSchema), async (c) => {
    try {
      const id = c.req.param("id");
      const { name, icon, isActive } = await c.req.valid("json");

      // find the equipement by id
      if (!(await doesEquipmentExist(Number(id)))) {
        return c.json(
          {
            success: false,
            error: "Équipement non trouvé",
          },
          404
        );
      }

      const updatedEquipement = await db.equipment.update({
        where: { id: Number(id) },
        data: { name, icon, isActive },
      });

      return c.json({
        success: true,
        message: "Équipement mis à jour avec succès",
        data: updatedEquipement,
      });
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de la mise à jour de l'équipement",
        },
        500
      );
    }
  })
  .delete("/delete/:id", async (c) => {
    try {
      const { id } = c.req.param();
      console.log(id);
      // find the equipement by id
      if (!(await doesEquipmentExist(Number(id)))) {
        return c.json(
          {
            success: false,
            error: "Équipement non trouvé",
          },
          404
        );
      }
      await db.equipment.delete({ where: { id: Number(id) } });
      return c.json({
        success: true,
        message: "Équipement supprimé avec succès",
      });
    } catch (error) {
      return c.json(
        {
          success: false,
          error: "Erreur lors de la suppression de l'équipement",
        },
        500
      );
    }
  });

export default app;
