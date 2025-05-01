import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { patchReservationSchema, reservationSchema } from "./schema";
import { authMiddleware } from "@/middleware/auth_middleware";
import { db } from "@/lib/prisma";
import { roleMiddleware } from "@/middleware/role_middleware";
import { Role, RoomStatus } from "@prisma/client";
import {
  createReservationDocs,
  deleteReservationDocs,
  getAllReservationsDocs,
  getClientReservationsDocs,
  getOwnerReservationsDocs,
  patchReservationDocs,
  updateReservationDocs,
} from "./docs";

const app = new Hono()
  .post(
    "/create",
    createReservationDocs,
    zValidator("json", reservationSchema),
    authMiddleware,
    async (c) => {
      try {
        const user = c.get("user");
        const {
          checkIn: checkInStr,
          checkOut: checkOutStr,
          members,
          roomId,
          status,
          totalPrice,
        } = await c.req.valid("json");

        const checkIn = new Date(checkInStr);
        const checkOut = new Date(checkOutStr);

        if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
          return c.json(
            { success: false, error: "Invalid check-in or check-out date" },
            400
          );
        }

        if (checkIn >= checkOut) {
          return c.json(
            {
              success: false,
              error: "Check-in date must be before check-out date",
            },
            400
          );
        }

        const room = await db.room.findUnique({
          where: { id: Number(roomId) },
          include: { reservations: true },
        });

        if (!room) {
          return c.json({ success: false, error: "Room not found" }, 404);
        }

        // Check for overlapping reservations
        const hasConflict = room.reservations.some((res) => {
          const existingCheckIn = new Date(res.checkIn);
          const existingCheckOut = new Date(res.checkOut);
          return checkIn < existingCheckOut && checkOut > existingCheckIn;
        });

        if (hasConflict) {
          return c.json(
            { success: false, error: "Room is already booked in this period" },
            400
          );
        }

        const membersUser = await db.membre.findMany({
          where: {
            id: { in: Array.isArray(members) ? members.map(Number) : [] },
          },
        });

        // ✅ If all validations pass, proceed to create the reservation
        const reservation = await db.reservation.create({
          data: {
            checkIn,
            checkOut,
            members: {
              connect: membersUser.map((m) => ({ id: m.id })),
            },
            roomId: Number(roomId),
            status,
            totalPrice,
            clientId: user.id,
          },
        });

        await db.room.update({
          where: { id: room.id },
          data: {
            reservations: {
              connect: { id: reservation.id },
            },
            status: RoomStatus.BOOKED,
          },
        });

        return c.json({ success: true, reservation }, 201);
      } catch (error) {
        console.error(error);
        return c.json(
          { success: false, error: "Error creating reservation" },
          500
        );
      }
    }
  )
  .put(
    "/update/:id",
    updateReservationDocs,
    zValidator("json", reservationSchema),
    authMiddleware,
    async (c) => {
      try {
        const user = c.get("user");
        const reservationId = c.req.param("id");
        const {
          checkIn: checkInStr,
          checkOut: checkOutStr,
          members,
          roomId,
          status,
          totalPrice,
        } = await c.req.valid("json");

        const checkIn = new Date(checkInStr);
        const checkOut = new Date(checkOutStr);

        if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
          return c.json(
            { success: false, error: "Invalid check-in or check-out date" },
            400
          );
        }

        if (checkIn >= checkOut) {
          return c.json(
            {
              success: false,
              error: "Check-in date must be before check-out date",
            },
            400
          );
        }

        const room = await db.room.findUnique({
          where: { id: Number(roomId) },
          include: { reservations: true },
        });

        if (!room) {
          return c.json({ success: false, error: "Room not found" }, 404);
        }

        // Check for overlapping reservations
        const hasConflict = room.reservations.some((res) => {
          const existingCheckIn = new Date(res.checkIn);
          const existingCheckOut = new Date(res.checkOut);
          return checkIn < existingCheckOut && checkOut > existingCheckIn;
        });

        if (hasConflict) {
          return c.json(
            { success: false, error: "Room is already booked in this period" },
            400
          );
        }

        const membersUser = await db.membre.findMany({
          where: {
            id: { in: Array.isArray(members) ? members.map(Number) : [] },
          },
        });

        // ✅ If all validations pass, proceed to create the reservation
        const reservation = await db.reservation.update({
          where: { id: reservationId },
          data: {
            checkIn,
            checkOut,
            members: {
              connect: membersUser.map((m) => ({ id: m.id })),
            },
            roomId: Number(roomId),
            status,
            totalPrice,
            clientId: user.id,
          },
        });

        return c.json({ success: true, reservation }, 200);
      } catch (error) {
        console.error(error);
        return c.json(
          { success: false, error: "Error updating reservation" },
          500
        );
      }
    }
  )
  .patch(
    "/patch/:id",
    patchReservationDocs,
    zValidator("json", patchReservationSchema),
    authMiddleware,
    roleMiddleware([Role.ADMIN, Role.OWNER]),
    async (c) => {
      try {
        const reservationId = c.req.param("id");
        const { members, roomId, status, totalPrice } = await c.req.valid(
          "json"
        );

        const room = await db.room.findUnique({
          where: { id: Number(roomId) },
          include: { reservations: true },
        });

        if (!room) {
          return c.json({ success: false, error: "Room not found" }, 404);
        }

        const membersUser = await db.membre.findMany({
          where: {
            id: { in: Array.isArray(members) ? members.map(Number) : [] },
          },
        });

        // ✅ If all validations pass, proceed to create the reservation
        const reservation = await db.reservation.update({
          where: { id: reservationId },
          data: {
            members: {
              connect: membersUser.map((m) => ({ id: m.id })),
            },
            roomId: Number(roomId),
            status,
            totalPrice,
          },
        });

        return c.json({ success: true, reservation }, 200);
      } catch (error) {
        return c.json(
          { success: false, error: "Error patching reservation" },
          500
        );
      }
    }
  )
  .delete("/delete/:id", deleteReservationDocs, authMiddleware, async (c) => {
    try {
      const reservationId = c.req.param("id");

      const reservation = await db.reservation.findUnique({
        where: { id: reservationId },
      });

      if (!reservation) {
        return c.json({ success: false, error: "Reservation not found" }, 404);
      }

      await db.reservation.delete({ where: { id: reservationId } });

      return c.json(
        { success: true, message: "Reservation deleted successfully" },
        200
      );
    } catch (error) {
      return c.json(
        { success: false, error: "Error deleting reservation" },
        500
      );
    }
  })
  .get(
    "/all",
    getAllReservationsDocs,
    authMiddleware,
    roleMiddleware([Role.ADMIN]),
    async (c) => {
      try {
        const page = Number(c.req.query("page") || 1);
        const limit = Number(c.req.query("limit") || 10);
        const skip = (page - 1) * limit;

        const checkInFrom = c.req.query("checkInFrom") || "";
        const checkInTo = c.req.query("checkInTo") || "";
        const status = c.req.query("status") || "";
        const roomNumber = c.req.query("roomNumber") || "";
        const clientName = c.req.query("clientName") || "";

        const filters: any = {};

        if (status) filters.status = status;

        if (checkInFrom || checkInTo) {
          filters.AND = [];

          if (checkInFrom) {
            filters.AND.push({
              checkIn: {
                gte: checkInFrom,
              },
            });
          }

          if (checkInTo) {
            filters.AND.push({
              checkIn: {
                lte: checkInTo,
              },
            });
          }
        }

        if (roomNumber) {
          filters.room = {
            roomNumber: Number(roomNumber),
          };
        }

        if (clientName) {
          filters.client = {
            name: {
              contains: clientName,
              mode: "insensitive",
            },
          };
        }

        const [totalItems, reservations] = await Promise.all([
          db.reservation.count({ where: filters }),
          db.reservation.findMany({
            skip,
            take: limit,
            where: filters,
            orderBy: { createdAt: "desc" },
            include: {
              room: true,
              members: true,
              client: true,
            },
          }),
        ]);

        return c.json({
          success: true,
          data: reservations,
          totalItems,
          pageInfo: {
            currentPage: page,
            hasPreviousPage: page > 1,
            hasNextPage: page * limit < totalItems,
          },
        });
      } catch (error) {
        console.error("Error retrieving reservations:", error);
        return c.json(
          { success: false, error: "Failed to fetch reservations" },
          500
        );
      }
    }
  )
  .get(
    "/owner",
    getOwnerReservationsDocs,
    authMiddleware,
    roleMiddleware([Role.OWNER]),
    async (c) => {
      try {
        const page = Number(c.req.query("page") || 1);
        const limit = Number(c.req.query("limit") || 10);
        const skip = (page - 1) * limit;

        const checkInFrom = c.req.query("checkInFrom") || "";
        const checkInTo = c.req.query("checkInTo") || "";
        const status = c.req.query("status") || "";
        const roomNumber = c.req.query("roomNumber") || "";
        const clientName = c.req.query("clientName") || "";

        const filters: any = {};

        if (status) filters.status = status;

        if (checkInFrom || checkInTo) {
          filters.AND = [];

          if (checkInFrom) {
            filters.AND.push({
              checkIn: {
                gte: checkInFrom,
              },
            });
          }

          if (checkInTo) {
            filters.AND.push({
              checkIn: {
                lte: checkInTo,
              },
            });
          }
        }

        if (roomNumber) {
          filters.room = {
            roomNumber: Number(roomNumber),
          };
        }

        if (clientName) {
          filters.client = {
            name: {
              contains: clientName,
              mode: "insensitive",
            },
          };
        }

        const [totalItems, reservations] = await Promise.all([
          db.reservation.count({ where: filters }),
          db.reservation.findMany({
            skip,
            take: limit,
            where: filters,
            orderBy: { createdAt: "desc" },
            include: {
              room: true,
              members: true,
              client: true,
            },
          }),
        ]);

        return c.json({
          success: true,
          data: reservations,
          totalItems,
          pageInfo: {
            currentPage: page,
            hasPreviousPage: page > 1,
            hasNextPage: page * limit < totalItems,
          },
        });
      } catch (error) {
        console.error("Error retrieving reservations:", error);
        return c.json(
          { success: false, error: "Failed to fetch reservations" },
          500
        );
      }
    }
  )
  .get(
    "/client",
    getClientReservationsDocs,
    authMiddleware,
    roleMiddleware([Role.USER, Role.GUEST]),
    async (c) => {
      try {
        const page = Number(c.req.query("page") || 1);
        const limit = Number(c.req.query("limit") || 10);
        const skip = (page - 1) * limit;

        const checkInFrom = c.req.query("checkInFrom") || "";
        const checkInTo = c.req.query("checkInTo") || "";
        const status = c.req.query("status") || "";
        const roomNumber = c.req.query("roomNumber") || "";
        const clientName = c.req.query("clientName") || "";

        const filters: any = {};

        if (status) filters.status = status;

        if (checkInFrom || checkInTo) {
          filters.AND = [];

          if (checkInFrom) {
            filters.AND.push({
              checkIn: {
                gte: checkInFrom,
              },
            });
          }

          if (checkInTo) {
            filters.AND.push({
              checkIn: {
                lte: checkInTo,
              },
            });
          }
        }

        if (roomNumber) {
          filters.room = {
            roomNumber: Number(roomNumber),
          };
        }

        if (clientName) {
          filters.client = {
            name: {
              contains: clientName,
              mode: "insensitive",
            },
          };
        }

        const [totalItems, reservations] = await Promise.all([
          db.reservation.count({ where: filters }),
          db.reservation.findMany({
            skip,
            take: limit,
            where: filters,
            orderBy: { createdAt: "desc" },
            include: {
              room: true,
              members: true,
              client: true,
            },
          }),
        ]);

        return c.json({
          success: true,
          data: reservations,
          totalItems,
          pageInfo: {
            currentPage: page,
            hasPreviousPage: page > 1,
            hasNextPage: page * limit < totalItems,
          },
        });
      } catch (error) {
        console.error("Error retrieving reservations:", error);
        return c.json(
          { success: false, error: "Failed to fetch reservations" },
          500
        );
      }
    }
  );

export default app;
