import { describeRoute } from "hono-openapi";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { clientSchema, patchClientSchema } from "../schema";

// Convert Zod schemas to JSON schemas
const clientJsonSchema = zodToJsonSchema(clientSchema);
const patchClientJsonSchema = zodToJsonSchema(patchClientSchema);

// Common response schemas
const successResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: clientSchema,
});

const errorResponseSchema = z.object({
  success: z.boolean(),
  error: z.string(),
});

const paginatedResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(clientSchema),
  totalItems: z.number(),
  pageInfo: z.object({
    hasPreviousPage: z.boolean(),
    hasNextPage: z.boolean(),
  }),
});

// Convert to JSON schemas
const successResponseJsonSchema = zodToJsonSchema(successResponseSchema);
const errorResponseJsonSchema = zodToJsonSchema(errorResponseSchema);
const paginatedResponseJsonSchema = zodToJsonSchema(paginatedResponseSchema);

// Create Client Documentation
export const createClientDocs = describeRoute({
  tags: ["Clients"],
  summary: "Create a new client/guest",
  description: "Create a new client or family member/companion record",
  security: [{ bearerAuth: [] }],
  requestBody: {
    content: {
      "application/json": {
        schema: clientJsonSchema,
      },
    },
  },
  responses: {
    201: {
      description: "Client created successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    400: {
      description: "Invalid input data",
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

// Get Clients Added by User Documentation
export const getUserClientsDocs = describeRoute({
  tags: ["Clients"],
  summary: "Get clients added by current user",
  description:
    "Retrieve all clients/family members added by the authenticated user",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "List of clients",
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            data: z.array(clientSchema),
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

// Get All Clients (Admin) Documentation
export const getAllClientsDocs = describeRoute({
  tags: ["Clients"],
  summary: "Get all clients (Admin only)",
  description:
    "Retrieve all clients with pagination and filtering (Admin role required)",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "page",
      in: "query",
      description: "Page number",
      required: false,
      schema: { type: "integer", minimum: 1 },
    },
    {
      name: "limit",
      in: "query",
      description: "Items per page",
      required: false,
      schema: { type: "integer", minimum: 1, maximum: 100 },
    },
    {
      name: "search",
      in: "query",
      description: "Search by name",
      required: false,
      schema: { type: "string" },
    },
    {
      name: "phone",
      in: "query",
      description: "Filter by phone number",
      required: false,
      schema: { type: "string" },
    },
  ],
  responses: {
    200: {
      description: "Paginated list of clients",
      content: {
        "application/json": {
          schema: paginatedResponseJsonSchema,
        },
      },
    },
    403: {
      description: "Forbidden - Admin role required",
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

// Update Client Documentation
export const updateClientDocs = describeRoute({
  tags: ["Clients"],
  summary: "Update a client",
  description: "Update a client/guest record by ID",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Client ID",
      schema: { type: "string" },
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: clientJsonSchema,
      },
    },
  },
  responses: {
    200: {
      description: "Client updated successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Client not found",
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

// Patch Client Documentation
export const patchClientDocs = describeRoute({
  tags: ["Clients"],
  summary: "Partially update a client",
  description: "Update specific fields of a client/guest record",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Client ID",
      schema: { type: "string" },
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: patchClientJsonSchema,
      },
    },
  },
  responses: {
    200: {
      description: "Client updated successfully",
      content: {
        "application/json": {
          schema: successResponseJsonSchema,
        },
      },
    },
    404: {
      description: "Client not found",
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

// Delete Client Documentation
export const deleteClientDocs = describeRoute({
  tags: ["Clients"],
  summary: "Delete a client",
  description: "Delete a client/guest record by ID",
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Client ID",
      schema: { type: "string" },
    },
  ],
  responses: {
    200: {
      description: "Client deleted successfully",
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string(),
          }),
        },
      },
    },
    404: {
      description: "Client not found",
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
