import { Hono } from "hono";
import { db } from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import { guestHouseSchema, patchGuestHouseSchema } from "@/schemas";
import { authMiddleware } from "@/middleware/auth_middleware";
import { doesGuestHouseExist } from "./guest.house.service";
import { roleMiddleware } from "@/middleware/role_middleware";
import { Role } from "@prisma/client";
import {
  createGuestHouseDocs,
  deleteGuestHouseDocs,
  getAllGuestHousesDocs,
  getGuestHouseByIdDocs,
  patchGuestHouseDocs,
  updateGuestHouseDocs,
} from "@/controller/guest-house/docs/guestHouse.docs";

const app = new Hono();

app.post(
  "/create",
  createGuestHouseDocs,
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
);

app.get("/all", getAllGuestHousesDocs, async (c) => {
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
});

app.get("/:id", getGuestHouseByIdDocs, async (c) => {
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
});

app.put(
  "/update/:id",
  updateGuestHouseDocs,
  zValidator("json", guestHouseSchema),
  async (c) => {
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

      await db.contact.deleteMany({ where: { guestHouseId: id } });
      await db.image.deleteMany({ where: { guestHouseId: id } });
      await db.guestHouse.update({
        where: { id },
        data: { rooms: { set: [] } },
      });

      const updatedGuestHouse = await db.guestHouse.update({
        where: { id },
        data: {
          name,
          description,
          address,
          contacts: {
            createMany: { data: contacts! },
          },
          rooms: {
            connect: rooms ? rooms.map((roomId) => ({ id: roomId })) : [],
          },
          images: {
            createMany: { data: images?.map((url) => ({ url })) || [] },
          },
          hasParking,
          isPetFriendly,
          region,
        },
      });

      return c.json(
        { success: true, message: "Guest house updated successfully" },
        200
      );
    } catch (error) {
      console.error("Error updating guest house:", error);
      return c.json({ success: false, error: "Internal server error" }, 500);
    }
  }
);

app.delete("/delete/:id", deleteGuestHouseDocs, async (c) => {
  try {
    const { id } = c.req.param();
    if (!(await doesGuestHouseExist(Number(id)))) {
      return c.json({ success: false, error: "Guest house not found" }, 404);
    }
    await db.image.deleteMany({ where: { guestHouseId: Number(id) } });
    await db.contact.deleteMany({ where: { guestHouseId: Number(id) } });
    await db.room.updateMany({
      where: { guestHouseId: Number(id) },
      data: { guestHouseId: undefined },
    });
    await db.guestHouse.delete({ where: { id: Number(id) } });

    return c.json(
      {
        success: true,
        message: "Guest house deleted successfully",
      },
      200
    );
  } catch (error) {
    return c.json(
      { success: false, error: "Error deleting the guest house" },
      500
    );
  }
});

app.patch(
  "/patch/:id",
  patchGuestHouseDocs,
  zValidator("json", patchGuestHouseSchema),
  async (c) => {
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
  }
);

export default app;
