import { Hono } from "hono";
import { db } from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import { roomSchema, patchRoomSchema } from "@/schemas";
import { doesRoomExist } from "@/controller/room/room.service";

const app = new Hono()
  .post("/create", zValidator("json", roomSchema), async (c) => {
    try {
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
          isActive,
          images: {
            createMany: { data: images?.map((url) => ({ url })) || [] },
          },
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
      return c.json(
        {
          success: false,
          error: "Error adding the room",
        },
        500
      );
    }
  })
  .get("/all", async (c) => {
    try {
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 10);
      const search = c.req.query("search") || "";
      const status = c.req.query("status");

      const skip = (page - 1) * limit;

      const filters: any = {
        description: {
          contains: search,
          mode: "insensitive",
        },
      };

      if (status) filters.status = status;

      const [totalItems, rooms] = await Promise.all([
        db.room.count({ where: filters }),
        db.room.findMany({
          skip,
          take: limit,
          where: filters,
          orderBy: { id: "asc" },
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
  .get("/:id", async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesRoomExist(Number(id)))) {
        return c.json({ success: false, error: "Room not found" }, 404);
      }

      const room = await db.room.findUnique({
        where: { id: Number(id) },
      });

      return c.json({
        success: true,
        data: room,
      });
    } catch (error) {
      return c.json(
        { success: false, error: "Error retrieving the room" },
        500
      );
    }
  })
  .put("/update/:id", zValidator("json", roomSchema), async (c) => {
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
      } = await c.req.valid("json");

      if (!(await doesRoomExist(Number(id)))) {
        return c.json({ success: false, error: "Room not found" }, 404);
      }

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
        },
      });

      return c.json({
        success: true,
        message: "Room updated successfully",
        data: updatedRoom,
      });
    } catch (error) {
      return c.json({ success: false, error: "Error updating the room" }, 500);
    }
  })
  .delete("/delete/:id", async (c) => {
    try {
      const { id } = c.req.param();

      if (!(await doesRoomExist(Number(id)))) {
        return c.json({ success: false, error: "Room not found" }, 404);
      }

      await db.room.delete({ where: { id: Number(id) } });

      return c.json({ success: true, message: "Room deleted successfully" });
    } catch (error) {
      return c.json({ success: false, error: "Error deleting the room" }, 500);
    }
  })
  .patch("/patch/:id", zValidator("json", patchRoomSchema), async (c) => {
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
  });

export default app;
