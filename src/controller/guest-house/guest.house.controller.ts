import { Hono } from "hono";
import { db } from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import { guestHouseSchema, patchGuestHouseSchema } from "@/schemas";
import { authMiddleware } from "@/middleware/auth_middleware";
import { doesGuestHouseExist } from "./guest.house.service";
import { roleMiddleware } from "@/middleware/role_middleware";
import { Role } from "@prisma/client";

const app = new Hono()
  // Création d'une guesthouse
  .post(
    "/create",
    zValidator("json", guestHouseSchema),
    authMiddleware,
    roleMiddleware([Role.ADMIN, Role.OWNER]),

    async (c) => {
      const user = c.get("user");
      try {
        const {
          name,
          description,
          address,
          contacts,
          hasParking,
          isPetFriendly,
          region,
          rooms,
          images,
        } = await c.req.valid("json");

        const roomIds = await db.room.findMany({
          where: { id: { in: rooms } },
        });

        const newGuesthouse = await db.guestHouse.create({
          data: {
            name,
            description,
            address,
            contacts: {
              createMany: { data: contacts },
            },
            hasParking,
            isPetFriendly,
            region,

            rooms: {
              connect: roomIds.map((room) => ({ id: room.id })),
            },
            images: {
              createMany: { data: images?.map((url) => ({ url })) || [] },
            },
            ownerId: user.id,
          },
        });

        return c.json(
          {
            success: true,
            message: "Guest house created successfully",
            data: newGuesthouse,
          },
          201
        );
      } catch (error) {
        return c.json(
          { success: false, error: "Error adding the guest house" },
          500
        );
      }
    }
  )

  // Récupération de toutes les guesthouses avec pagination et recherche
  .get("/all", async (c) => {
    try {
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 10);
      const search = c.req.query("search") || "";
      const country = c.req.query("country") || "";
      const hasParking = c.req.query("hasParking");
      const isPetFriendly = c.req.query("isPetFriendly");
      const skip = (page - 1) * limit;

      const filters: any = {
        name: {
          contains: search,
          mode: "insensitive",
        },
        region: {
          contains: country,
          mode: "insensitive",
        },
      };

      if (hasParking === "true") filters.hasParking = true;
      else if (hasParking === "false") filters.hasParking = false;

      if (isPetFriendly === "true") filters.isPetFriendly = true;
      else if (isPetFriendly === "false") filters.isPetFriendly = false;

      const [totalItems, guesthouses] = await Promise.all([
        db.guestHouse.count({ where: filters }),
        db.guestHouse.findMany({
          skip,
          take: limit,
          where: filters,
          orderBy: { id: "desc" },
          include: { rooms: true, images: true },
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
        { success: false, error: "Error retrieving guest houses" },
        500
      );
    }
  })

  // Récupération d'une guesthouse par son id
  .get("/:id", async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesGuestHouseExist(Number(id)))) {
        return c.json({ success: false, error: "Guest house not found" }, 404);
      }

      const guesthouse = await db.guestHouse.findUnique({
        where: { id: Number(id) },
        include: {
          rooms: true,
          images: true,
          contacts: true,
        },
      });

      const formattedGuestHouse = {
        id: guesthouse?.id,
        name: guesthouse?.name,
        address: guesthouse?.address,
        region: guesthouse?.region,
        description: guesthouse?.description,
        hasParking: guesthouse?.hasParking,
        isPetFriendly: guesthouse?.isPetFriendly,
        rooms: guesthouse?.rooms.map((room) => ({
          id: room.id,
          roomNumber: room.roomNumber,
          capacity: room.capacity,
        })),
        images: guesthouse?.images.map((image) => ({
          id: image.id,
          url: image.url,
        })),
        contacts: guesthouse?.contacts.map((contact) => ({
          id: contact.id,
          type: contact.type,
          value: contact.value,
        })),
      };

      return c.json({ success: true, data: formattedGuestHouse });
    } catch (error) {
      return c.json(
        { success: false, error: "Error retrieving guest house" },
        500
      );
    }
  })

  // Mise à jour complète d'une guesthouse
  .put("/update/:id", zValidator("json", guestHouseSchema), async (c) => {
    try {
      const id = c.req.param("id");
      const {
        name,
        description,
        address,
        contacts,
        hasParking,
        isPetFriendly,
        region,
        rooms,
        images,
      } = await c.req.valid("json");

      if (!(await doesGuestHouseExist(Number(id)))) {
        return c.json({ success: false, error: "Guest house not found" }, 404);
      }

      const roomIds = await db.room.findMany({
        where: { id: { in: rooms } },
      });

      const updatedGuesthouse = await db.guestHouse.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
          address,
          contacts: {
            createMany: { data: contacts },
          },
          hasParking,
          isPetFriendly,
          region,
          rooms: {
            connect: roomIds.map((room) => ({ id: room.id })),
          },
          images: {
            createMany: { data: images?.map((url) => ({ url })) || [] },
          },
        },
      });

      return c.json({
        success: true,
        message: "Guest house updated successfully",
        data: updatedGuesthouse,
      });
    } catch (error) {
      return c.json(
        { success: false, error: "Error updating the guest house" },
        500
      );
    }
  })

  // Suppression d'une guesthouse
  .delete("/delete/:id", async (c) => {
    try {
      const { id } = c.req.param();
      if (!(await doesGuestHouseExist(Number(id)))) {
        return c.json({ success: false, error: "Guest house not found" }, 404);
      }
      await db.image.deleteMany({ where: { guestHouseId: Number(id) } });
      await db.contact.deleteMany({ where: { guestHouseId: Number(id) } });
      await db.guestHouse.delete({ where: { id: Number(id) } });

      return c.json({
        success: true,
        message: "Guest house deleted successfully",
      });
    } catch (error) {
      return c.json(
        { success: false, error: "Error deleting the guest house" },
        500
      );
    }
  })

  // Mise à jour partielle d'une guesthouse
  .patch("/patch/:id", zValidator("json", patchGuestHouseSchema), async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesGuestHouseExist(Number(id)))) {
        return c.json({ success: false, error: "Guest house not found" }, 404);
      }

      const {
        name,
        description,
        address,
        contacts,
        hasParking,
        isPetFriendly,
        region,
        rooms,
        images,
      } = await c.req.valid("json");

      const roomIds = await db.room.findMany({
        where: { id: { in: rooms } },
      });

      const updatedGuesthouse = await db.guestHouse.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
          address,
          contacts: {
            createMany: { data: contacts! },
          },
          hasParking,
          isPetFriendly,
          region,
          rooms: {
            connect: roomIds.map((room) => ({ id: room.id })),
          },
          images: {
            createMany: { data: images?.map((url) => ({ url })) || [] },
          },
        },
      });

      return c.json({
        success: true,
        message: "Guest house updated successfully",
        data: updatedGuesthouse,
      });
    } catch (error) {
      return c.json(
        { success: false, error: "Error updating the guest house" },
        500
      );
    }
  });

export default app;
