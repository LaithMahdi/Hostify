import { Hono } from "hono";
import { db } from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import { equipmentSchema, patchEquipmentSchema } from "@/schemas";
import { doesEquipmentExist } from "./equipment.service";
import { authMiddleware } from "@/middleware/auth_middleware";
import { roleMiddleware } from "@/middleware/role_middleware";
import { Role } from "@prisma/client";
import { describeRoute } from "hono-openapi";
import { zodToJsonSchema } from "zod-to-json-schema";

const app = new Hono();

const createEquipmentRawSchema = zodToJsonSchema(equipmentSchema, {
  name: "CreateEquipment",
});

const CreateEquipmentJsonSchema =
  createEquipmentRawSchema.definitions?.CreateEquipment || {};

const pathEquipmentRawSchema = zodToJsonSchema(patchEquipmentSchema, {
  name: "PatchEquipment",
});
const patchEquipmentJsonSchema =
  pathEquipmentRawSchema.definitions?.PatchEquipment || {};

app.post(
  "/create",
  describeRoute({
    tags: ["Equipment"],
    summary: "Create equipment",
    description: "Create a new equipment item in the database",
    security: [{ cookieAuth: [] }],
    requestBody: {
      content: { "application/json": { schema: CreateEquipmentJsonSchema } },
    },
    responses: {
      201: { description: "Equipment created successfully" },
      500: { description: "Internal server error" },
    },
  }),
  zValidator("json", equipmentSchema),
  authMiddleware,
  roleMiddleware([Role.ADMIN, Role.OWNER]),
  async (c) => {
    try {
      const { name, icon, isActive, description } = await c.req.valid("json");

      const newEquipement = await db.equipment.create({
        data: { name, icon, isActive, description },
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
  }
);

app.get(
  "/all",
  describeRoute({
    tags: ["Equipment"],
    summary: "Get all equipment",
    description: "Get all equipment with pagination and filtering",
    security: [{ cookieAuth: [] }],
    parameters: [
      {
        name: "page",
        in: "query",
        description: "Page number",
        required: false,
        schema: { type: "integer" },
      },
      {
        name: "limit",
        in: "query",
        description: "Items per page",
        required: false,
        schema: { type: "integer" },
      },
      {
        name: "search",
        in: "query",
        description: "Search by name",
        required: false,
        schema: { type: "string" },
      },
      {
        name: "isActive",
        in: "query",
        description: "Filter by active status",
        required: false,
        schema: { type: "boolean" },
      },
    ],
    responses: {
      200: { description: "Successful response" },
      500: { description: "Internal server error" },
    },
  }),
  authMiddleware,
  async (c) => {
    try {
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 10);
      const search = c.req.query("search") || "";
      const isActives = c.req.query("isActive");

      const skip = (page - 1) * limit;

      const filters: any = {
        name: {
          contains: search,
          mode: "insensitive",
        },
      };

      if (isActives === "true") filters.isActive = true;
      else if (isActives === "false") filters.isActive = false;

      const [totalItems, equipements] = await Promise.all([
        db.equipment.count({ where: filters }),
        db.equipment.findMany({
          skip,
          take: limit,
          where: filters,
          orderBy: { id: "asc" },
        }),
      ]);

      return c.json({
        success: true,
        data: equipements,
        totalItems: totalItems,
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
  }
);

app.get(
  "/:id",
  describeRoute({
    tags: ["Equipment"],
    summary: "Get equipment by ID",
    description: "Get equipment by ID from the database",
    security: [{ cookieAuth: [] }],
    responses: {
      200: { description: "Equipment found" },
      404: { description: "Equipment not found" },
      500: { description: "Internal server error" },
    },
  }),
  authMiddleware,
  async (c) => {
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
  }
);

app.put(
  "/update/:id",
  describeRoute({
    tags: ["Equipment"],
    summary: "Update equipment by ID",
    description: "Update equipment by ID in the database",
    security: [{ cookieAuth: [] }],
    requestBody: {
      content: { "application/json": { schema: CreateEquipmentJsonSchema } },
    },
    responses: {
      200: { description: "Equipment updated successfully" },
      404: { description: "Equipment not found" },
      500: { description: "Internal server error" },
    },
  }),
  zValidator("json", equipmentSchema),
  authMiddleware,
  roleMiddleware([Role.ADMIN, Role.OWNER]),
  async (c) => {
    try {
      const id = c.req.param("id");
      const { name, icon, isActive, description } = await c.req.valid("json");

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
        data: { name, icon, isActive, description },
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
  }
);

app.delete(
  "/delete/:id",
  describeRoute({
    tags: ["Equipment"],
    summary: "Delete equipment by ID",
    description: "Delete equipment by ID from the database",
    security: [{ cookieAuth: [] }],
    responses: {
      200: { description: "Equipment deleted successfully" },
      404: { description: "Equipment not found" },
      500: { description: "Internal server error" },
    },
  }),
  authMiddleware,
  roleMiddleware([Role.ADMIN, Role.OWNER]),
  async (c) => {
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
  }
);

app.patch(
  "/patch/:id",
  describeRoute({
    tags: ["Equipment"],
    summary: "Partially update equipment by ID",
    description: "Partially update equipment by ID in the database",
    security: [{ cookieAuth: [] }],
    requestBody: {
      content: { "application/json": { schema: patchEquipmentJsonSchema } },
    },
    responses: {
      200: { description: "Equipment updated successfully" },
      404: { description: "Equipment not found" },
      500: { description: "Internal server error" },
    },
  }),
  zValidator("json", patchEquipmentSchema),
  authMiddleware,
  roleMiddleware([Role.ADMIN, Role.OWNER]),
  async (c) => {
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

    const { name, icon, isActive, description } = await c.req.valid("json");

    const updatedEquipement = await db.equipment.update({
      where: { id: Number(id) },
      data: { name, icon, isActive, description },
    });

    return c.json({
      success: true,
      message: "Équipement mis à jour avec succès",
      data: updatedEquipement,
    });
  }
);

export default app;
