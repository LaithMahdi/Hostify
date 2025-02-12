import { Hono } from "hono";
import { db } from "@/lib/prisma";

const app = new Hono();


app.post("/add", async (c) => {
  try {
    const { name, icon, is_active } = await c.req.json();
    
    const newEquipement = await db.equipement.create({
      data: { name, icon, is_active },
    });

    return c.json({ message: "Équipement ajouté avec succès", data: newEquipement }, 201);
  } catch (error) {
    return c.json({ error: "Erreur lors de l'ajout de l'équipement", details: error }, 500);
  }
});


app.get("/all", async (c) => {
  try {
    const equipements = await db.equipement.findMany();
    return c.json({ data: equipements });
  } catch (error) {
    return c.json({ error: "Erreur lors de la récupération des équipements", details: error }, 500);
  }
});


app.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const equipement = await db.equipement.findUnique({ where: { id } });

    if (!equipement) {
      return c.json({ error: "Équipement non trouvé" }, 404);
    }

    return c.json({ data: equipement });
  } catch (error) {
    return c.json({ error: "Erreur lors de la récupération de l'équipement", details: error }, 500);
  }
});


app.put("/update/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { name, icon, is_active } = await c.req.json();

    const updatedEquipement = await db.equipement.update({
      where: { id },
      data: { name, icon, is_active },
    });

    return c.json({ message: "Équipement mis à jour avec succès", data: updatedEquipement });
  } catch (error) {
    return c.json({ error: "Erreur lors de la mise à jour de l'équipement", details: error }, 500);
  }
});


app.delete("/delete/:id", async (c) => {
  try {
    const id = c.req.param("id");

    await db.equipement.delete({ where: { id } });

    return c.json({ message: "Équipement supprimé avec succès" });
  } catch (error) {
    return c.json({ error: "Erreur lors de la suppression de l'équipement", details: error }, 500);
  }
});

export default app;
