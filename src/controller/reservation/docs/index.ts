import { describeRoute } from "hono-openapi";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { patchReservationSchema, reservationSchema } from "../schema";

// Extended schemas to include relations
const memberSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  // Add other member fields as needed
});

const roomSchema = z.object({
  id: z.string(),
  roomNumber: z.number(),
  // Add other room fields as needed
});

const clientSchema = z.object({
  id: z.string(),
  name: z.string(),
  // Add other client fields as needed
});

const reservationWithRelationsSchema = z.object({
  id: z.string(),
  checkIn: z.string().datetime(),
  checkOut: z.string().datetime(),
  status: z.string(),
  totalPrice: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  room: roomSchema,
  members: z.array(memberSchema),
  client: clientSchema,
});

// Common response schemas
const successResponseSchema = z.object({
  success: z.boolean(),
  data: reservationWithRelationsSchema.optional(),
  message: z.string().optional(),
});

const errorResponseSchema = z.object({
  success: z.boolean(),
  error: z.string(),
});

const paginatedResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(reservationWithRelationsSchema),
  totalItems: z.number(),
  pageInfo: z.object({
    currentPage: z.number(),
    hasPreviousPage: z.boolean(),
    hasNextPage: z.boolean(),
  }),
});

// Create Reservation Documentation
export const createReservationDocs = describeRoute({
  tags: ["Reservations"],
  summary: "Create a new reservation",
  description: "Create a new room reservation for the authenticated user",
  security: [{ bearerAuth: [] }],
  requestBody: {
    content: {
      "application/json": {
        schema: zodToJsonSchema(reservationSchema),
      },
    },
  },
  responses: {
    201: {
      description: "Reservation created successfully",
      content: {
        "application/json": {
          schema: zodToJsonSchema(successResponseSchema),
        },
      },
    },
    400: {
      description: "Invalid input data or room conflict",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    404: {
      description: "Room not found",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
  },
});

// Update Reservation Documentation
export const updateReservationDocs = describeRoute({
  tags: ["Reservations"],
  summary: "Update a reservation",
  description: "Update an existing reservation by ID",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Reservation ID",
      schema: { type: "string" },
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: zodToJsonSchema(reservationSchema),
      },
    },
  },
  responses: {
    200: {
      description: "Reservation updated successfully",
      content: {
        "application/json": {
          schema: zodToJsonSchema(successResponseSchema),
        },
      },
    },
    400: {
      description: "Invalid input data or room conflict",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    404: {
      description: "Reservation or room not found",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
  },
});

// Patch Reservation Documentation
export const patchReservationDocs = describeRoute({
  tags: ["Reservations"],
  summary: "Partially update a reservation (Admin/Owner only)",
  description:
    "Update specific fields of a reservation (requires ADMIN or OWNER role)",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Reservation ID",
      schema: { type: "string" },
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: zodToJsonSchema(patchReservationSchema),
      },
    },
  },
  responses: {
    200: {
      description: "Reservation updated successfully",
      content: {
        "application/json": {
          schema: zodToJsonSchema(successResponseSchema),
        },
      },
    },
    400: {
      description: "Invalid input data",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    403: {
      description: "Forbidden - Requires ADMIN or OWNER role",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    404: {
      description: "Reservation or room not found",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
  },
});

// Delete Reservation Documentation
export const deleteReservationDocs = describeRoute({
  tags: ["Reservations"],
  summary: "Delete a reservation",
  description: "Delete an existing reservation by ID",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Reservation ID",
      schema: { type: "string" },
    },
  ],
  responses: {
    200: {
      description: "Reservation deleted successfully",
      content: {
        "application/json": {
          schema: zodToJsonSchema(
            z.object({
              success: z.boolean(),
              message: z.string(),
            })
          ),
        },
      },
    },
    404: {
      description: "Reservation not found",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
  },
});

