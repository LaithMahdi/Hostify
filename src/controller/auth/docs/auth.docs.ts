import { describeRoute } from "hono-openapi";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { Role } from "@prisma/client";
import { userLoginSchema, userRegisterSchema } from "@/schemas";

// Convert Zod schemas to JSON schemas for OpenAPI documentation
const registerUserRawSchema = zodToJsonSchema(userRegisterSchema, {
  name: "RegisterUser",
});
const registerUserJsonSchema =
  registerUserRawSchema.definitions?.RegisterUser || {};

const loginRawSchema = zodToJsonSchema(userLoginSchema, {
  name: "LoginUser",
});
const loginUserJsonSchema = loginRawSchema.definitions?.LoginUser || {};

// Define response schemas
const registerResponseSchema = z.object({
  success: z.boolean(),
  user: z.object({
    id: z.number(),
    fullName: z.string(),
    email: z.string(),
    role: z.nativeEnum(Role),
  }),
});

const loginResponseSchema = z.object({
  success: z.boolean(),
  token: z.string(),
});

const meResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    id: z.number(),
    fullName: z.string(),
    email: z.string(),
    role: z.nativeEnum(Role),
  }),
});

// Define error response schema
const errorResponseSchema = z.object({
  error: z.string(),
});

// Convert response schemas to JSON schemas
const registerResponseJsonSchema =
  zodToJsonSchema(registerResponseSchema, {
    name: "RegisterResponse",
  }).definitions?.RegisterResponse || {};

const loginResponseJsonSchema =
  zodToJsonSchema(loginResponseSchema, {
    name: "LoginResponse",
  }).definitions?.LoginResponse || {};

const meResponseJsonSchema =
  zodToJsonSchema(meResponseSchema, {
    name: "MeResponse",
  }).definitions?.MeResponse || {};

const errorResponseJsonSchema =
  zodToJsonSchema(errorResponseSchema, {
    name: "ErrorResponse",
  }).definitions?.ErrorResponse || {};

// Register route documentation
export const registerDocs = describeRoute({
  tags: ["Authentication"],
  summary: "Register user",
  description:
    "Register a new user in the database with the provided details (full name, email, password, role) and return the user object. The password is hashed before storing it in the database. The role defaults to 'USER' if not provided.",
  requestBody: {
    content: {
      "application/json": {
        schema: registerUserJsonSchema,
      },
    },
  },
  responses: {
    201: {
      description: "User registered successfully",
      content: {
        "application/json": {
          schema: registerResponseJsonSchema,
        },
      },
    },
    400: {
      description: "User already exists",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});

// Login route documentation
export const loginDocs = describeRoute({
  tags: ["Authentication"],
  summary: "Log in",
  description:
    "Log in a user with the provided email and password and return a JWT token. The token is stored in an HTTP-only cookie for 30 days.",
  requestBody: {
    content: {
      "application/json": {
        schema: loginUserJsonSchema,
      },
    },
  },
  responses: {
    200: {
      description: "Successful login",
      content: {
        "application/json": {
          schema: loginResponseJsonSchema,
        },
      },
    },
    404: {
      description: "User not found",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
    401: {
      description: "Invalid password",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});

// Me route documentation
export const meDocs = describeRoute({
  tags: ["Authentication"],
  summary: "Get current user",
  description:
    "Get the current authenticated user's details from the database. Requires a valid JWT token in the cookie. Returns the user object with the ID, full name, email, and role.",
  security: [{ cookieAuth: [] }],
  responses: {
    200: {
      description: "User found",
      content: {
        "application/json": {
          schema: meResponseJsonSchema,
        },
      },
    },
    401: {
      description: "Unauthorized access",
      content: {
        "application/json": {
          schema: errorResponseJsonSchema,
        },
      },
    },
  },
});
