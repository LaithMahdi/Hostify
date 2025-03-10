import { describeRoute } from "hono-openapi";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { roomSchema, patchRoomSchema } from "@/schemas";

// Convert Zod schemas to JSON schemas for OpenAPI documentation
const createRoomRawSchema = zodToJsonSchema(roomSchema, {
  name: "CreateRoom",
});
const createRoomJsonSchema = createRoomRawSchema.definitions?.CreateRoom || {};

const patchRoomRawSchema = zodToJsonSchema(patchRoomSchema, {
  name: "PatchRoom",
});
const patchRoomJsonSchema = patchRoomRawSchema.definitions?.PatchRoom || {};

// Define response schemas
const successResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    id: z.number(),
    capacity: z.number(),
    hasBalcony: z.boolean(),
    pricePerNight: z.number(),
    roomNumber: z.string(),
    status: z.string(),
    type: z.string(),
    description: z.string(),
    guestHouseId: z.number(),
    isActive: z.boolean(),
    images: z.array(z.object({ url: z.string() })),
    equipment: z.array(z.object({ id: z.number() })),
  }),
});

const errorResponseSchema = z.object({
  success: z.boolean(),
  error: z.string(),
});

const paginatedResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(
    z.object({
      id: z.number(),
      capacity: z.number(),
      hasBalcony: z.boolean(),
      pricePerNight: z.number(),
      roomNumber: z.string(),
      status: z.string(),
      type: z.string(),
      description: z.string(),
      guestHouseId: z.number(),
      isActive: z.boolean(),
    })
  ),
  totalItems: z.number(),
  pageInfo: z.object({
    hasPreviousPage: z.boolean(),
    hasNextPage: z.boolean(),
  }),
});

// Convert response schemas to JSON schemas
const successResponseJsonSchema =
  zodToJsonSchema(successResponseSchema, {
    name: "SuccessResponse",
  }).definitions?.SuccessResponse || {};

const errorResponseJsonSchema =
  zodToJsonSchema(errorResponseSchema, {
    name: "ErrorResponse",
  }).definitions?.ErrorResponse || {};

const paginatedResponseJsonSchema =
  zodToJsonSchema(paginatedResponseSchema, {
    name: "PaginatedResponse",
  }).definitions?.PaginatedResponse || {};

// Create room documentation
export const createRoomDocs = describeRoute({
  tags: ["Room"],
  summary: "Create a new room",
  description:
    "Create a new room with details like capacity, price, and amenities.",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: {
      "application/json": {
        schema: createRoomJsonSchema,
      },
    },
  },
  responses: {
    201: {
      description: "Room created successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});

// Get all rooms documentation
export const getAllRoomsDocs = describeRoute({
  tags: ["Room"],
  summary: "Get all rooms",
  description:
    "Retrieve a paginated list of rooms with optional filtering by status and room number.",
  parameters: [
    {
      name: "page",
      in: "query",
      description: "Page number for pagination (default: 1)",
      required: false,
      schema: { type: "integer", default: 1 },
    },
    {
      name: "limit",
      in: "query",
      description: "Number of items per page (default: 10)",
      required: false,
      schema: { type: "integer", default: 10 },
    },
    {
      name: "status",
      in: "query",
      description: "Filter by room status",
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
      description: "Successful response with paginated rooms",
      content: {
        "application/json": {
          schema: paginatedResponseJsonSchema,
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});

// Get room by ID documentation
export const getRoomByIdDocs = describeRoute({
  tags: ["Room"],
  summary: "Get room by ID",
  description: "Retrieve detailed information about a specific room by its ID.",
  responses: {
    200: {
      description: "Room found",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Room not found",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});

// Get my rooms documentation
export const getMyRoomsDocs = describeRoute({
  tags: ["Room"],
  summary: "Get rooms owned by the current user",
  description: "Retrieve a list of rooms owned by the authenticated user.",
  security: [{ cookieAuth: [] }],
  responses: {
    200: {
      description: "Successful response",
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            data: z.array(
              z.object({
                id: z.number(),
                capacity: z.number(),
                hasBalcony: z.boolean(),
                pricePerNight: z.number(),
                roomNumber: z.string(),
                status: z.string(),
                type: z.string(),
                description: z.string(),
                guestHouseId: z.number(),
                isActive: z.boolean(),
              })
            ),
          }),
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});

// Update room by ID documentation
export const updateRoomDocs = describeRoute({
  tags: ["Room"],
  summary: "Update room by ID",
  description: "Update the details of a specific room by its ID.",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: {
      "application/json": {
        schema: createRoomJsonSchema,
      },
    },
  },
  responses: {
    200: {
      description: "Room updated successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Room not found",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});

// Delete room by ID documentation
export const deleteRoomDocs = describeRoute({
  tags: ["Room"],
  summary: "Delete room by ID",
  description: "Delete a specific room by its ID.",
  security: [{ cookieAuth: [] }],
  responses: {
    200: {
      description: "Room deleted successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Room not found",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});

// Patch room by ID documentation
export const patchRoomDocs = describeRoute({
  tags: ["Room"],
  summary: "Partially update room by ID",
  description: "Update specific fields of a room by its ID.",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: {
      "application/json": {
        schema: patchRoomJsonSchema,
      },
    },
  },
  responses: {
    200: {
      description: "Room updated successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Room not found",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
    500: {
      description: "Internal server error",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});
