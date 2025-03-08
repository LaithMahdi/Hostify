import { describeRoute } from "hono-openapi";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { equipmentSchema, patchEquipmentSchema } from "@/schemas";

// Convert Zod schemas to JSON schemas for OpenAPI documentation
const createEquipmentRawSchema = zodToJsonSchema(equipmentSchema, {
  name: "CreateEquipment",
});
const createEquipmentJsonSchema =
  createEquipmentRawSchema.definitions?.CreateEquipment || {};

const patchEquipmentRawSchema = zodToJsonSchema(patchEquipmentSchema, {
  name: "PatchEquipment",
});
const patchEquipmentJsonSchema =
  patchEquipmentRawSchema.definitions?.PatchEquipment || {};

// Define response schemas
const successResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    id: z.number(),
    name: z.string(),
    icon: z.string(),
    isActive: z.boolean(),
    description: z.string(),
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
      name: z.string(),
      icon: z.string(),
      isActive: z.boolean(),
      description: z.string(),
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

// Create equipment documentation
export const createEquipmentDocs = describeRoute({
  tags: ["Equipment"],
  summary: "Create equipment",
  description: "Create a new equipment item in the database",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: { "application/json": { schema: createEquipmentJsonSchema } },
  },
  responses: {
    201: {
      description: "Equipment created successfully",
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

// Get all equipment documentation
export const getAllEquipmentDocs = describeRoute({
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
    200: {
      description: "Successful response",
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

// Get equipment by ID documentation
export const getEquipmentByIdDocs = describeRoute({
  tags: ["Equipment"],
  summary: "Get equipment by ID",
  description: "Get equipment by ID from the database",
  security: [{ cookieAuth: [] }],
  responses: {
    200: {
      description: "Equipment found",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Equipment not found",
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

// Update equipment by ID documentation
export const updateEquipmentDocs = describeRoute({
  tags: ["Equipment"],
  summary: "Update equipment by ID",
  description: "Update equipment by ID in the database",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: { "application/json": { schema: createEquipmentJsonSchema } },
  },
  responses: {
    200: {
      description: "Equipment updated successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Equipment not found",
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

// Delete equipment by ID documentation
export const deleteEquipmentDocs = describeRoute({
  tags: ["Equipment"],
  summary: "Delete equipment by ID",
  description: "Delete equipment by ID from the database",
  security: [{ cookieAuth: [] }],
  responses: {
    200: {
      description: "Equipment deleted successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Equipment not found",
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

// Patch equipment by ID documentation
export const patchEquipmentDocs = describeRoute({
  tags: ["Equipment"],
  summary: "Partially update equipment by ID",
  description: "Partially update equipment by ID in the database",
  security: [{ cookieAuth: [] }],
  requestBody: {
    content: { "application/json": { schema: patchEquipmentJsonSchema } },
  },
  responses: {
    200: {
      description: "Equipment updated successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Equipment not found",
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
