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

  .put("/update/:id", zValidator("json", guestHouseSchema), async (c) => {
    try {
      const id = Number(c.req.param("id"));
      if (isNaN(id)) {
        return c.json({ success: false, error: "Invalid guest house ID" }, 400);
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

      // Check if guest house exists
      if (!(await doesGuestHouseExist(id))) {
        return c.json({ success: false, error: "Guest house not found" }, 404);
      }

      // Get current room associations
      const existingGuestHouse = await db.guestHouse.findUnique({
        where: { id },
        select: { rooms: { select: { id: true } } },
      });

      const existingRoomIds = existingGuestHouse?.rooms.map((r) => r.id) || [];

      // Create a transaction to ensure all operations succeed or fail together
      const result = await db.$transaction(async (tx) => {
        // 1. Update the guest house basic information
        const updatedGuesthouse = await tx.guestHouse.update({
          where: { id },
          data: {
            name,
            description,
            address,
            hasParking,
            isPetFriendly,
            region,
            contacts: {
              deleteMany: {}, // Remove all existing contacts
              createMany: { data: contacts ?? [] },
            },
            images: {
              deleteMany: {}, // Remove all old images
              createMany: { data: (images ?? []).map((url) => ({ url })) },
            },
          },
        });

        // 2. Handle room associations if provided
        if (rooms && Array.isArray(rooms)) {
          // Rooms to remove from this guest house
          const roomsToRemove = existingRoomIds.filter(
            (roomId) => !rooms.includes(roomId)
          );
          if (roomsToRemove.length > 0) {
            // Instead of trying to set guestHouseId to null, just mark as inactive
            await tx.room.updateMany({
              where: {
                id: { in: roomsToRemove },
                guestHouseId: id,
              },
              data: {
                isActive: false,
              },
            });
          }

          // Rooms to add to this guest house
          const roomsToAdd = rooms.filter(
            (roomId) => !existingRoomIds.includes(roomId)
          );
          if (roomsToAdd.length > 0) {
            // Find rooms that can be added to this guest house
            const availableRooms = await tx.room.findMany({
              where: {
                id: { in: roomsToAdd },
                isActive: false, // Only consider inactive rooms
              },
              select: { id: true },
            });

            const availableRoomIds = availableRooms.map((r) => r.id);

            if (availableRoomIds.length > 0) {
              // Update the available rooms to be associated with this guest house
              await tx.room.updateMany({
                where: { id: { in: availableRoomIds } },
                data: {
                  guestHouseId: id,
                  isActive: true,
                },
              });
            }

            // Check if any requested rooms were unavailable
            const unavailableRooms = roomsToAdd.filter(
              (id) => !availableRoomIds.includes(id)
            );
            if (unavailableRooms.length > 0) {
              console.warn(
                `Some rooms could not be added to guest house: ${unavailableRooms.join(
                  ", "
                )}`
              );
            }
          }
        }

        // 3. Get the final updated guest house with all its associations
        const finalGuestHouse = await tx.guestHouse.findUnique({
          where: { id },
          include: {
            rooms: {
              where: { isActive: true }, // Only include active rooms
              orderBy: { roomNumber: "asc" },
            },
            contacts: true,
            images: true,
          },
        });

        return finalGuestHouse;
      });

      return c.json({
        success: true,
        message: "Guest house updated successfully",
        data: result,
      });
    } catch (error) {
      console.error("Error updating guest house:", error);
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
