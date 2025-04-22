import { Hono } from "hono";
import { db } from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import { roomSchema, patchRoomSchema } from "@/schemas";
import { doesRoomExist } from "@/controller/room/room.service";
import { authMiddleware } from "@/middleware/auth_middleware";
import { roleMiddleware } from "@/middleware/role_middleware";
import { Role } from "@prisma/client";
import {
  createRoomDocs,
  deleteRoomDocs,
  getAllRoomsDocs,
  getMyRoomsDocs,
  getRoomByIdDocs,
  patchRoomDocs,
  updateRoomDocs,
} from "./docs/room.docs";

const app = new Hono()
  .post(
    "/create",
    createRoomDocs,
    zValidator("json", roomSchema),
    authMiddleware,
    roleMiddleware([Role.ADMIN, Role.OWNER]),
    async (c) => {
      try {
        const user = c.get("user");
        const {
          capacity,
          hasBalcony,
          pricePerNight,
          roomNumber,
          status,
          type,
          description,
          guestHouseId,
          isActive,
          images,
          equipements,
        } = await c.req.valid("json");

        console.log(c.req.valid("json"));

        // Création de la chambre
        const newRoom = await db.room.create({
          data: {
            capacity,
            hasBalcony,
            pricePerNight,
            roomNumber,
            status,
            type,
            description,
            guestHouseId: guestHouseId!,
            equipment: {
              connect: equipements
                ? equipements.map((id: number) => ({ id }))
                : [],
            },
            isActive,
            images: {
              createMany: { data: images?.map((url) => ({ url })) || [] },
            },
            ownerId: user.id,
          },
        });

        return c.json(
          {
            success: true,
            message: "Room created successfully",
            data: newRoom,
          },
          201
        );
      } catch (error) {
        console.log("error", error);
        return c.json(
          {
            success: false,
            error: "Error adding the room",
          },
          500
        );
      }
    }
  )
  .get("/all", getAllRoomsDocs, async (c) => {
    try {
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 10);
      const status = c.req.query("status") || null;
      const roomNumber = Number(c.req.query("roomNumber") || "0");

      const skip = (page - 1) * limit;

      const filters: any = {};

      if (status) {
        filters.status = status;
      }

      if (roomNumber) {
        filters.roomNumber = {
          equals: roomNumber,
        };
      }

      const [totalItems, rooms] = await Promise.all([
        db.room.count({ where: filters }),
        db.room.findMany({
          skip,
          take: limit,
          where: filters,
          include: { images: true, guestHouse: true },
          orderBy: { createdAt: "desc" },
        }),
      ]);

      return c.json({
        success: true,
        data: rooms,
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
          error: "Error retrieving rooms",
        },
        500
      );
    }
  })
  .get("/:id", getRoomByIdDocs, authMiddleware, async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesRoomExist(Number(id)))) {
        return c.json({ success: false, error: "Room not found" }, 404);
      }

      const room = await db.room.findUnique({
        where: { id: Number(id) },
        include: {
          images: true,
          equipment: true,
          guestHouse: true,
        },
      });

      const formattedRoom = {
        ...room,
        images: room?.images.map((image) => ({
          id: image.id,
          url: image.url,
        })),
        equipment: room?.equipment.map((equipement) => ({
          id: equipement.id,
          name: equipement.name,
        })),
      };

      return c.json({ success: true, data: formattedRoom });
    } catch (error) {
      return c.json(
        { success: false, error: "Error retrieving the room" },
        500
      );
    }
  })
  .get("/my/", getMyRoomsDocs, authMiddleware, async (c) => {
    try {
      const user = c.get("user");
      const rooms = await db.room.findMany({
        where: { ownerId: user.id },
      });
      return c.json({
        success: true,
        data: rooms,
      });
    } catch (error) {
      console.log(error);
      return c.json(
        {
          success: false,
          error: "Error retrieving the rooms",
        },
        500
      );
    }
  })
  .put(
    "/update/:id",
    updateRoomDocs,
    authMiddleware,
    roleMiddleware([Role.ADMIN, Role.OWNER]),
    zValidator("json", roomSchema),
    async (c) => {
      try {
        const id = c.req.param("id");
        const {
          capacity,
          hasBalcony,
          pricePerNight,
          roomNumber,
          status,
          type,
          description,
          guestHouseId,
          isActive,
          images,
          equipements,
        } = await c.req.valid("json");

        if (!(await doesRoomExist(Number(id)))) {
          return c.json({ success: false, error: "Room not found" }, 404);
        }

        await db.image.deleteMany({ where: { roomId: Number(id) } });
        await db.room.update({
          where: { id: Number(id) },
          data: {
            equipment: { set: [] },
          },
        });

        const updatedRoom = await db.room.update({
          where: { id: Number(id) },
          data: {
            capacity,
            hasBalcony,
            pricePerNight,
            roomNumber,
            status,
            type,
            description,
            guestHouseId: guestHouseId!,
            isActive,
            images: {
              createMany: { data: images?.map((url) => ({ url })) || [] },
            },
            equipment: {
              connect: equipements
                ? equipements.map((id: number) => ({ id }))
                : [],
            },
          },
        });

        return c.json({
          success: true,
          message: "Room updated successfully",
          data: updatedRoom,
        });
      } catch (error) {
        return c.json(
          { success: false, error: "Error updating the room" },
          500
        );
      }
    }
  )
  .delete(
    "/delete/:id",
    deleteRoomDocs,
    authMiddleware,
    roleMiddleware([Role.ADMIN, Role.OWNER]),
    async (c) => {
      try {
        const { id } = c.req.param();

        if (!(await doesRoomExist(Number(id)))) {
          return c.json({ success: false, error: "Room not found" }, 404);
        }

        await db.image.deleteMany({ where: { roomId: Number(id) } });

        await db.room.delete({ where: { id: Number(id) } });

        return c.json({ success: true, message: "Room deleted successfully" });
      } catch (error) {
        return c.json(
          { success: false, error: "Error deleting the room" },
          500
        );
      }
    }
  )
  .patch(
    "/patch/:id",
    patchRoomDocs,
    authMiddleware,
    roleMiddleware([Role.ADMIN, Role.OWNER]),
    zValidator("json", patchRoomSchema),
    async (c) => {
      const { id } = c.req.param();

      if (!(await doesRoomExist(Number(id)))) {
        return c.json({ success: false, error: "Room not found" }, 404);
      }

      const {
        capacity,
        hasBalcony,
        pricePerNight,
        roomNumber,
        status,
        type,
        description,
        guestHouseId,
        isActive,
        images,
      } = await c.req.valid("json");

      const updatedRoom = await db.room.update({
        where: { id: Number(id) },
        data: {
          capacity,
          hasBalcony,
          pricePerNight,
          roomNumber,
          status,
          type,
          description,
          guestHouseId: guestHouseId,
          isActive,
        },
      });

      return c.json({
        success: true,
        message: "Room updated successfully",
        data: updatedRoom,
      });
    }
  );

export default app;
