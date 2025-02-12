import { fromZodError } from "zod-validation-error";

import type {
  Context,
  Env,
  MiddlewareHandler,
  TypedResponse,
  ValidationTargets,
} from "hono";
import { validator } from "hono/validator";
import type { ZodError, ZodSchema, z } from "zod";

// Define a hook type for handling validation results
export type Hook<T, E extends Env, P extends string, O = {}> = (
  result:
    | { success: true; data: T }
    | { success: false; error: ZodError; data: T },
  c: Context<E, P>
) =>
  | Response
  | Promise<Response>
  | void
  | Promise<Response | void>
  | TypedResponse<O>;

// zValidator function
export const zValidator = <
  T extends ZodSchema,
  Target extends keyof ValidationTargets,
  E extends Env,
  P extends string
>(
  target: Target,
  schema: T,
  hook?: Hook<z.infer<T>, E, P>
): MiddlewareHandler<
  E,
  P,
  { in: { [K in Target]: z.input<T> }; out: { [K in Target]: z.output<T> } }
> => {
  return validator(target, async (value, c) => {
    const result = await schema.safeParseAsync(value);

    // If a hook function is provided, execute it
    if (hook) {
      const hookResult = hook({ data: value, ...result }, c);
      if (hookResult) {
        if (hookResult instanceof Response || hookResult instanceof Promise) {
          return hookResult;
        }
        if ("response" in hookResult) {
          return hookResult.response;
        }
      }
    }

    // Handle validation failure
    if (!result.success) {
      const validationError = fromZodError(result.error);
      return c.json(
        {
          message: validationError.message,
          errors: validationError.details,
        },
        400
      );
    }

    // Return validated data
    return result.data as z.output<T>;
  });
};
