import { describeRoute } from "hono-openapi";
import { z } from "zod";
import { clientSchema, patchClientSchema } from "../schema";
import { zodToJsonSchema } from "zod-to-json-schema";
import { Gender, Relationship } from "@prisma/client";

// Extended schemas to include relations
const memberSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  gender: z.nativeEnum(Gender),
  relationship: z.nativeEnum(Relationship),
  isManier: z.boolean(),
  guestId: z.string(),
});

const reservationSchema = z.object({
  id: z.string(),
  // Add all reservation fields as needed
});

const clientWithRelationsSchema = clientSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  addedById: z.string(),
  membre: z.array(memberSchema),
  reservations: z.array(reservationSchema),
});

// Convert Zod schemas to JSON schemas
const clientJsonSchema = zodToJsonSchema(clientSchema);
const patchClientJsonSchema = zodToJsonSchema(patchClientSchema);
const clientWithRelationsJsonSchema = zodToJsonSchema(
  clientWithRelationsSchema
);

// Common response schemas
const successResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: clientWithRelationsSchema.optional(),
});

const errorResponseSchema = z.object({
  success: z.boolean(),
  error: z.string(),
});

const paginatedResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(clientWithRelationsSchema),
  totalItems: z.number(),
  pageInfo: z.object({
    hasPreviousPage: z.boolean(),
    hasNextPage: z.boolean(),
  }),
});

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

// Get Clients Added by User Documentation
export const getUserClientsDocs = describeRoute({
  tags: ["Clients"],
  summary: "Get clients added by current user",
  description:
    "Retrieve all clients/family members added by the authenticated user including their members and reservations. Supports pagination and filtering by name and phone number.",
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
      name: "cin",
      in: "query",
      description: "Filter by CIN number",
      required: false,
      schema: { type: "string" },
    },
  ],
  responses: {
    200: {
      description: "Paginated list of clients with relations",
      content: {
        "application/json": {
          schema: zodToJsonSchema(
            z.object({
              success: z.boolean(),
              data: z.array(clientWithRelationsSchema),
              totalItems: z.number(),
              pageInfo: z.object({
                hasPreviousPage: z.boolean(),
                hasNextPage: z.boolean(),
              }),
            })
          ),
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

// Get All Clients (Admin) Documentation
export const getAllClientsDocs = describeRoute({
  tags: ["Clients"],
  summary: "Get all clients (Admin only)",
  description:
    "Retrieve all clients with pagination, filtering, and their relations (Admin role required)",
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
      name: "cin",
      in: "query",
      description: "Filter by CIN number",
      required: false,
      schema: { type: "string" },
    },
  ],
  responses: {
    200: {
      description: "Paginated list of clients with relations",
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

// Get Client by ID Documentation
export const getClientByIdDocs = describeRoute({
  tags: ["Clients"],
  summary: "Get a specific client by ID",
  description:
    "Retrieve a single client with all their members and reservations by client ID",
  security: [{ bearerAuth: [] }],
  params: {
    id: {
      type: "string",
      description: "ID of the client to retrieve",
      required: true,
    },
  },
  responses: {
    200: {
      description: "Client details with relations",
      content: {
        "application/json": {
          schema: zodToJsonSchema(
            z.object({
              success: z.boolean(),
              data: clientWithRelationsSchema,
            })
          ),
        },
      },
    },
    404: {
      description: "Client not found",
      content: {
        "application/json": {
          schema: zodToJsonSchema(
            z.object({
              success: z.boolean(),
              error: z.string(),
            })
          ),
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

// Update Client Documentation
export const updateClientDocs = describeRoute({
  tags: ["Clients"],
  summary: "Update a client",
  description: "Update a client/guest record by ID including their members",
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
          schema: zodToJsonSchema(successResponseSchema),
        },
      },
    },
    404: {
      description: "Client not found",
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
          schema: zodToJsonSchema(successResponseSchema),
        },
      },
    },
    404: {
      description: "Client not found",
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
      description: "Client not found",
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
