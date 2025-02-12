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
      const equipements = await db.equipment.findMany();
      return c.json({
        success: true,
        data: equipements,
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