// Get All Reservations (Admin) Documentation
export const getAllReservationsDocs = describeRoute({
  tags: ["Reservations"],
  summary: "Get all reservations (Admin only)",
  description:
    "Retrieve all reservations with pagination and filtering (ADMIN role required)",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "page",
      in: "query",
      description: "Page number",
      required: false,
      schema: { type: "integer", minimum: 1, default: 1 },
    },
    {
      name: "limit",
      in: "query",
      description: "Items per page",
      required: false,
      schema: { type: "integer", minimum: 1, maximum: 100, default: 10 },
    },
    {
      name: "checkInFrom",
      in: "query",
      description: "Filter by check-in date (from)",
      required: false,
      schema: { type: "string", format: "date-time" },
    },
    {
      name: "checkInTo",
      in: "query",
      description: "Filter by check-in date (to)",
      required: false,
      schema: { type: "string", format: "date-time" },
    },
    {
      name: "status",
      in: "query",
      description: "Filter by reservation status",
      required: false,
      schema: { type: "string" },
    },
    {
      name: "roomNumber",
      in: "query",
      description: "Filter by room number",
      required: false,
      schema: { type: "integer" },
    },
    {
      name: "clientName",
      in: "query",
      description: "Filter by client name",
      required: false,
      schema: { type: "string" },
    },
  ],
  responses: {
    200: {
      description: "Paginated list of reservations with relations",
      content: {
        "application/json": {
          schema: zodToJsonSchema(paginatedResponseSchema),
        },
      },
    },
    403: {
      description: "Forbidden - Admin role required",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
  },
});

// Get Owner Reservations Documentation
export const getOwnerReservationsDocs = describeRoute({
  tags: ["Reservations"],
  summary: "Get reservations (Owner only)",
  description:
    "Retrieve all reservations with pagination and filtering (OWNER role required)",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "page",
      in: "query",
      description: "Page number",
      required: false,
      schema: { type: "integer", minimum: 1, default: 1 },
    },
    {
      name: "limit",
      in: "query",
      description: "Items per page",
      required: false,
      schema: { type: "integer", minimum: 1, maximum: 100, default: 10 },
    },
    {
      name: "checkInFrom",
      in: "query",
      description: "Filter by check-in date (from)",
      required: false,
      schema: { type: "string", format: "date-time" },
    },
    {
      name: "checkInTo",
      in: "query",
      description: "Filter by check-in date (to)",
      required: false,
      schema: { type: "string", format: "date-time" },
    },
    {
      name: "status",
      in: "query",
      description: "Filter by reservation status",
      required: false,
      schema: { type: "string" },
    },
    {
      name: "roomNumber",
      in: "query",
      description: "Filter by room number",
      required: false,
      schema: { type: "integer" },
    },
    {
      name: "clientName",
      in: "query",
      description: "Filter by client name",
      required: false,
      schema: { type: "string" },
    },
  ],
  responses: {
    200: {
      description: "Paginated list of reservations with relations",
      content: {
        "application/json": {
          schema: zodToJsonSchema(paginatedResponseSchema),
        },
      },
    },
    403: {
      description: "Forbidden - Owner role required",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
  },
});

// Get Client Reservations Documentation
export const getClientReservationsDocs = describeRoute({
  tags: ["Reservations"],
  summary: "Get client reservations",
  description:
    "Retrieve reservations for the authenticated client (USER or GUEST role required)",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "page",
      in: "query",
      description: "Page number",
      required: false,
      schema: { type: "integer", minimum: 1, default: 1 },
    },
    {
      name: "limit",
      in: "query",
      description: "Items per page",
      required: false,
      schema: { type: "integer", minimum: 1, maximum: 100, default: 10 },
    },
    {
      name: "checkInFrom",
      in: "query",
      description: "Filter by check-in date (from)",
      required: false,
      schema: { type: "string", format: "date-time" },
    },
    {
      name: "checkInTo",
      in: "query",
      description: "Filter by check-in date (to)",
      required: false,
      schema: { type: "string", format: "date-time" },
    },
    {
      name: "status",
      in: "query",
      description: "Filter by reservation status",
      required: false,
      schema: { type: "string" },
    },
    {
      name: "roomNumber",
      in: "query",
      description: "Filter by room number",
      required: false,
      schema: { type: "integer" },
    },
  ],
  responses: {
    200: {
      description: "Paginated list of client's reservations with relations",
      content: {
        "application/json": {
          schema: zodToJsonSchema(paginatedResponseSchema),
        },
      },
    },
    403: {
      description: "Forbidden - User or Guest role required",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: zodToJsonSchema(errorResponseSchema),
        },
      },
    },
  },
});
