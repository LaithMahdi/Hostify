import { describeRoute } from "hono-openapi";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { guestHouseSchema, patchGuestHouseSchema } from "@/schemas";

// Convert Zod schemas to JSON schemas for OpenAPI documentation
const createGuestHouseRawSchema = zodToJsonSchema(guestHouseSchema, {
  name: "CreateGuestHouse",
});
const createGuestHouseJsonSchema =
  createGuestHouseRawSchema.definitions?.CreateGuestHouse || {};

const patchGuestHouseRawSchema = zodToJsonSchema(patchGuestHouseSchema, {
  name: "PatchGuestHouse",
});
const patchGuestHouseJsonSchema =
  patchGuestHouseRawSchema.definitions?.PatchGuestHouse || {};

// Define response schemas
const successResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: guestHouseSchema,
});

const errorResponseSchema = z.object({
  success: z.boolean(),
  error: z.string(),
});

const paginatedResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(guestHouseSchema),
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

// Create guest house documentation
export const createGuestHouseDocs = describeRoute({
  tags: ["Guest House"],
  summary: "Create a new guest house",
  description:
    "Add a new guest house to the database with details like name, address, and amenities.",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: {
      "application/json": {
        schema: createGuestHouseJsonSchema,
      },
    },
  },
  responses: {
    201: {
      description: "Guest house created successfully",
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

// Get all guest houses documentation
export const getAllGuestHousesDocs = describeRoute({
  tags: ["Guest House"],
  summary: "Get all guest houses",
  description:
    "Retrieve a paginated list of guest houses with optional filtering by name, region, parking, and pet-friendliness.",
  security: [{ cookieAuth: [] }],
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
      name: "search",
      in: "query",
      description: "Search by guest house name",
      required: false,
      schema: { type: "string" },
    },
    {
      name: "country",
      in: "query",
      description: "Filter by region or country",
      required: false,
      schema: { type: "string" },
    },
    {
      name: "hasParking",
      in: "query",
      description: "Filter by parking availability (true/false)",
      required: false,
      schema: { type: "boolean" },
    },
    {
      name: "isPetFriendly",
      in: "query",
      description: "Filter by pet-friendliness (true/false)",
      required: false,
      schema: { type: "boolean" },
    },
  ],
  responses: {
    200: {
      description: "Successful response with paginated guest houses",
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

// Get guest house by ID documentation
export const getGuestHouseByIdDocs = describeRoute({
  tags: ["Guest House"],
  summary: "Get guest house by ID",
  description:
    "Retrieve detailed information about a specific guest house by its ID.",
  security: [{ cookieAuth: [] }],
  responses: {
    200: {
      description: "Guest house found",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Guest house not found",
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

// Update guest house by ID documentation
export const updateGuestHouseDocs = describeRoute({
  tags: ["Guest House"],
  summary: "Update guest house by ID",
  description: "Update the details of a specific guest house by its ID.",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: {
      "application/json": {
        schema: createGuestHouseJsonSchema,
      },
    },
  },
  responses: {
    200: {
      description: "Guest house updated successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Guest house not found",
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

// Delete guest house by ID documentation
export const deleteGuestHouseDocs = describeRoute({
  tags: ["Guest House"],
  summary: "Delete guest house by ID",
  description: "Delete a specific guest house by its ID.",
  security: [{ cookieAuth: [] }],
  responses: {
    200: {
      description: "Guest house deleted successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Guest house not found",
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

// Patch guest house by ID documentation
export const patchGuestHouseDocs = describeRoute({
  tags: ["Guest House"],
  summary: "Partially update guest house by ID",
  description: "Update specific fields of a guest house by its ID.",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: {
      "application/json": {
        schema: patchGuestHouseJsonSchema,
      },
    },
  },
  responses: {
    200: {
      description: "Guest house updated successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Guest house not found",
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
