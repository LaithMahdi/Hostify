
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model GuestHouse
 * 
 */
export type GuestHouse = $Result.DefaultSelection<Prisma.$GuestHousePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model Membre
 * 
 */
export type Membre = $Result.DefaultSelection<Prisma.$MembrePayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReservationStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const Relationship: {
  SPOUSE: 'SPOUSE',
  PARTNER: 'PARTNER',
  CHILD: 'CHILD',
  PARENT: 'PARENT',
  SIBLING: 'SIBLING',
  FRIEND: 'FRIEND',
  RELATIVE: 'RELATIVE',
  OTHER: 'OTHER'
};

export type Relationship = (typeof Relationship)[keyof typeof Relationship]


export const RoomType: {
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE',
  SUITE: 'SUITE',
  FAMILY: 'FAMILY'
};

export type RoomType = (typeof RoomType)[keyof typeof RoomType]


export const RoomStatus: {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED',
  MAINTENANCE: 'MAINTENANCE'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const Role: {
  GUEST: 'GUEST',
  USER: 'USER',
  OWNER: 'OWNER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ContactType: {
  PHONE: 'PHONE',
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  EMAIL: 'EMAIL',
  WEBSITE: 'WEBSITE'
};

export type ContactType = (typeof ContactType)[keyof typeof ContactType]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type Relationship = $Enums.Relationship

export const Relationship: typeof $Enums.Relationship

export type RoomType = $Enums.RoomType

export const RoomType: typeof $Enums.RoomType

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ContactType = $Enums.ContactType

export const ContactType: typeof $Enums.ContactType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestHouse`: Exposes CRUD operations for the **GuestHouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestHouses
    * const guestHouses = await prisma.guestHouse.findMany()
    * ```
    */
  get guestHouse(): Prisma.GuestHouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membre`: Exposes CRUD operations for the **Membre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Membres
    * const membres = await prisma.membre.findMany()
    * ```
    */
  get membre(): Prisma.MembreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Equipment: 'Equipment',
    GuestHouse: 'GuestHouse',
    Room: 'Room',
    Contact: 'Contact',
    Image: 'Image',
    Guest: 'Guest',
    Membre: 'Membre',
    Reservation: 'Reservation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "equipment" | "guestHouse" | "room" | "contact" | "image" | "guest" | "membre" | "reservation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      GuestHouse: {
        payload: Prisma.$GuestHousePayload<ExtArgs>
        fields: Prisma.GuestHouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestHouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestHouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>
          }
          findFirst: {
            args: Prisma.GuestHouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestHouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>
          }
          findMany: {
            args: Prisma.GuestHouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>[]
          }
          create: {
            args: Prisma.GuestHouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>
          }
          createMany: {
            args: Prisma.GuestHouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestHouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>[]
          }
          delete: {
            args: Prisma.GuestHouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>
          }
          update: {
            args: Prisma.GuestHouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>
          }
          deleteMany: {
            args: Prisma.GuestHouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestHouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestHouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>[]
          }
          upsert: {
            args: Prisma.GuestHouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestHousePayload>
          }
          aggregate: {
            args: Prisma.GuestHouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestHouse>
          }
          groupBy: {
            args: Prisma.GuestHouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestHouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestHouseCountArgs<ExtArgs>
            result: $Utils.Optional<GuestHouseCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      Membre: {
        payload: Prisma.$MembrePayload<ExtArgs>
        fields: Prisma.MembreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          findFirst: {
            args: Prisma.MembreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          findMany: {
            args: Prisma.MembreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          create: {
            args: Prisma.MembreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          createMany: {
            args: Prisma.MembreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          delete: {
            args: Prisma.MembreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          update: {
            args: Prisma.MembreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          deleteMany: {
            args: Prisma.MembreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          upsert: {
            args: Prisma.MembreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          aggregate: {
            args: Prisma.MembreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembre>
          }
          groupBy: {
            args: Prisma.MembreGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembreGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembreCountArgs<ExtArgs>
            result: $Utils.Optional<MembreCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    equipment?: EquipmentOmit
    guestHouse?: GuestHouseOmit
    room?: RoomOmit
    contact?: ContactOmit
    image?: ImageOmit
    guest?: GuestOmit
    membre?: MembreOmit
    reservation?: ReservationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rooms: number
    guestHouses: number
    reservations: number
    guests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
    guestHouses?: boolean | UserCountOutputTypeCountGuestHousesArgs
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
    guests?: boolean | UserCountOutputTypeCountGuestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGuestHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestHouseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    rooms: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | EquipmentCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type GuestHouseCountOutputType
   */

  export type GuestHouseCountOutputType = {
    rooms: number
    images: number
    contacts: number
  }

  export type GuestHouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | GuestHouseCountOutputTypeCountRoomsArgs
    images?: boolean | GuestHouseCountOutputTypeCountImagesArgs
    contacts?: boolean | GuestHouseCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * GuestHouseCountOutputType without action
   */
  export type GuestHouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouseCountOutputType
     */
    select?: GuestHouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestHouseCountOutputType without action
   */
  export type GuestHouseCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * GuestHouseCountOutputType without action
   */
  export type GuestHouseCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * GuestHouseCountOutputType without action
   */
  export type GuestHouseCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    images: number
    equipment: number
    reservations: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | RoomCountOutputTypeCountImagesArgs
    equipment?: boolean | RoomCountOutputTypeCountEquipmentArgs
    reservations?: boolean | RoomCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    membre: number
    reservations: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membre?: boolean | GuestCountOutputTypeCountMembreArgs
    reservations?: boolean | GuestCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountMembreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreWhereInput
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    guests: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guests?: boolean | ReservationCountOutputTypeCountGuestsArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | User$roomsArgs<ExtArgs>
    guestHouses?: boolean | User$guestHousesArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    guests?: boolean | User$guestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | User$roomsArgs<ExtArgs>
    guestHouses?: boolean | User$guestHousesArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    guests?: boolean | User$guestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      guestHouses: Prisma.$GuestHousePayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      guests: Prisma.$GuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    guestHouses<T extends User$guestHousesArgs<ExtArgs> = {}>(args?: Subset<T, User$guestHousesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    guests<T extends User$guestsArgs<ExtArgs> = {}>(args?: Subset<T, User$guestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.guestHouses
   */
  export type User$guestHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    where?: GuestHouseWhereInput
    orderBy?: GuestHouseOrderByWithRelationInput | GuestHouseOrderByWithRelationInput[]
    cursor?: GuestHouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestHouseScalarFieldEnum | GuestHouseScalarFieldEnum[]
  }

  /**
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * User.guests
   */
  export type User$guestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    cursor?: GuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    id: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    icon: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    icon: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    description: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    id?: true
  }

  export type EquipmentSumAggregateInputType = {
    id?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    isActive?: true
    createdAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    isActive?: true
    createdAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: number
    name: string
    icon: string
    description: string | null
    isActive: boolean
    createdAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    rooms?: boolean | Equipment$roomsArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "description" | "isActive" | "createdAt", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Equipment$roomsArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      icon: string
      description: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Equipment$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */ 
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'Int'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly icon: FieldRef<"Equipment", 'String'>
    readonly description: FieldRef<"Equipment", 'String'>
    readonly isActive: FieldRef<"Equipment", 'Boolean'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.rooms
   */
  export type Equipment$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model GuestHouse
   */

  export type AggregateGuestHouse = {
    _count: GuestHouseCountAggregateOutputType | null
    _avg: GuestHouseAvgAggregateOutputType | null
    _sum: GuestHouseSumAggregateOutputType | null
    _min: GuestHouseMinAggregateOutputType | null
    _max: GuestHouseMaxAggregateOutputType | null
  }

  export type GuestHouseAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type GuestHouseSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type GuestHouseMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    region: string | null
    description: string | null
    rating: number | null
    hasParking: boolean | null
    isPetFriendly: boolean | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestHouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    region: string | null
    description: string | null
    rating: number | null
    hasParking: boolean | null
    isPetFriendly: boolean | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestHouseCountAggregateOutputType = {
    id: number
    name: number
    address: number
    region: number
    description: number
    rating: number
    hasParking: number
    isPetFriendly: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestHouseAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type GuestHouseSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type GuestHouseMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    region?: true
    description?: true
    rating?: true
    hasParking?: true
    isPetFriendly?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestHouseMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    region?: true
    description?: true
    rating?: true
    hasParking?: true
    isPetFriendly?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestHouseCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    region?: true
    description?: true
    rating?: true
    hasParking?: true
    isPetFriendly?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestHouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestHouse to aggregate.
     */
    where?: GuestHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestHouses to fetch.
     */
    orderBy?: GuestHouseOrderByWithRelationInput | GuestHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestHouses
    **/
    _count?: true | GuestHouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestHouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestHouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestHouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestHouseMaxAggregateInputType
  }

  export type GetGuestHouseAggregateType<T extends GuestHouseAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestHouse[P]>
      : GetScalarType<T[P], AggregateGuestHouse[P]>
  }




  export type GuestHouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestHouseWhereInput
    orderBy?: GuestHouseOrderByWithAggregationInput | GuestHouseOrderByWithAggregationInput[]
    by: GuestHouseScalarFieldEnum[] | GuestHouseScalarFieldEnum
    having?: GuestHouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestHouseCountAggregateInputType | true
    _avg?: GuestHouseAvgAggregateInputType
    _sum?: GuestHouseSumAggregateInputType
    _min?: GuestHouseMinAggregateInputType
    _max?: GuestHouseMaxAggregateInputType
  }

  export type GuestHouseGroupByOutputType = {
    id: number
    name: string
    address: string
    region: string
    description: string | null
    rating: number
    hasParking: boolean
    isPetFriendly: boolean
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: GuestHouseCountAggregateOutputType | null
    _avg: GuestHouseAvgAggregateOutputType | null
    _sum: GuestHouseSumAggregateOutputType | null
    _min: GuestHouseMinAggregateOutputType | null
    _max: GuestHouseMaxAggregateOutputType | null
  }

  type GetGuestHouseGroupByPayload<T extends GuestHouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestHouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestHouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestHouseGroupByOutputType[P]>
            : GetScalarType<T[P], GuestHouseGroupByOutputType[P]>
        }
      >
    >


  export type GuestHouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    region?: boolean
    description?: boolean
    rating?: boolean
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | GuestHouse$roomsArgs<ExtArgs>
    images?: boolean | GuestHouse$imagesArgs<ExtArgs>
    contacts?: boolean | GuestHouse$contactsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GuestHouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestHouse"]>

  export type GuestHouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    region?: boolean
    description?: boolean
    rating?: boolean
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestHouse"]>

  export type GuestHouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    region?: boolean
    description?: boolean
    rating?: boolean
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestHouse"]>

  export type GuestHouseSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    region?: boolean
    description?: boolean
    rating?: boolean
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestHouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "region" | "description" | "rating" | "hasParking" | "isPetFriendly" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["guestHouse"]>
  export type GuestHouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | GuestHouse$roomsArgs<ExtArgs>
    images?: boolean | GuestHouse$imagesArgs<ExtArgs>
    contacts?: boolean | GuestHouse$contactsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GuestHouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestHouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GuestHouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GuestHousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestHouse"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      region: string
      description: string | null
      rating: number
      hasParking: boolean
      isPetFriendly: boolean
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guestHouse"]>
    composites: {}
  }

  type GuestHouseGetPayload<S extends boolean | null | undefined | GuestHouseDefaultArgs> = $Result.GetResult<Prisma.$GuestHousePayload, S>

  type GuestHouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestHouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestHouseCountAggregateInputType | true
    }

  export interface GuestHouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestHouse'], meta: { name: 'GuestHouse' } }
    /**
     * Find zero or one GuestHouse that matches the filter.
     * @param {GuestHouseFindUniqueArgs} args - Arguments to find a GuestHouse
     * @example
     * // Get one GuestHouse
     * const guestHouse = await prisma.guestHouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestHouseFindUniqueArgs>(args: SelectSubset<T, GuestHouseFindUniqueArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one GuestHouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestHouseFindUniqueOrThrowArgs} args - Arguments to find a GuestHouse
     * @example
     * // Get one GuestHouse
     * const guestHouse = await prisma.guestHouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestHouseFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestHouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first GuestHouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestHouseFindFirstArgs} args - Arguments to find a GuestHouse
     * @example
     * // Get one GuestHouse
     * const guestHouse = await prisma.guestHouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestHouseFindFirstArgs>(args?: SelectSubset<T, GuestHouseFindFirstArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first GuestHouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestHouseFindFirstOrThrowArgs} args - Arguments to find a GuestHouse
     * @example
     * // Get one GuestHouse
     * const guestHouse = await prisma.guestHouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestHouseFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestHouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more GuestHouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestHouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestHouses
     * const guestHouses = await prisma.guestHouse.findMany()
     * 
     * // Get first 10 GuestHouses
     * const guestHouses = await prisma.guestHouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestHouseWithIdOnly = await prisma.guestHouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestHouseFindManyArgs>(args?: SelectSubset<T, GuestHouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a GuestHouse.
     * @param {GuestHouseCreateArgs} args - Arguments to create a GuestHouse.
     * @example
     * // Create one GuestHouse
     * const GuestHouse = await prisma.guestHouse.create({
     *   data: {
     *     // ... data to create a GuestHouse
     *   }
     * })
     * 
     */
    create<T extends GuestHouseCreateArgs>(args: SelectSubset<T, GuestHouseCreateArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many GuestHouses.
     * @param {GuestHouseCreateManyArgs} args - Arguments to create many GuestHouses.
     * @example
     * // Create many GuestHouses
     * const guestHouse = await prisma.guestHouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestHouseCreateManyArgs>(args?: SelectSubset<T, GuestHouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuestHouses and returns the data saved in the database.
     * @param {GuestHouseCreateManyAndReturnArgs} args - Arguments to create many GuestHouses.
     * @example
     * // Create many GuestHouses
     * const guestHouse = await prisma.guestHouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuestHouses and only return the `id`
     * const guestHouseWithIdOnly = await prisma.guestHouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestHouseCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestHouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a GuestHouse.
     * @param {GuestHouseDeleteArgs} args - Arguments to delete one GuestHouse.
     * @example
     * // Delete one GuestHouse
     * const GuestHouse = await prisma.guestHouse.delete({
     *   where: {
     *     // ... filter to delete one GuestHouse
     *   }
     * })
     * 
     */
    delete<T extends GuestHouseDeleteArgs>(args: SelectSubset<T, GuestHouseDeleteArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one GuestHouse.
     * @param {GuestHouseUpdateArgs} args - Arguments to update one GuestHouse.
     * @example
     * // Update one GuestHouse
     * const guestHouse = await prisma.guestHouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestHouseUpdateArgs>(args: SelectSubset<T, GuestHouseUpdateArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more GuestHouses.
     * @param {GuestHouseDeleteManyArgs} args - Arguments to filter GuestHouses to delete.
     * @example
     * // Delete a few GuestHouses
     * const { count } = await prisma.guestHouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestHouseDeleteManyArgs>(args?: SelectSubset<T, GuestHouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestHouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestHouses
     * const guestHouse = await prisma.guestHouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestHouseUpdateManyArgs>(args: SelectSubset<T, GuestHouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestHouses and returns the data updated in the database.
     * @param {GuestHouseUpdateManyAndReturnArgs} args - Arguments to update many GuestHouses.
     * @example
     * // Update many GuestHouses
     * const guestHouse = await prisma.guestHouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuestHouses and only return the `id`
     * const guestHouseWithIdOnly = await prisma.guestHouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestHouseUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestHouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one GuestHouse.
     * @param {GuestHouseUpsertArgs} args - Arguments to update or create a GuestHouse.
     * @example
     * // Update or create a GuestHouse
     * const guestHouse = await prisma.guestHouse.upsert({
     *   create: {
     *     // ... data to create a GuestHouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestHouse we want to update
     *   }
     * })
     */
    upsert<T extends GuestHouseUpsertArgs>(args: SelectSubset<T, GuestHouseUpsertArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of GuestHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestHouseCountArgs} args - Arguments to filter GuestHouses to count.
     * @example
     * // Count the number of GuestHouses
     * const count = await prisma.guestHouse.count({
     *   where: {
     *     // ... the filter for the GuestHouses we want to count
     *   }
     * })
    **/
    count<T extends GuestHouseCountArgs>(
      args?: Subset<T, GuestHouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestHouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestHouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestHouseAggregateArgs>(args: Subset<T, GuestHouseAggregateArgs>): Prisma.PrismaPromise<GetGuestHouseAggregateType<T>>

    /**
     * Group by GuestHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestHouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestHouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestHouseGroupByArgs['orderBy'] }
        : { orderBy?: GuestHouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestHouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestHouse model
   */
  readonly fields: GuestHouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestHouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestHouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends GuestHouse$roomsArgs<ExtArgs> = {}>(args?: Subset<T, GuestHouse$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    images<T extends GuestHouse$imagesArgs<ExtArgs> = {}>(args?: Subset<T, GuestHouse$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    contacts<T extends GuestHouse$contactsArgs<ExtArgs> = {}>(args?: Subset<T, GuestHouse$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuestHouse model
   */ 
  interface GuestHouseFieldRefs {
    readonly id: FieldRef<"GuestHouse", 'Int'>
    readonly name: FieldRef<"GuestHouse", 'String'>
    readonly address: FieldRef<"GuestHouse", 'String'>
    readonly region: FieldRef<"GuestHouse", 'String'>
    readonly description: FieldRef<"GuestHouse", 'String'>
    readonly rating: FieldRef<"GuestHouse", 'Float'>
    readonly hasParking: FieldRef<"GuestHouse", 'Boolean'>
    readonly isPetFriendly: FieldRef<"GuestHouse", 'Boolean'>
    readonly ownerId: FieldRef<"GuestHouse", 'String'>
    readonly createdAt: FieldRef<"GuestHouse", 'DateTime'>
    readonly updatedAt: FieldRef<"GuestHouse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuestHouse findUnique
   */
  export type GuestHouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * Filter, which GuestHouse to fetch.
     */
    where: GuestHouseWhereUniqueInput
  }

  /**
   * GuestHouse findUniqueOrThrow
   */
  export type GuestHouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * Filter, which GuestHouse to fetch.
     */
    where: GuestHouseWhereUniqueInput
  }

  /**
   * GuestHouse findFirst
   */
  export type GuestHouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * Filter, which GuestHouse to fetch.
     */
    where?: GuestHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestHouses to fetch.
     */
    orderBy?: GuestHouseOrderByWithRelationInput | GuestHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestHouses.
     */
    cursor?: GuestHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestHouses.
     */
    distinct?: GuestHouseScalarFieldEnum | GuestHouseScalarFieldEnum[]
  }

  /**
   * GuestHouse findFirstOrThrow
   */
  export type GuestHouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * Filter, which GuestHouse to fetch.
     */
    where?: GuestHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestHouses to fetch.
     */
    orderBy?: GuestHouseOrderByWithRelationInput | GuestHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestHouses.
     */
    cursor?: GuestHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestHouses.
     */
    distinct?: GuestHouseScalarFieldEnum | GuestHouseScalarFieldEnum[]
  }

  /**
   * GuestHouse findMany
   */
  export type GuestHouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * Filter, which GuestHouses to fetch.
     */
    where?: GuestHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestHouses to fetch.
     */
    orderBy?: GuestHouseOrderByWithRelationInput | GuestHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestHouses.
     */
    cursor?: GuestHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestHouses.
     */
    skip?: number
    distinct?: GuestHouseScalarFieldEnum | GuestHouseScalarFieldEnum[]
  }

  /**
   * GuestHouse create
   */
  export type GuestHouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * The data needed to create a GuestHouse.
     */
    data: XOR<GuestHouseCreateInput, GuestHouseUncheckedCreateInput>
  }

  /**
   * GuestHouse createMany
   */
  export type GuestHouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestHouses.
     */
    data: GuestHouseCreateManyInput | GuestHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestHouse createManyAndReturn
   */
  export type GuestHouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * The data used to create many GuestHouses.
     */
    data: GuestHouseCreateManyInput | GuestHouseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestHouse update
   */
  export type GuestHouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * The data needed to update a GuestHouse.
     */
    data: XOR<GuestHouseUpdateInput, GuestHouseUncheckedUpdateInput>
    /**
     * Choose, which GuestHouse to update.
     */
    where: GuestHouseWhereUniqueInput
  }

  /**
   * GuestHouse updateMany
   */
  export type GuestHouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestHouses.
     */
    data: XOR<GuestHouseUpdateManyMutationInput, GuestHouseUncheckedUpdateManyInput>
    /**
     * Filter which GuestHouses to update
     */
    where?: GuestHouseWhereInput
    /**
     * Limit how many GuestHouses to update.
     */
    limit?: number
  }

  /**
   * GuestHouse updateManyAndReturn
   */
  export type GuestHouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * The data used to update GuestHouses.
     */
    data: XOR<GuestHouseUpdateManyMutationInput, GuestHouseUncheckedUpdateManyInput>
    /**
     * Filter which GuestHouses to update
     */
    where?: GuestHouseWhereInput
    /**
     * Limit how many GuestHouses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestHouse upsert
   */
  export type GuestHouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * The filter to search for the GuestHouse to update in case it exists.
     */
    where: GuestHouseWhereUniqueInput
    /**
     * In case the GuestHouse found by the `where` argument doesn't exist, create a new GuestHouse with this data.
     */
    create: XOR<GuestHouseCreateInput, GuestHouseUncheckedCreateInput>
    /**
     * In case the GuestHouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestHouseUpdateInput, GuestHouseUncheckedUpdateInput>
  }

  /**
   * GuestHouse delete
   */
  export type GuestHouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    /**
     * Filter which GuestHouse to delete.
     */
    where: GuestHouseWhereUniqueInput
  }

  /**
   * GuestHouse deleteMany
   */
  export type GuestHouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestHouses to delete
     */
    where?: GuestHouseWhereInput
    /**
     * Limit how many GuestHouses to delete.
     */
    limit?: number
  }

  /**
   * GuestHouse.rooms
   */
  export type GuestHouse$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * GuestHouse.images
   */
  export type GuestHouse$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * GuestHouse.contacts
   */
  export type GuestHouse$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * GuestHouse without action
   */
  export type GuestHouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    pricePerNight: number | null
    capacity: number | null
    guestHouseId: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    pricePerNight: number | null
    capacity: number | null
    guestHouseId: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    type: $Enums.RoomType | null
    pricePerNight: number | null
    status: $Enums.RoomStatus | null
    capacity: number | null
    hasBalcony: boolean | null
    description: string | null
    guestHouseId: number | null
    isActive: boolean | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    type: $Enums.RoomType | null
    pricePerNight: number | null
    status: $Enums.RoomStatus | null
    capacity: number | null
    hasBalcony: boolean | null
    description: string | null
    guestHouseId: number | null
    isActive: boolean | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    roomNumber: number
    type: number
    pricePerNight: number
    status: number
    capacity: number
    hasBalcony: number
    description: number
    guestHouseId: number
    isActive: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    roomNumber?: true
    pricePerNight?: true
    capacity?: true
    guestHouseId?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    roomNumber?: true
    pricePerNight?: true
    capacity?: true
    guestHouseId?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    roomNumber?: true
    type?: true
    pricePerNight?: true
    status?: true
    capacity?: true
    hasBalcony?: true
    description?: true
    guestHouseId?: true
    isActive?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    type?: true
    pricePerNight?: true
    status?: true
    capacity?: true
    hasBalcony?: true
    description?: true
    guestHouseId?: true
    isActive?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    roomNumber?: true
    type?: true
    pricePerNight?: true
    status?: true
    capacity?: true
    hasBalcony?: true
    description?: true
    guestHouseId?: true
    isActive?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony: boolean
    description: string | null
    guestHouseId: number | null
    isActive: boolean
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    type?: boolean
    pricePerNight?: boolean
    status?: boolean
    capacity?: boolean
    hasBalcony?: boolean
    description?: boolean
    guestHouseId?: boolean
    isActive?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Room$imagesArgs<ExtArgs>
    equipment?: boolean | Room$equipmentArgs<ExtArgs>
    guestHouse?: boolean | Room$guestHouseArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    reservations?: boolean | Room$reservationsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    type?: boolean
    pricePerNight?: boolean
    status?: boolean
    capacity?: boolean
    hasBalcony?: boolean
    description?: boolean
    guestHouseId?: boolean
    isActive?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guestHouse?: boolean | Room$guestHouseArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    type?: boolean
    pricePerNight?: boolean
    status?: boolean
    capacity?: boolean
    hasBalcony?: boolean
    description?: boolean
    guestHouseId?: boolean
    isActive?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guestHouse?: boolean | Room$guestHouseArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    type?: boolean
    pricePerNight?: boolean
    status?: boolean
    capacity?: boolean
    hasBalcony?: boolean
    description?: boolean
    guestHouseId?: boolean
    isActive?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "type" | "pricePerNight" | "status" | "capacity" | "hasBalcony" | "description" | "guestHouseId" | "isActive" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Room$imagesArgs<ExtArgs>
    equipment?: boolean | Room$equipmentArgs<ExtArgs>
    guestHouse?: boolean | Room$guestHouseArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    reservations?: boolean | Room$reservationsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guestHouse?: boolean | Room$guestHouseArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guestHouse?: boolean | Room$guestHouseArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      equipment: Prisma.$EquipmentPayload<ExtArgs>[]
      guestHouse: Prisma.$GuestHousePayload<ExtArgs> | null
      owner: Prisma.$UserPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: number
      type: $Enums.RoomType
      pricePerNight: number
      status: $Enums.RoomStatus
      capacity: number
      hasBalcony: boolean
      description: string | null
      guestHouseId: number | null
      isActive: boolean
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Room$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    equipment<T extends Room$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Room$equipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    guestHouse<T extends Room$guestHouseArgs<ExtArgs> = {}>(args?: Subset<T, Room$guestHouseArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    reservations<T extends Room$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Room$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly roomNumber: FieldRef<"Room", 'Int'>
    readonly type: FieldRef<"Room", 'RoomType'>
    readonly pricePerNight: FieldRef<"Room", 'Float'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly hasBalcony: FieldRef<"Room", 'Boolean'>
    readonly description: FieldRef<"Room", 'String'>
    readonly guestHouseId: FieldRef<"Room", 'Int'>
    readonly isActive: FieldRef<"Room", 'Boolean'>
    readonly ownerId: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.images
   */
  export type Room$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Room.equipment
   */
  export type Room$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Room.guestHouse
   */
  export type Room$guestHouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    where?: GuestHouseWhereInput
  }

  /**
   * Room.reservations
   */
  export type Room$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
    guestHouseId: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
    guestHouseId: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    type: $Enums.ContactType | null
    value: string | null
    guestHouseId: number | null
    createdAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    type: $Enums.ContactType | null
    value: string | null
    guestHouseId: number | null
    createdAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    type: number
    value: number
    guestHouseId: number
    createdAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
    guestHouseId?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
    guestHouseId?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    type?: true
    value?: true
    guestHouseId?: true
    createdAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    type?: true
    value?: true
    guestHouseId?: true
    createdAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    type?: true
    value?: true
    guestHouseId?: true
    createdAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    type: $Enums.ContactType
    value: string
    guestHouseId: number
    createdAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    value?: boolean
    guestHouseId?: boolean
    createdAt?: boolean
    guestHouse?: boolean | Contact$guestHouseArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    value?: boolean
    guestHouseId?: boolean
    createdAt?: boolean
    guestHouse?: boolean | Contact$guestHouseArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    value?: boolean
    guestHouseId?: boolean
    createdAt?: boolean
    guestHouse?: boolean | Contact$guestHouseArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    type?: boolean
    value?: boolean
    guestHouseId?: boolean
    createdAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "value" | "guestHouseId" | "createdAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guestHouse?: boolean | Contact$guestHouseArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guestHouse?: boolean | Contact$guestHouseArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guestHouse?: boolean | Contact$guestHouseArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      guestHouse: Prisma.$GuestHousePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.ContactType
      value: string
      guestHouseId: number
      createdAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guestHouse<T extends Contact$guestHouseArgs<ExtArgs> = {}>(args?: Subset<T, Contact$guestHouseArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly type: FieldRef<"Contact", 'ContactType'>
    readonly value: FieldRef<"Contact", 'String'>
    readonly guestHouseId: FieldRef<"Contact", 'Int'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.guestHouse
   */
  export type Contact$guestHouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    where?: GuestHouseWhereInput
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    guestHouseId: number | null
    roomId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    guestHouseId: number | null
    roomId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    guestHouseId: number | null
    roomId: number | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    guestHouseId: number | null
    roomId: number | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    guestHouseId: number
    roomId: number
    createdAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    guestHouseId?: true
    roomId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    guestHouseId?: true
    roomId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    guestHouseId?: true
    roomId?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    guestHouseId?: true
    roomId?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    guestHouseId?: true
    roomId?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    guestHouseId: number | null
    roomId: number | null
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    guestHouseId?: boolean
    roomId?: boolean
    createdAt?: boolean
    guestHouse?: boolean | Image$guestHouseArgs<ExtArgs>
    room?: boolean | Image$roomArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    guestHouseId?: boolean
    roomId?: boolean
    createdAt?: boolean
    guestHouse?: boolean | Image$guestHouseArgs<ExtArgs>
    room?: boolean | Image$roomArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    guestHouseId?: boolean
    roomId?: boolean
    createdAt?: boolean
    guestHouse?: boolean | Image$guestHouseArgs<ExtArgs>
    room?: boolean | Image$roomArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    guestHouseId?: boolean
    roomId?: boolean
    createdAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "guestHouseId" | "roomId" | "createdAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guestHouse?: boolean | Image$guestHouseArgs<ExtArgs>
    room?: boolean | Image$roomArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guestHouse?: boolean | Image$guestHouseArgs<ExtArgs>
    room?: boolean | Image$roomArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guestHouse?: boolean | Image$guestHouseArgs<ExtArgs>
    room?: boolean | Image$roomArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      guestHouse: Prisma.$GuestHousePayload<ExtArgs> | null
      room: Prisma.$RoomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      guestHouseId: number | null
      roomId: number | null
      createdAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guestHouse<T extends Image$guestHouseArgs<ExtArgs> = {}>(args?: Subset<T, Image$guestHouseArgs<ExtArgs>>): Prisma__GuestHouseClient<$Result.GetResult<Prisma.$GuestHousePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    room<T extends Image$roomArgs<ExtArgs> = {}>(args?: Subset<T, Image$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly guestHouseId: FieldRef<"Image", 'Int'>
    readonly roomId: FieldRef<"Image", 'Int'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.guestHouse
   */
  export type Image$guestHouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestHouse
     */
    select?: GuestHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestHouse
     */
    omit?: GuestHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestHouseInclude<ExtArgs> | null
    where?: GuestHouseWhereInput
  }

  /**
   * Image.room
   */
  export type Image$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestAvgAggregateOutputType = {
    cin: number | null
    numPassport: number | null
    age: number | null
  }

  export type GuestSumAggregateOutputType = {
    cin: number | null
    numPassport: number | null
    age: number | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    cin: number | null
    numPassport: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    gender: $Enums.Gender | null
    age: number | null
    relationship: $Enums.Relationship | null
    addedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    cin: number | null
    numPassport: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    gender: $Enums.Gender | null
    age: number | null
    relationship: $Enums.Relationship | null
    addedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    cin: number
    numPassport: number
    fullName: number
    email: number
    phone: number
    gender: number
    age: number
    relationship: number
    addedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestAvgAggregateInputType = {
    cin?: true
    numPassport?: true
    age?: true
  }

  export type GuestSumAggregateInputType = {
    cin?: true
    numPassport?: true
    age?: true
  }

  export type GuestMinAggregateInputType = {
    id?: true
    cin?: true
    numPassport?: true
    fullName?: true
    email?: true
    phone?: true
    gender?: true
    age?: true
    relationship?: true
    addedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    cin?: true
    numPassport?: true
    fullName?: true
    email?: true
    phone?: true
    gender?: true
    age?: true
    relationship?: true
    addedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    cin?: true
    numPassport?: true
    fullName?: true
    email?: true
    phone?: true
    gender?: true
    age?: true
    relationship?: true
    addedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _avg?: GuestAvgAggregateInputType
    _sum?: GuestSumAggregateInputType
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    cin: number
    numPassport: number | null
    fullName: string
    email: string | null
    phone: string | null
    gender: $Enums.Gender
    age: number | null
    relationship: $Enums.Relationship
    addedById: string
    createdAt: Date
    updatedAt: Date
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cin?: boolean
    numPassport?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    age?: boolean
    relationship?: boolean
    addedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    membre?: boolean | Guest$membreArgs<ExtArgs>
    reservations?: boolean | Guest$reservationsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cin?: boolean
    numPassport?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    age?: boolean
    relationship?: boolean
    addedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cin?: boolean
    numPassport?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    age?: boolean
    relationship?: boolean
    addedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    cin?: boolean
    numPassport?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    age?: boolean
    relationship?: boolean
    addedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cin" | "numPassport" | "fullName" | "email" | "phone" | "gender" | "age" | "relationship" | "addedById" | "createdAt" | "updatedAt", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    membre?: boolean | Guest$membreArgs<ExtArgs>
    reservations?: boolean | Guest$reservationsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      addedBy: Prisma.$UserPayload<ExtArgs>
      membre: Prisma.$MembrePayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cin: number
      numPassport: number | null
      fullName: string
      email: string | null
      phone: string | null
      gender: $Enums.Gender
      age: number | null
      relationship: $Enums.Relationship
      addedById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    membre<T extends Guest$membreArgs<ExtArgs> = {}>(args?: Subset<T, Guest$membreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    reservations<T extends Guest$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guest model
   */ 
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly cin: FieldRef<"Guest", 'Int'>
    readonly numPassport: FieldRef<"Guest", 'Int'>
    readonly fullName: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
    readonly gender: FieldRef<"Guest", 'Gender'>
    readonly age: FieldRef<"Guest", 'Int'>
    readonly relationship: FieldRef<"Guest", 'Relationship'>
    readonly addedById: FieldRef<"Guest", 'String'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
    readonly updatedAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.membre
   */
  export type Guest$membreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    where?: MembreWhereInput
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    cursor?: MembreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Guest.reservations
   */
  export type Guest$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model Membre
   */

  export type AggregateMembre = {
    _count: MembreCountAggregateOutputType | null
    _avg: MembreAvgAggregateOutputType | null
    _sum: MembreSumAggregateOutputType | null
    _min: MembreMinAggregateOutputType | null
    _max: MembreMaxAggregateOutputType | null
  }

  export type MembreAvgAggregateOutputType = {
    id: number | null
  }

  export type MembreSumAggregateOutputType = {
    id: number | null
  }

  export type MembreMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    gender: $Enums.Gender | null
    relationship: $Enums.Relationship | null
    isManier: boolean | null
    guestId: string | null
    createdAt: Date | null
  }

  export type MembreMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    gender: $Enums.Gender | null
    relationship: $Enums.Relationship | null
    isManier: boolean | null
    guestId: string | null
    createdAt: Date | null
  }

  export type MembreCountAggregateOutputType = {
    id: number
    fullName: number
    gender: number
    relationship: number
    isManier: number
    guestId: number
    createdAt: number
    _all: number
  }


  export type MembreAvgAggregateInputType = {
    id?: true
  }

  export type MembreSumAggregateInputType = {
    id?: true
  }

  export type MembreMinAggregateInputType = {
    id?: true
    fullName?: true
    gender?: true
    relationship?: true
    isManier?: true
    guestId?: true
    createdAt?: true
  }

  export type MembreMaxAggregateInputType = {
    id?: true
    fullName?: true
    gender?: true
    relationship?: true
    isManier?: true
    guestId?: true
    createdAt?: true
  }

  export type MembreCountAggregateInputType = {
    id?: true
    fullName?: true
    gender?: true
    relationship?: true
    isManier?: true
    guestId?: true
    createdAt?: true
    _all?: true
  }

  export type MembreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membre to aggregate.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Membres
    **/
    _count?: true | MembreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembreMaxAggregateInputType
  }

  export type GetMembreAggregateType<T extends MembreAggregateArgs> = {
        [P in keyof T & keyof AggregateMembre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembre[P]>
      : GetScalarType<T[P], AggregateMembre[P]>
  }




  export type MembreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreWhereInput
    orderBy?: MembreOrderByWithAggregationInput | MembreOrderByWithAggregationInput[]
    by: MembreScalarFieldEnum[] | MembreScalarFieldEnum
    having?: MembreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembreCountAggregateInputType | true
    _avg?: MembreAvgAggregateInputType
    _sum?: MembreSumAggregateInputType
    _min?: MembreMinAggregateInputType
    _max?: MembreMaxAggregateInputType
  }

  export type MembreGroupByOutputType = {
    id: number
    fullName: string
    gender: $Enums.Gender
    relationship: $Enums.Relationship
    isManier: boolean
    guestId: string
    createdAt: Date
    _count: MembreCountAggregateOutputType | null
    _avg: MembreAvgAggregateOutputType | null
    _sum: MembreSumAggregateOutputType | null
    _min: MembreMinAggregateOutputType | null
    _max: MembreMaxAggregateOutputType | null
  }

  type GetMembreGroupByPayload<T extends MembreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembreGroupByOutputType[P]>
            : GetScalarType<T[P], MembreGroupByOutputType[P]>
        }
      >
    >


  export type MembreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    gender?: boolean
    relationship?: boolean
    isManier?: boolean
    guestId?: boolean
    createdAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    gender?: boolean
    relationship?: boolean
    isManier?: boolean
    guestId?: boolean
    createdAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    gender?: boolean
    relationship?: boolean
    isManier?: boolean
    guestId?: boolean
    createdAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectScalar = {
    id?: boolean
    fullName?: boolean
    gender?: boolean
    relationship?: boolean
    isManier?: boolean
    guestId?: boolean
    createdAt?: boolean
  }

  export type MembreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "gender" | "relationship" | "isManier" | "guestId" | "createdAt", ExtArgs["result"]["membre"]>
  export type MembreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type MembreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type MembreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $MembrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membre"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      gender: $Enums.Gender
      relationship: $Enums.Relationship
      isManier: boolean
      guestId: string
      createdAt: Date
    }, ExtArgs["result"]["membre"]>
    composites: {}
  }

  type MembreGetPayload<S extends boolean | null | undefined | MembreDefaultArgs> = $Result.GetResult<Prisma.$MembrePayload, S>

  type MembreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembreCountAggregateInputType | true
    }

  export interface MembreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membre'], meta: { name: 'Membre' } }
    /**
     * Find zero or one Membre that matches the filter.
     * @param {MembreFindUniqueArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembreFindUniqueArgs>(args: SelectSubset<T, MembreFindUniqueArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Membre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembreFindUniqueOrThrowArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembreFindUniqueOrThrowArgs>(args: SelectSubset<T, MembreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Membre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindFirstArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembreFindFirstArgs>(args?: SelectSubset<T, MembreFindFirstArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Membre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindFirstOrThrowArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembreFindFirstOrThrowArgs>(args?: SelectSubset<T, MembreFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Membres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Membres
     * const membres = await prisma.membre.findMany()
     * 
     * // Get first 10 Membres
     * const membres = await prisma.membre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membreWithIdOnly = await prisma.membre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembreFindManyArgs>(args?: SelectSubset<T, MembreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Membre.
     * @param {MembreCreateArgs} args - Arguments to create a Membre.
     * @example
     * // Create one Membre
     * const Membre = await prisma.membre.create({
     *   data: {
     *     // ... data to create a Membre
     *   }
     * })
     * 
     */
    create<T extends MembreCreateArgs>(args: SelectSubset<T, MembreCreateArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Membres.
     * @param {MembreCreateManyArgs} args - Arguments to create many Membres.
     * @example
     * // Create many Membres
     * const membre = await prisma.membre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembreCreateManyArgs>(args?: SelectSubset<T, MembreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Membres and returns the data saved in the database.
     * @param {MembreCreateManyAndReturnArgs} args - Arguments to create many Membres.
     * @example
     * // Create many Membres
     * const membre = await prisma.membre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Membres and only return the `id`
     * const membreWithIdOnly = await prisma.membre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembreCreateManyAndReturnArgs>(args?: SelectSubset<T, MembreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Membre.
     * @param {MembreDeleteArgs} args - Arguments to delete one Membre.
     * @example
     * // Delete one Membre
     * const Membre = await prisma.membre.delete({
     *   where: {
     *     // ... filter to delete one Membre
     *   }
     * })
     * 
     */
    delete<T extends MembreDeleteArgs>(args: SelectSubset<T, MembreDeleteArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Membre.
     * @param {MembreUpdateArgs} args - Arguments to update one Membre.
     * @example
     * // Update one Membre
     * const membre = await prisma.membre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembreUpdateArgs>(args: SelectSubset<T, MembreUpdateArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Membres.
     * @param {MembreDeleteManyArgs} args - Arguments to filter Membres to delete.
     * @example
     * // Delete a few Membres
     * const { count } = await prisma.membre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembreDeleteManyArgs>(args?: SelectSubset<T, MembreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Membres
     * const membre = await prisma.membre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembreUpdateManyArgs>(args: SelectSubset<T, MembreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membres and returns the data updated in the database.
     * @param {MembreUpdateManyAndReturnArgs} args - Arguments to update many Membres.
     * @example
     * // Update many Membres
     * const membre = await prisma.membre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Membres and only return the `id`
     * const membreWithIdOnly = await prisma.membre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembreUpdateManyAndReturnArgs>(args: SelectSubset<T, MembreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Membre.
     * @param {MembreUpsertArgs} args - Arguments to update or create a Membre.
     * @example
     * // Update or create a Membre
     * const membre = await prisma.membre.upsert({
     *   create: {
     *     // ... data to create a Membre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membre we want to update
     *   }
     * })
     */
    upsert<T extends MembreUpsertArgs>(args: SelectSubset<T, MembreUpsertArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Membres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreCountArgs} args - Arguments to filter Membres to count.
     * @example
     * // Count the number of Membres
     * const count = await prisma.membre.count({
     *   where: {
     *     // ... the filter for the Membres we want to count
     *   }
     * })
    **/
    count<T extends MembreCountArgs>(
      args?: Subset<T, MembreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembreAggregateArgs>(args: Subset<T, MembreAggregateArgs>): Prisma.PrismaPromise<GetMembreAggregateType<T>>

    /**
     * Group by Membre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembreGroupByArgs['orderBy'] }
        : { orderBy?: MembreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membre model
   */
  readonly fields: MembreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Membre model
   */ 
  interface MembreFieldRefs {
    readonly id: FieldRef<"Membre", 'Int'>
    readonly fullName: FieldRef<"Membre", 'String'>
    readonly gender: FieldRef<"Membre", 'Gender'>
    readonly relationship: FieldRef<"Membre", 'Relationship'>
    readonly isManier: FieldRef<"Membre", 'Boolean'>
    readonly guestId: FieldRef<"Membre", 'String'>
    readonly createdAt: FieldRef<"Membre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Membre findUnique
   */
  export type MembreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre findUniqueOrThrow
   */
  export type MembreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre findFirst
   */
  export type MembreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membres.
     */
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre findFirstOrThrow
   */
  export type MembreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membres.
     */
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre findMany
   */
  export type MembreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membres to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre create
   */
  export type MembreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The data needed to create a Membre.
     */
    data: XOR<MembreCreateInput, MembreUncheckedCreateInput>
  }

  /**
   * Membre createMany
   */
  export type MembreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Membres.
     */
    data: MembreCreateManyInput | MembreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membre createManyAndReturn
   */
  export type MembreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * The data used to create many Membres.
     */
    data: MembreCreateManyInput | MembreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membre update
   */
  export type MembreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The data needed to update a Membre.
     */
    data: XOR<MembreUpdateInput, MembreUncheckedUpdateInput>
    /**
     * Choose, which Membre to update.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre updateMany
   */
  export type MembreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Membres.
     */
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyInput>
    /**
     * Filter which Membres to update
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to update.
     */
    limit?: number
  }

  /**
   * Membre updateManyAndReturn
   */
  export type MembreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * The data used to update Membres.
     */
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyInput>
    /**
     * Filter which Membres to update
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membre upsert
   */
  export type MembreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The filter to search for the Membre to update in case it exists.
     */
    where: MembreWhereUniqueInput
    /**
     * In case the Membre found by the `where` argument doesn't exist, create a new Membre with this data.
     */
    create: XOR<MembreCreateInput, MembreUncheckedCreateInput>
    /**
     * In case the Membre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembreUpdateInput, MembreUncheckedUpdateInput>
  }

  /**
   * Membre delete
   */
  export type MembreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter which Membre to delete.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre deleteMany
   */
  export type MembreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membres to delete
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to delete.
     */
    limit?: number
  }

  /**
   * Membre without action
   */
  export type MembreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    totalPrice: number | null
    roomId: number | null
  }

  export type ReservationSumAggregateOutputType = {
    totalPrice: number | null
    roomId: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    checkIn: Date | null
    checkOut: Date | null
    totalPrice: number | null
    roomId: number | null
    clientId: string | null
    status: $Enums.ReservationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    checkIn: Date | null
    checkOut: Date | null
    totalPrice: number | null
    roomId: number | null
    clientId: string | null
    status: $Enums.ReservationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    checkIn: number
    checkOut: number
    totalPrice: number
    roomId: number
    clientId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    totalPrice?: true
    roomId?: true
  }

  export type ReservationSumAggregateInputType = {
    totalPrice?: true
    roomId?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    roomId?: true
    clientId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    roomId?: true
    clientId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    roomId?: true
    clientId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    checkIn: Date
    checkOut: Date
    totalPrice: number
    roomId: number
    clientId: string
    status: $Enums.ReservationStatus
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    roomId?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
    guests?: boolean | Reservation$guestsArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    roomId?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    roomId?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    roomId?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkIn" | "checkOut" | "totalPrice" | "roomId" | "clientId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
    guests?: boolean | Reservation$guestsArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      client: Prisma.$UserPayload<ExtArgs>
      guests: Prisma.$GuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checkIn: Date
      checkOut: Date
      totalPrice: number
      roomId: number
      clientId: string
      status: $Enums.ReservationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    guests<T extends Reservation$guestsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$guestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly checkIn: FieldRef<"Reservation", 'DateTime'>
    readonly checkOut: FieldRef<"Reservation", 'DateTime'>
    readonly totalPrice: FieldRef<"Reservation", 'Float'>
    readonly roomId: FieldRef<"Reservation", 'Int'>
    readonly clientId: FieldRef<"Reservation", 'String'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.guests
   */
  export type Reservation$guestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    cursor?: GuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const GuestHouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    region: 'region',
    description: 'description',
    rating: 'rating',
    hasParking: 'hasParking',
    isPetFriendly: 'isPetFriendly',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestHouseScalarFieldEnum = (typeof GuestHouseScalarFieldEnum)[keyof typeof GuestHouseScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    type: 'type',
    pricePerNight: 'pricePerNight',
    status: 'status',
    capacity: 'capacity',
    hasBalcony: 'hasBalcony',
    description: 'description',
    guestHouseId: 'guestHouseId',
    isActive: 'isActive',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    type: 'type',
    value: 'value',
    guestHouseId: 'guestHouseId',
    createdAt: 'createdAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    guestHouseId: 'guestHouseId',
    roomId: 'roomId',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    cin: 'cin',
    numPassport: 'numPassport',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    age: 'age',
    relationship: 'relationship',
    addedById: 'addedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const MembreScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    gender: 'gender',
    relationship: 'relationship',
    isManier: 'isManier',
    guestId: 'guestId',
    createdAt: 'createdAt'
  };

  export type MembreScalarFieldEnum = (typeof MembreScalarFieldEnum)[keyof typeof MembreScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    totalPrice: 'totalPrice',
    roomId: 'roomId',
    clientId: 'clientId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RoomType'
   */
  export type EnumRoomTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomType'>
    


  /**
   * Reference to a field of type 'RoomType[]'
   */
  export type ListEnumRoomTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomType[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'ContactType'
   */
  export type EnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType'>
    


  /**
   * Reference to a field of type 'ContactType[]'
   */
  export type ListEnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Relationship'
   */
  export type EnumRelationshipFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Relationship'>
    


  /**
   * Reference to a field of type 'Relationship[]'
   */
  export type ListEnumRelationshipFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Relationship[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rooms?: RoomListRelationFilter
    guestHouses?: GuestHouseListRelationFilter
    reservations?: ReservationListRelationFilter
    guests?: GuestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    guestHouses?: GuestHouseOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    guests?: GuestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rooms?: RoomListRelationFilter
    guestHouses?: GuestHouseListRelationFilter
    reservations?: ReservationListRelationFilter
    guests?: GuestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: IntFilter<"Equipment"> | number
    name?: StringFilter<"Equipment"> | string
    icon?: StringFilter<"Equipment"> | string
    description?: StringNullableFilter<"Equipment"> | string | null
    isActive?: BoolFilter<"Equipment"> | boolean
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    rooms?: RoomListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    icon?: StringFilter<"Equipment"> | string
    description?: StringNullableFilter<"Equipment"> | string | null
    isActive?: BoolFilter<"Equipment"> | boolean
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    rooms?: RoomListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipment"> | number
    name?: StringWithAggregatesFilter<"Equipment"> | string
    icon?: StringWithAggregatesFilter<"Equipment"> | string
    description?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    isActive?: BoolWithAggregatesFilter<"Equipment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type GuestHouseWhereInput = {
    AND?: GuestHouseWhereInput | GuestHouseWhereInput[]
    OR?: GuestHouseWhereInput[]
    NOT?: GuestHouseWhereInput | GuestHouseWhereInput[]
    id?: IntFilter<"GuestHouse"> | number
    name?: StringFilter<"GuestHouse"> | string
    address?: StringFilter<"GuestHouse"> | string
    region?: StringFilter<"GuestHouse"> | string
    description?: StringNullableFilter<"GuestHouse"> | string | null
    rating?: FloatFilter<"GuestHouse"> | number
    hasParking?: BoolFilter<"GuestHouse"> | boolean
    isPetFriendly?: BoolFilter<"GuestHouse"> | boolean
    ownerId?: StringFilter<"GuestHouse"> | string
    createdAt?: DateTimeFilter<"GuestHouse"> | Date | string
    updatedAt?: DateTimeFilter<"GuestHouse"> | Date | string
    rooms?: RoomListRelationFilter
    images?: ImageListRelationFilter
    contacts?: ContactListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GuestHouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    description?: SortOrderInput | SortOrder
    rating?: SortOrder
    hasParking?: SortOrder
    isPetFriendly?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    contacts?: ContactOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type GuestHouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GuestHouseWhereInput | GuestHouseWhereInput[]
    OR?: GuestHouseWhereInput[]
    NOT?: GuestHouseWhereInput | GuestHouseWhereInput[]
    name?: StringFilter<"GuestHouse"> | string
    address?: StringFilter<"GuestHouse"> | string
    region?: StringFilter<"GuestHouse"> | string
    description?: StringNullableFilter<"GuestHouse"> | string | null
    rating?: FloatFilter<"GuestHouse"> | number
    hasParking?: BoolFilter<"GuestHouse"> | boolean
    isPetFriendly?: BoolFilter<"GuestHouse"> | boolean
    ownerId?: StringFilter<"GuestHouse"> | string
    createdAt?: DateTimeFilter<"GuestHouse"> | Date | string
    updatedAt?: DateTimeFilter<"GuestHouse"> | Date | string
    rooms?: RoomListRelationFilter
    images?: ImageListRelationFilter
    contacts?: ContactListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GuestHouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    description?: SortOrderInput | SortOrder
    rating?: SortOrder
    hasParking?: SortOrder
    isPetFriendly?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestHouseCountOrderByAggregateInput
    _avg?: GuestHouseAvgOrderByAggregateInput
    _max?: GuestHouseMaxOrderByAggregateInput
    _min?: GuestHouseMinOrderByAggregateInput
    _sum?: GuestHouseSumOrderByAggregateInput
  }

  export type GuestHouseScalarWhereWithAggregatesInput = {
    AND?: GuestHouseScalarWhereWithAggregatesInput | GuestHouseScalarWhereWithAggregatesInput[]
    OR?: GuestHouseScalarWhereWithAggregatesInput[]
    NOT?: GuestHouseScalarWhereWithAggregatesInput | GuestHouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuestHouse"> | number
    name?: StringWithAggregatesFilter<"GuestHouse"> | string
    address?: StringWithAggregatesFilter<"GuestHouse"> | string
    region?: StringWithAggregatesFilter<"GuestHouse"> | string
    description?: StringNullableWithAggregatesFilter<"GuestHouse"> | string | null
    rating?: FloatWithAggregatesFilter<"GuestHouse"> | number
    hasParking?: BoolWithAggregatesFilter<"GuestHouse"> | boolean
    isPetFriendly?: BoolWithAggregatesFilter<"GuestHouse"> | boolean
    ownerId?: StringWithAggregatesFilter<"GuestHouse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GuestHouse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuestHouse"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    roomNumber?: IntFilter<"Room"> | number
    type?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    pricePerNight?: FloatFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    capacity?: IntFilter<"Room"> | number
    hasBalcony?: BoolFilter<"Room"> | boolean
    description?: StringNullableFilter<"Room"> | string | null
    guestHouseId?: IntNullableFilter<"Room"> | number | null
    isActive?: BoolFilter<"Room"> | boolean
    ownerId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    images?: ImageListRelationFilter
    equipment?: EquipmentListRelationFilter
    guestHouse?: XOR<GuestHouseNullableScalarRelationFilter, GuestHouseWhereInput> | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    reservations?: ReservationListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    type?: SortOrder
    pricePerNight?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    hasBalcony?: SortOrder
    description?: SortOrderInput | SortOrder
    guestHouseId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    equipment?: EquipmentOrderByRelationAggregateInput
    guestHouse?: GuestHouseOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomNumber?: IntFilter<"Room"> | number
    type?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    pricePerNight?: FloatFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    capacity?: IntFilter<"Room"> | number
    hasBalcony?: BoolFilter<"Room"> | boolean
    description?: StringNullableFilter<"Room"> | string | null
    guestHouseId?: IntNullableFilter<"Room"> | number | null
    isActive?: BoolFilter<"Room"> | boolean
    ownerId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    images?: ImageListRelationFilter
    equipment?: EquipmentListRelationFilter
    guestHouse?: XOR<GuestHouseNullableScalarRelationFilter, GuestHouseWhereInput> | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    reservations?: ReservationListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    type?: SortOrder
    pricePerNight?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    hasBalcony?: SortOrder
    description?: SortOrderInput | SortOrder
    guestHouseId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    roomNumber?: IntWithAggregatesFilter<"Room"> | number
    type?: EnumRoomTypeWithAggregatesFilter<"Room"> | $Enums.RoomType
    pricePerNight?: FloatWithAggregatesFilter<"Room"> | number
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    capacity?: IntWithAggregatesFilter<"Room"> | number
    hasBalcony?: BoolWithAggregatesFilter<"Room"> | boolean
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    guestHouseId?: IntNullableWithAggregatesFilter<"Room"> | number | null
    isActive?: BoolWithAggregatesFilter<"Room"> | boolean
    ownerId?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    type?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    value?: StringFilter<"Contact"> | string
    guestHouseId?: IntFilter<"Contact"> | number
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    guestHouse?: XOR<GuestHouseNullableScalarRelationFilter, GuestHouseWhereInput> | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    guestHouseId?: SortOrder
    createdAt?: SortOrder
    guestHouse?: GuestHouseOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    type?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    value?: StringFilter<"Contact"> | string
    guestHouseId?: IntFilter<"Contact"> | number
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    guestHouse?: XOR<GuestHouseNullableScalarRelationFilter, GuestHouseWhereInput> | null
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    guestHouseId?: SortOrder
    createdAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    type?: EnumContactTypeWithAggregatesFilter<"Contact"> | $Enums.ContactType
    value?: StringWithAggregatesFilter<"Contact"> | string
    guestHouseId?: IntWithAggregatesFilter<"Contact"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    guestHouseId?: IntNullableFilter<"Image"> | number | null
    roomId?: IntNullableFilter<"Image"> | number | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    guestHouse?: XOR<GuestHouseNullableScalarRelationFilter, GuestHouseWhereInput> | null
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    guestHouseId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    guestHouse?: GuestHouseOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    guestHouseId?: IntNullableFilter<"Image"> | number | null
    roomId?: IntNullableFilter<"Image"> | number | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    guestHouse?: XOR<GuestHouseNullableScalarRelationFilter, GuestHouseWhereInput> | null
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    guestHouseId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    guestHouseId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    roomId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    cin?: IntFilter<"Guest"> | number
    numPassport?: IntNullableFilter<"Guest"> | number | null
    fullName?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    gender?: EnumGenderFilter<"Guest"> | $Enums.Gender
    age?: IntNullableFilter<"Guest"> | number | null
    relationship?: EnumRelationshipFilter<"Guest"> | $Enums.Relationship
    addedById?: StringFilter<"Guest"> | string
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    membre?: MembreListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    cin?: SortOrder
    numPassport?: SortOrderInput | SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrder
    age?: SortOrderInput | SortOrder
    relationship?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedBy?: UserOrderByWithRelationInput
    membre?: MembreOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cin?: number
    numPassport?: number
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    fullName?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    gender?: EnumGenderFilter<"Guest"> | $Enums.Gender
    age?: IntNullableFilter<"Guest"> | number | null
    relationship?: EnumRelationshipFilter<"Guest"> | $Enums.Relationship
    addedById?: StringFilter<"Guest"> | string
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    membre?: MembreListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id" | "cin" | "numPassport">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    cin?: SortOrder
    numPassport?: SortOrderInput | SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrder
    age?: SortOrderInput | SortOrder
    relationship?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _avg?: GuestAvgOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
    _sum?: GuestSumOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    cin?: IntWithAggregatesFilter<"Guest"> | number
    numPassport?: IntNullableWithAggregatesFilter<"Guest"> | number | null
    fullName?: StringWithAggregatesFilter<"Guest"> | string
    email?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"Guest"> | $Enums.Gender
    age?: IntNullableWithAggregatesFilter<"Guest"> | number | null
    relationship?: EnumRelationshipWithAggregatesFilter<"Guest"> | $Enums.Relationship
    addedById?: StringWithAggregatesFilter<"Guest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type MembreWhereInput = {
    AND?: MembreWhereInput | MembreWhereInput[]
    OR?: MembreWhereInput[]
    NOT?: MembreWhereInput | MembreWhereInput[]
    id?: IntFilter<"Membre"> | number
    fullName?: StringFilter<"Membre"> | string
    gender?: EnumGenderFilter<"Membre"> | $Enums.Gender
    relationship?: EnumRelationshipFilter<"Membre"> | $Enums.Relationship
    isManier?: BoolFilter<"Membre"> | boolean
    guestId?: StringFilter<"Membre"> | string
    createdAt?: DateTimeFilter<"Membre"> | Date | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }

  export type MembreOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    relationship?: SortOrder
    isManier?: SortOrder
    guestId?: SortOrder
    createdAt?: SortOrder
    guest?: GuestOrderByWithRelationInput
  }

  export type MembreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MembreWhereInput | MembreWhereInput[]
    OR?: MembreWhereInput[]
    NOT?: MembreWhereInput | MembreWhereInput[]
    fullName?: StringFilter<"Membre"> | string
    gender?: EnumGenderFilter<"Membre"> | $Enums.Gender
    relationship?: EnumRelationshipFilter<"Membre"> | $Enums.Relationship
    isManier?: BoolFilter<"Membre"> | boolean
    guestId?: StringFilter<"Membre"> | string
    createdAt?: DateTimeFilter<"Membre"> | Date | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }, "id">

  export type MembreOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    relationship?: SortOrder
    isManier?: SortOrder
    guestId?: SortOrder
    createdAt?: SortOrder
    _count?: MembreCountOrderByAggregateInput
    _avg?: MembreAvgOrderByAggregateInput
    _max?: MembreMaxOrderByAggregateInput
    _min?: MembreMinOrderByAggregateInput
    _sum?: MembreSumOrderByAggregateInput
  }

  export type MembreScalarWhereWithAggregatesInput = {
    AND?: MembreScalarWhereWithAggregatesInput | MembreScalarWhereWithAggregatesInput[]
    OR?: MembreScalarWhereWithAggregatesInput[]
    NOT?: MembreScalarWhereWithAggregatesInput | MembreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Membre"> | number
    fullName?: StringWithAggregatesFilter<"Membre"> | string
    gender?: EnumGenderWithAggregatesFilter<"Membre"> | $Enums.Gender
    relationship?: EnumRelationshipWithAggregatesFilter<"Membre"> | $Enums.Relationship
    isManier?: BoolWithAggregatesFilter<"Membre"> | boolean
    guestId?: StringWithAggregatesFilter<"Membre"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Membre"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    totalPrice?: FloatFilter<"Reservation"> | number
    roomId?: IntFilter<"Reservation"> | number
    clientId?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    guests?: GuestListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    roomId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    client?: UserOrderByWithRelationInput
    guests?: GuestOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    totalPrice?: FloatFilter<"Reservation"> | number
    roomId?: IntFilter<"Reservation"> | number
    clientId?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    guests?: GuestListRelationFilter
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    roomId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Reservation"> | number
    roomId?: IntWithAggregatesFilter<"Reservation"> | number
    clientId?: StringWithAggregatesFilter<"Reservation"> | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutOwnerInput
    guestHouses?: GuestHouseCreateNestedManyWithoutOwnerInput
    reservations?: ReservationCreateNestedManyWithoutClientInput
    guests?: GuestCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    guestHouses?: GuestHouseUncheckedCreateNestedManyWithoutOwnerInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutClientInput
    guests?: GuestUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutOwnerNestedInput
    guestHouses?: GuestHouseUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUpdateManyWithoutClientNestedInput
    guests?: GuestUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    guestHouses?: GuestHouseUncheckedUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutClientNestedInput
    guests?: GuestUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateInput = {
    name: string
    icon: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: number
    name: string
    icon: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: number
    name: string
    icon: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestHouseCreateInput = {
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutGuestHouseInput
    images?: ImageCreateNestedManyWithoutGuestHouseInput
    contacts?: ContactCreateNestedManyWithoutGuestHouseInput
    owner: UserCreateNestedOneWithoutGuestHousesInput
  }

  export type GuestHouseUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutGuestHouseInput
    images?: ImageUncheckedCreateNestedManyWithoutGuestHouseInput
    contacts?: ContactUncheckedCreateNestedManyWithoutGuestHouseInput
  }

  export type GuestHouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutGuestHouseNestedInput
    images?: ImageUpdateManyWithoutGuestHouseNestedInput
    contacts?: ContactUpdateManyWithoutGuestHouseNestedInput
    owner?: UserUpdateOneRequiredWithoutGuestHousesNestedInput
  }

  export type GuestHouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutGuestHouseNestedInput
    images?: ImageUncheckedUpdateManyWithoutGuestHouseNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutGuestHouseNestedInput
  }

  export type GuestHouseCreateManyInput = {
    id?: number
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestHouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestHouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutRoomInput
    equipment?: EquipmentCreateNestedManyWithoutRoomsInput
    guestHouse?: GuestHouseCreateNestedOneWithoutRoomsInput
    owner: UserCreateNestedOneWithoutRoomsInput
    reservations?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    guestHouseId?: number | null
    isActive?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutRoomInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutRoomsInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutRoomNestedInput
    equipment?: EquipmentUpdateManyWithoutRoomsNestedInput
    guestHouse?: GuestHouseUpdateOneWithoutRoomsNestedInput
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
    reservations?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutRoomNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutRoomsNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    guestHouseId?: number | null
    isActive?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    type: $Enums.ContactType
    value: string
    createdAt?: Date | string
    guestHouse?: GuestHouseCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    type: $Enums.ContactType
    value: string
    guestHouseId: number
    createdAt?: Date | string
  }

  export type ContactUpdateInput = {
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestHouse?: GuestHouseUpdateOneWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    guestHouseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    type: $Enums.ContactType
    value: string
    guestHouseId: number
    createdAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    guestHouseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    url: string
    createdAt?: Date | string
    guestHouse?: GuestHouseCreateNestedOneWithoutImagesInput
    room?: RoomCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    guestHouseId?: number | null
    roomId?: number | null
    createdAt?: Date | string
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestHouse?: GuestHouseUpdateOneWithoutImagesNestedInput
    room?: RoomUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: number
    url: string
    guestHouseId?: number | null
    roomId?: number | null
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutGuestsInput
    membre?: MembreCreateNestedManyWithoutGuestInput
    reservations?: ReservationCreateNestedManyWithoutGuestsInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    addedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membre?: MembreUncheckedCreateNestedManyWithoutGuestInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestsInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutGuestsNestedInput
    membre?: MembreUpdateManyWithoutGuestNestedInput
    reservations?: ReservationUpdateManyWithoutGuestsNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membre?: MembreUncheckedUpdateManyWithoutGuestNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutGuestsNestedInput
  }

  export type GuestCreateManyInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    addedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreCreateInput = {
    fullName: string
    gender: $Enums.Gender
    relationship: $Enums.Relationship
    isManier?: boolean
    createdAt?: Date | string
    guest: GuestCreateNestedOneWithoutMembreInput
  }

  export type MembreUncheckedCreateInput = {
    id?: number
    fullName: string
    gender: $Enums.Gender
    relationship: $Enums.Relationship
    isManier?: boolean
    guestId: string
    createdAt?: Date | string
  }

  export type MembreUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    isManier?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutMembreNestedInput
  }

  export type MembreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    isManier?: BoolFieldUpdateOperationsInput | boolean
    guestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreCreateManyInput = {
    id?: number
    fullName: string
    gender: $Enums.Gender
    relationship: $Enums.Relationship
    isManier?: boolean
    guestId: string
    createdAt?: Date | string
  }

  export type MembreUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    isManier?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    isManier?: BoolFieldUpdateOperationsInput | boolean
    guestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutReservationsInput
    client: UserCreateNestedOneWithoutReservationsInput
    guests?: GuestCreateNestedManyWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    roomId: number
    clientId: string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutReservationsNestedInput
    client?: UserUpdateOneRequiredWithoutReservationsNestedInput
    guests?: GuestUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    roomId: number
    clientId: string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type GuestHouseListRelationFilter = {
    every?: GuestHouseWhereInput
    some?: GuestHouseWhereInput
    none?: GuestHouseWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type GuestListRelationFilter = {
    every?: GuestWhereInput
    some?: GuestWhereInput
    none?: GuestWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestHouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestHouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    hasParking?: SortOrder
    isPetFriendly?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestHouseAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type GuestHouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    hasParking?: SortOrder
    isPetFriendly?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestHouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    hasParking?: SortOrder
    isPetFriendly?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestHouseSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumRoomTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeFilter<$PrismaModel> | $Enums.RoomType
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type GuestHouseNullableScalarRelationFilter = {
    is?: GuestHouseWhereInput | null
    isNot?: GuestHouseWhereInput | null
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    type?: SortOrder
    pricePerNight?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    hasBalcony?: SortOrder
    description?: SortOrder
    guestHouseId?: SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    pricePerNight?: SortOrder
    capacity?: SortOrder
    guestHouseId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    type?: SortOrder
    pricePerNight?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    hasBalcony?: SortOrder
    description?: SortOrder
    guestHouseId?: SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    type?: SortOrder
    pricePerNight?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    hasBalcony?: SortOrder
    description?: SortOrder
    guestHouseId?: SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    pricePerNight?: SortOrder
    capacity?: SortOrder
    guestHouseId?: SortOrder
  }

  export type EnumRoomTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoomType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomTypeFilter<$PrismaModel>
    _max?: NestedEnumRoomTypeFilter<$PrismaModel>
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    guestHouseId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
    guestHouseId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    guestHouseId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    guestHouseId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
    guestHouseId?: SortOrder
  }

  export type EnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    guestHouseId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    guestHouseId?: SortOrder
    roomId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    guestHouseId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    guestHouseId?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    guestHouseId?: SortOrder
    roomId?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumRelationshipFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    notIn?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipFilter<$PrismaModel> | $Enums.Relationship
  }

  export type MembreListRelationFilter = {
    every?: MembreWhereInput
    some?: MembreWhereInput
    none?: MembreWhereInput
  }

  export type MembreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    cin?: SortOrder
    numPassport?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestAvgOrderByAggregateInput = {
    cin?: SortOrder
    numPassport?: SortOrder
    age?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    cin?: SortOrder
    numPassport?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    cin?: SortOrder
    numPassport?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestSumOrderByAggregateInput = {
    cin?: SortOrder
    numPassport?: SortOrder
    age?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumRelationshipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    notIn?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipWithAggregatesFilter<$PrismaModel> | $Enums.Relationship
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipFilter<$PrismaModel>
    _max?: NestedEnumRelationshipFilter<$PrismaModel>
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type MembreCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    relationship?: SortOrder
    isManier?: SortOrder
    guestId?: SortOrder
    createdAt?: SortOrder
  }

  export type MembreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MembreMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    relationship?: SortOrder
    isManier?: SortOrder
    guestId?: SortOrder
    createdAt?: SortOrder
  }

  export type MembreMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    relationship?: SortOrder
    isManier?: SortOrder
    guestId?: SortOrder
    createdAt?: SortOrder
  }

  export type MembreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    roomId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    roomId?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    roomId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    roomId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    roomId?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type RoomCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type GuestHouseCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GuestHouseCreateWithoutOwnerInput, GuestHouseUncheckedCreateWithoutOwnerInput> | GuestHouseCreateWithoutOwnerInput[] | GuestHouseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GuestHouseCreateOrConnectWithoutOwnerInput | GuestHouseCreateOrConnectWithoutOwnerInput[]
    createMany?: GuestHouseCreateManyOwnerInputEnvelope
    connect?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutClientInput = {
    create?: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput> | ReservationCreateWithoutClientInput[] | ReservationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput | ReservationCreateOrConnectWithoutClientInput[]
    createMany?: ReservationCreateManyClientInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type GuestCreateNestedManyWithoutAddedByInput = {
    create?: XOR<GuestCreateWithoutAddedByInput, GuestUncheckedCreateWithoutAddedByInput> | GuestCreateWithoutAddedByInput[] | GuestUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutAddedByInput | GuestCreateOrConnectWithoutAddedByInput[]
    createMany?: GuestCreateManyAddedByInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type GuestHouseUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GuestHouseCreateWithoutOwnerInput, GuestHouseUncheckedCreateWithoutOwnerInput> | GuestHouseCreateWithoutOwnerInput[] | GuestHouseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GuestHouseCreateOrConnectWithoutOwnerInput | GuestHouseCreateOrConnectWithoutOwnerInput[]
    createMany?: GuestHouseCreateManyOwnerInputEnvelope
    connect?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput> | ReservationCreateWithoutClientInput[] | ReservationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput | ReservationCreateOrConnectWithoutClientInput[]
    createMany?: ReservationCreateManyClientInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type GuestUncheckedCreateNestedManyWithoutAddedByInput = {
    create?: XOR<GuestCreateWithoutAddedByInput, GuestUncheckedCreateWithoutAddedByInput> | GuestCreateWithoutAddedByInput[] | GuestUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutAddedByInput | GuestCreateOrConnectWithoutAddedByInput[]
    createMany?: GuestCreateManyAddedByInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutOwnerInput | RoomUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutOwnerInput | RoomUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutOwnerInput | RoomUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type GuestHouseUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GuestHouseCreateWithoutOwnerInput, GuestHouseUncheckedCreateWithoutOwnerInput> | GuestHouseCreateWithoutOwnerInput[] | GuestHouseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GuestHouseCreateOrConnectWithoutOwnerInput | GuestHouseCreateOrConnectWithoutOwnerInput[]
    upsert?: GuestHouseUpsertWithWhereUniqueWithoutOwnerInput | GuestHouseUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GuestHouseCreateManyOwnerInputEnvelope
    set?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
    disconnect?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
    delete?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
    connect?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
    update?: GuestHouseUpdateWithWhereUniqueWithoutOwnerInput | GuestHouseUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GuestHouseUpdateManyWithWhereWithoutOwnerInput | GuestHouseUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GuestHouseScalarWhereInput | GuestHouseScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput> | ReservationCreateWithoutClientInput[] | ReservationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput | ReservationCreateOrConnectWithoutClientInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutClientInput | ReservationUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReservationCreateManyClientInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutClientInput | ReservationUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutClientInput | ReservationUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type GuestUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<GuestCreateWithoutAddedByInput, GuestUncheckedCreateWithoutAddedByInput> | GuestCreateWithoutAddedByInput[] | GuestUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutAddedByInput | GuestCreateOrConnectWithoutAddedByInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutAddedByInput | GuestUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: GuestCreateManyAddedByInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutAddedByInput | GuestUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutAddedByInput | GuestUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutOwnerInput | RoomUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutOwnerInput | RoomUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutOwnerInput | RoomUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type GuestHouseUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GuestHouseCreateWithoutOwnerInput, GuestHouseUncheckedCreateWithoutOwnerInput> | GuestHouseCreateWithoutOwnerInput[] | GuestHouseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GuestHouseCreateOrConnectWithoutOwnerInput | GuestHouseCreateOrConnectWithoutOwnerInput[]
    upsert?: GuestHouseUpsertWithWhereUniqueWithoutOwnerInput | GuestHouseUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GuestHouseCreateManyOwnerInputEnvelope
    set?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
    disconnect?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
    delete?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
    connect?: GuestHouseWhereUniqueInput | GuestHouseWhereUniqueInput[]
    update?: GuestHouseUpdateWithWhereUniqueWithoutOwnerInput | GuestHouseUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GuestHouseUpdateManyWithWhereWithoutOwnerInput | GuestHouseUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GuestHouseScalarWhereInput | GuestHouseScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput> | ReservationCreateWithoutClientInput[] | ReservationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput | ReservationCreateOrConnectWithoutClientInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutClientInput | ReservationUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReservationCreateManyClientInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutClientInput | ReservationUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutClientInput | ReservationUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type GuestUncheckedUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<GuestCreateWithoutAddedByInput, GuestUncheckedCreateWithoutAddedByInput> | GuestCreateWithoutAddedByInput[] | GuestUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutAddedByInput | GuestCreateOrConnectWithoutAddedByInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutAddedByInput | GuestUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: GuestCreateManyAddedByInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutAddedByInput | GuestUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutAddedByInput | GuestUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<RoomCreateWithoutEquipmentInput, RoomUncheckedCreateWithoutEquipmentInput> | RoomCreateWithoutEquipmentInput[] | RoomUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutEquipmentInput | RoomCreateOrConnectWithoutEquipmentInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<RoomCreateWithoutEquipmentInput, RoomUncheckedCreateWithoutEquipmentInput> | RoomCreateWithoutEquipmentInput[] | RoomUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutEquipmentInput | RoomCreateOrConnectWithoutEquipmentInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoomUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<RoomCreateWithoutEquipmentInput, RoomUncheckedCreateWithoutEquipmentInput> | RoomCreateWithoutEquipmentInput[] | RoomUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutEquipmentInput | RoomCreateOrConnectWithoutEquipmentInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutEquipmentInput | RoomUpsertWithWhereUniqueWithoutEquipmentInput[]
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutEquipmentInput | RoomUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutEquipmentInput | RoomUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<RoomCreateWithoutEquipmentInput, RoomUncheckedCreateWithoutEquipmentInput> | RoomCreateWithoutEquipmentInput[] | RoomUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutEquipmentInput | RoomCreateOrConnectWithoutEquipmentInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutEquipmentInput | RoomUpsertWithWhereUniqueWithoutEquipmentInput[]
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutEquipmentInput | RoomUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutEquipmentInput | RoomUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutGuestHouseInput = {
    create?: XOR<RoomCreateWithoutGuestHouseInput, RoomUncheckedCreateWithoutGuestHouseInput> | RoomCreateWithoutGuestHouseInput[] | RoomUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutGuestHouseInput | RoomCreateOrConnectWithoutGuestHouseInput[]
    createMany?: RoomCreateManyGuestHouseInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutGuestHouseInput = {
    create?: XOR<ImageCreateWithoutGuestHouseInput, ImageUncheckedCreateWithoutGuestHouseInput> | ImageCreateWithoutGuestHouseInput[] | ImageUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutGuestHouseInput | ImageCreateOrConnectWithoutGuestHouseInput[]
    createMany?: ImageCreateManyGuestHouseInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutGuestHouseInput = {
    create?: XOR<ContactCreateWithoutGuestHouseInput, ContactUncheckedCreateWithoutGuestHouseInput> | ContactCreateWithoutGuestHouseInput[] | ContactUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutGuestHouseInput | ContactCreateOrConnectWithoutGuestHouseInput[]
    createMany?: ContactCreateManyGuestHouseInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutGuestHousesInput = {
    create?: XOR<UserCreateWithoutGuestHousesInput, UserUncheckedCreateWithoutGuestHousesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuestHousesInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUncheckedCreateNestedManyWithoutGuestHouseInput = {
    create?: XOR<RoomCreateWithoutGuestHouseInput, RoomUncheckedCreateWithoutGuestHouseInput> | RoomCreateWithoutGuestHouseInput[] | RoomUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutGuestHouseInput | RoomCreateOrConnectWithoutGuestHouseInput[]
    createMany?: RoomCreateManyGuestHouseInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutGuestHouseInput = {
    create?: XOR<ImageCreateWithoutGuestHouseInput, ImageUncheckedCreateWithoutGuestHouseInput> | ImageCreateWithoutGuestHouseInput[] | ImageUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutGuestHouseInput | ImageCreateOrConnectWithoutGuestHouseInput[]
    createMany?: ImageCreateManyGuestHouseInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutGuestHouseInput = {
    create?: XOR<ContactCreateWithoutGuestHouseInput, ContactUncheckedCreateWithoutGuestHouseInput> | ContactCreateWithoutGuestHouseInput[] | ContactUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutGuestHouseInput | ContactCreateOrConnectWithoutGuestHouseInput[]
    createMany?: ContactCreateManyGuestHouseInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUpdateManyWithoutGuestHouseNestedInput = {
    create?: XOR<RoomCreateWithoutGuestHouseInput, RoomUncheckedCreateWithoutGuestHouseInput> | RoomCreateWithoutGuestHouseInput[] | RoomUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutGuestHouseInput | RoomCreateOrConnectWithoutGuestHouseInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutGuestHouseInput | RoomUpsertWithWhereUniqueWithoutGuestHouseInput[]
    createMany?: RoomCreateManyGuestHouseInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutGuestHouseInput | RoomUpdateWithWhereUniqueWithoutGuestHouseInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutGuestHouseInput | RoomUpdateManyWithWhereWithoutGuestHouseInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutGuestHouseNestedInput = {
    create?: XOR<ImageCreateWithoutGuestHouseInput, ImageUncheckedCreateWithoutGuestHouseInput> | ImageCreateWithoutGuestHouseInput[] | ImageUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutGuestHouseInput | ImageCreateOrConnectWithoutGuestHouseInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutGuestHouseInput | ImageUpsertWithWhereUniqueWithoutGuestHouseInput[]
    createMany?: ImageCreateManyGuestHouseInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutGuestHouseInput | ImageUpdateWithWhereUniqueWithoutGuestHouseInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutGuestHouseInput | ImageUpdateManyWithWhereWithoutGuestHouseInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutGuestHouseNestedInput = {
    create?: XOR<ContactCreateWithoutGuestHouseInput, ContactUncheckedCreateWithoutGuestHouseInput> | ContactCreateWithoutGuestHouseInput[] | ContactUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutGuestHouseInput | ContactCreateOrConnectWithoutGuestHouseInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutGuestHouseInput | ContactUpsertWithWhereUniqueWithoutGuestHouseInput[]
    createMany?: ContactCreateManyGuestHouseInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutGuestHouseInput | ContactUpdateWithWhereUniqueWithoutGuestHouseInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutGuestHouseInput | ContactUpdateManyWithWhereWithoutGuestHouseInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutGuestHousesNestedInput = {
    create?: XOR<UserCreateWithoutGuestHousesInput, UserUncheckedCreateWithoutGuestHousesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuestHousesInput
    upsert?: UserUpsertWithoutGuestHousesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuestHousesInput, UserUpdateWithoutGuestHousesInput>, UserUncheckedUpdateWithoutGuestHousesInput>
  }

  export type RoomUncheckedUpdateManyWithoutGuestHouseNestedInput = {
    create?: XOR<RoomCreateWithoutGuestHouseInput, RoomUncheckedCreateWithoutGuestHouseInput> | RoomCreateWithoutGuestHouseInput[] | RoomUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutGuestHouseInput | RoomCreateOrConnectWithoutGuestHouseInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutGuestHouseInput | RoomUpsertWithWhereUniqueWithoutGuestHouseInput[]
    createMany?: RoomCreateManyGuestHouseInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutGuestHouseInput | RoomUpdateWithWhereUniqueWithoutGuestHouseInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutGuestHouseInput | RoomUpdateManyWithWhereWithoutGuestHouseInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutGuestHouseNestedInput = {
    create?: XOR<ImageCreateWithoutGuestHouseInput, ImageUncheckedCreateWithoutGuestHouseInput> | ImageCreateWithoutGuestHouseInput[] | ImageUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutGuestHouseInput | ImageCreateOrConnectWithoutGuestHouseInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutGuestHouseInput | ImageUpsertWithWhereUniqueWithoutGuestHouseInput[]
    createMany?: ImageCreateManyGuestHouseInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutGuestHouseInput | ImageUpdateWithWhereUniqueWithoutGuestHouseInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutGuestHouseInput | ImageUpdateManyWithWhereWithoutGuestHouseInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutGuestHouseNestedInput = {
    create?: XOR<ContactCreateWithoutGuestHouseInput, ContactUncheckedCreateWithoutGuestHouseInput> | ContactCreateWithoutGuestHouseInput[] | ContactUncheckedCreateWithoutGuestHouseInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutGuestHouseInput | ContactCreateOrConnectWithoutGuestHouseInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutGuestHouseInput | ContactUpsertWithWhereUniqueWithoutGuestHouseInput[]
    createMany?: ContactCreateManyGuestHouseInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutGuestHouseInput | ContactUpdateWithWhereUniqueWithoutGuestHouseInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutGuestHouseInput | ContactUpdateManyWithWhereWithoutGuestHouseInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutRoomInput = {
    create?: XOR<ImageCreateWithoutRoomInput, ImageUncheckedCreateWithoutRoomInput> | ImageCreateWithoutRoomInput[] | ImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutRoomInput | ImageCreateOrConnectWithoutRoomInput[]
    createMany?: ImageCreateManyRoomInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type EquipmentCreateNestedManyWithoutRoomsInput = {
    create?: XOR<EquipmentCreateWithoutRoomsInput, EquipmentUncheckedCreateWithoutRoomsInput> | EquipmentCreateWithoutRoomsInput[] | EquipmentUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutRoomsInput | EquipmentCreateOrConnectWithoutRoomsInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type GuestHouseCreateNestedOneWithoutRoomsInput = {
    create?: XOR<GuestHouseCreateWithoutRoomsInput, GuestHouseUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: GuestHouseCreateOrConnectWithoutRoomsInput
    connect?: GuestHouseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ImageCreateWithoutRoomInput, ImageUncheckedCreateWithoutRoomInput> | ImageCreateWithoutRoomInput[] | ImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutRoomInput | ImageCreateOrConnectWithoutRoomInput[]
    createMany?: ImageCreateManyRoomInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<EquipmentCreateWithoutRoomsInput, EquipmentUncheckedCreateWithoutRoomsInput> | EquipmentCreateWithoutRoomsInput[] | EquipmentUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutRoomsInput | EquipmentCreateOrConnectWithoutRoomsInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type EnumRoomTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoomType
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type ImageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ImageCreateWithoutRoomInput, ImageUncheckedCreateWithoutRoomInput> | ImageCreateWithoutRoomInput[] | ImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutRoomInput | ImageCreateOrConnectWithoutRoomInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutRoomInput | ImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ImageCreateManyRoomInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutRoomInput | ImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutRoomInput | ImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type EquipmentUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<EquipmentCreateWithoutRoomsInput, EquipmentUncheckedCreateWithoutRoomsInput> | EquipmentCreateWithoutRoomsInput[] | EquipmentUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutRoomsInput | EquipmentCreateOrConnectWithoutRoomsInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutRoomsInput | EquipmentUpsertWithWhereUniqueWithoutRoomsInput[]
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutRoomsInput | EquipmentUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutRoomsInput | EquipmentUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type GuestHouseUpdateOneWithoutRoomsNestedInput = {
    create?: XOR<GuestHouseCreateWithoutRoomsInput, GuestHouseUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: GuestHouseCreateOrConnectWithoutRoomsInput
    upsert?: GuestHouseUpsertWithoutRoomsInput
    disconnect?: GuestHouseWhereInput | boolean
    delete?: GuestHouseWhereInput | boolean
    connect?: GuestHouseWhereUniqueInput
    update?: XOR<XOR<GuestHouseUpdateToOneWithWhereWithoutRoomsInput, GuestHouseUpdateWithoutRoomsInput>, GuestHouseUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type ReservationUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRoomInput | ReservationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRoomInput | ReservationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRoomInput | ReservationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ImageCreateWithoutRoomInput, ImageUncheckedCreateWithoutRoomInput> | ImageCreateWithoutRoomInput[] | ImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutRoomInput | ImageCreateOrConnectWithoutRoomInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutRoomInput | ImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ImageCreateManyRoomInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutRoomInput | ImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutRoomInput | ImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<EquipmentCreateWithoutRoomsInput, EquipmentUncheckedCreateWithoutRoomsInput> | EquipmentCreateWithoutRoomsInput[] | EquipmentUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutRoomsInput | EquipmentCreateOrConnectWithoutRoomsInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutRoomsInput | EquipmentUpsertWithWhereUniqueWithoutRoomsInput[]
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutRoomsInput | EquipmentUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutRoomsInput | EquipmentUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRoomInput | ReservationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRoomInput | ReservationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRoomInput | ReservationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type GuestHouseCreateNestedOneWithoutContactsInput = {
    create?: XOR<GuestHouseCreateWithoutContactsInput, GuestHouseUncheckedCreateWithoutContactsInput>
    connectOrCreate?: GuestHouseCreateOrConnectWithoutContactsInput
    connect?: GuestHouseWhereUniqueInput
  }

  export type EnumContactTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContactType
  }

  export type GuestHouseUpdateOneWithoutContactsNestedInput = {
    create?: XOR<GuestHouseCreateWithoutContactsInput, GuestHouseUncheckedCreateWithoutContactsInput>
    connectOrCreate?: GuestHouseCreateOrConnectWithoutContactsInput
    upsert?: GuestHouseUpsertWithoutContactsInput
    disconnect?: GuestHouseWhereInput | boolean
    delete?: GuestHouseWhereInput | boolean
    connect?: GuestHouseWhereUniqueInput
    update?: XOR<XOR<GuestHouseUpdateToOneWithWhereWithoutContactsInput, GuestHouseUpdateWithoutContactsInput>, GuestHouseUncheckedUpdateWithoutContactsInput>
  }

  export type GuestHouseCreateNestedOneWithoutImagesInput = {
    create?: XOR<GuestHouseCreateWithoutImagesInput, GuestHouseUncheckedCreateWithoutImagesInput>
    connectOrCreate?: GuestHouseCreateOrConnectWithoutImagesInput
    connect?: GuestHouseWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutImagesInput = {
    create?: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutImagesInput
    connect?: RoomWhereUniqueInput
  }

  export type GuestHouseUpdateOneWithoutImagesNestedInput = {
    create?: XOR<GuestHouseCreateWithoutImagesInput, GuestHouseUncheckedCreateWithoutImagesInput>
    connectOrCreate?: GuestHouseCreateOrConnectWithoutImagesInput
    upsert?: GuestHouseUpsertWithoutImagesInput
    disconnect?: GuestHouseWhereInput | boolean
    delete?: GuestHouseWhereInput | boolean
    connect?: GuestHouseWhereUniqueInput
    update?: XOR<XOR<GuestHouseUpdateToOneWithWhereWithoutImagesInput, GuestHouseUpdateWithoutImagesInput>, GuestHouseUncheckedUpdateWithoutImagesInput>
  }

  export type RoomUpdateOneWithoutImagesNestedInput = {
    create?: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutImagesInput
    upsert?: RoomUpsertWithoutImagesInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutImagesInput, RoomUpdateWithoutImagesInput>, RoomUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutGuestsInput = {
    create?: XOR<UserCreateWithoutGuestsInput, UserUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuestsInput
    connect?: UserWhereUniqueInput
  }

  export type MembreCreateNestedManyWithoutGuestInput = {
    create?: XOR<MembreCreateWithoutGuestInput, MembreUncheckedCreateWithoutGuestInput> | MembreCreateWithoutGuestInput[] | MembreUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutGuestInput | MembreCreateOrConnectWithoutGuestInput[]
    createMany?: MembreCreateManyGuestInputEnvelope
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutGuestsInput = {
    create?: XOR<ReservationCreateWithoutGuestsInput, ReservationUncheckedCreateWithoutGuestsInput> | ReservationCreateWithoutGuestsInput[] | ReservationUncheckedCreateWithoutGuestsInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestsInput | ReservationCreateOrConnectWithoutGuestsInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type MembreUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<MembreCreateWithoutGuestInput, MembreUncheckedCreateWithoutGuestInput> | MembreCreateWithoutGuestInput[] | MembreUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutGuestInput | MembreCreateOrConnectWithoutGuestInput[]
    createMany?: MembreCreateManyGuestInputEnvelope
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutGuestsInput = {
    create?: XOR<ReservationCreateWithoutGuestsInput, ReservationUncheckedCreateWithoutGuestsInput> | ReservationCreateWithoutGuestsInput[] | ReservationUncheckedCreateWithoutGuestsInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestsInput | ReservationCreateOrConnectWithoutGuestsInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumRelationshipFieldUpdateOperationsInput = {
    set?: $Enums.Relationship
  }

  export type UserUpdateOneRequiredWithoutGuestsNestedInput = {
    create?: XOR<UserCreateWithoutGuestsInput, UserUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuestsInput
    upsert?: UserUpsertWithoutGuestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuestsInput, UserUpdateWithoutGuestsInput>, UserUncheckedUpdateWithoutGuestsInput>
  }

  export type MembreUpdateManyWithoutGuestNestedInput = {
    create?: XOR<MembreCreateWithoutGuestInput, MembreUncheckedCreateWithoutGuestInput> | MembreCreateWithoutGuestInput[] | MembreUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutGuestInput | MembreCreateOrConnectWithoutGuestInput[]
    upsert?: MembreUpsertWithWhereUniqueWithoutGuestInput | MembreUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: MembreCreateManyGuestInputEnvelope
    set?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    disconnect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    delete?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    update?: MembreUpdateWithWhereUniqueWithoutGuestInput | MembreUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: MembreUpdateManyWithWhereWithoutGuestInput | MembreUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: MembreScalarWhereInput | MembreScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutGuestsNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestsInput, ReservationUncheckedCreateWithoutGuestsInput> | ReservationCreateWithoutGuestsInput[] | ReservationUncheckedCreateWithoutGuestsInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestsInput | ReservationCreateOrConnectWithoutGuestsInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestsInput | ReservationUpsertWithWhereUniqueWithoutGuestsInput[]
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestsInput | ReservationUpdateWithWhereUniqueWithoutGuestsInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestsInput | ReservationUpdateManyWithWhereWithoutGuestsInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type MembreUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<MembreCreateWithoutGuestInput, MembreUncheckedCreateWithoutGuestInput> | MembreCreateWithoutGuestInput[] | MembreUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutGuestInput | MembreCreateOrConnectWithoutGuestInput[]
    upsert?: MembreUpsertWithWhereUniqueWithoutGuestInput | MembreUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: MembreCreateManyGuestInputEnvelope
    set?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    disconnect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    delete?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    update?: MembreUpdateWithWhereUniqueWithoutGuestInput | MembreUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: MembreUpdateManyWithWhereWithoutGuestInput | MembreUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: MembreScalarWhereInput | MembreScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutGuestsNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestsInput, ReservationUncheckedCreateWithoutGuestsInput> | ReservationCreateWithoutGuestsInput[] | ReservationUncheckedCreateWithoutGuestsInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestsInput | ReservationCreateOrConnectWithoutGuestsInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestsInput | ReservationUpsertWithWhereUniqueWithoutGuestsInput[]
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestsInput | ReservationUpdateWithWhereUniqueWithoutGuestsInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestsInput | ReservationUpdateManyWithWhereWithoutGuestsInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type GuestCreateNestedOneWithoutMembreInput = {
    create?: XOR<GuestCreateWithoutMembreInput, GuestUncheckedCreateWithoutMembreInput>
    connectOrCreate?: GuestCreateOrConnectWithoutMembreInput
    connect?: GuestWhereUniqueInput
  }

  export type GuestUpdateOneRequiredWithoutMembreNestedInput = {
    create?: XOR<GuestCreateWithoutMembreInput, GuestUncheckedCreateWithoutMembreInput>
    connectOrCreate?: GuestCreateOrConnectWithoutMembreInput
    upsert?: GuestUpsertWithoutMembreInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutMembreInput, GuestUpdateWithoutMembreInput>, GuestUncheckedUpdateWithoutMembreInput>
  }

  export type RoomCreateNestedOneWithoutReservationsInput = {
    create?: XOR<RoomCreateWithoutReservationsInput, RoomUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type GuestCreateNestedManyWithoutReservationsInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput> | GuestCreateWithoutReservationsInput[] | GuestUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput | GuestCreateOrConnectWithoutReservationsInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type GuestUncheckedCreateNestedManyWithoutReservationsInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput> | GuestCreateWithoutReservationsInput[] | GuestUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput | GuestCreateOrConnectWithoutReservationsInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type RoomUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<RoomCreateWithoutReservationsInput, RoomUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationsInput
    upsert?: RoomUpsertWithoutReservationsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutReservationsInput, RoomUpdateWithoutReservationsInput>, RoomUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type GuestUpdateManyWithoutReservationsNestedInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput> | GuestCreateWithoutReservationsInput[] | GuestUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput | GuestCreateOrConnectWithoutReservationsInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutReservationsInput | GuestUpsertWithWhereUniqueWithoutReservationsInput[]
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutReservationsInput | GuestUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutReservationsInput | GuestUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type GuestUncheckedUpdateManyWithoutReservationsNestedInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput> | GuestCreateWithoutReservationsInput[] | GuestUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput | GuestCreateOrConnectWithoutReservationsInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutReservationsInput | GuestUpsertWithWhereUniqueWithoutReservationsInput[]
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutReservationsInput | GuestUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutReservationsInput | GuestUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRoomTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeFilter<$PrismaModel> | $Enums.RoomType
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoomType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomTypeFilter<$PrismaModel>
    _max?: NestedEnumRoomTypeFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type NestedEnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumRelationshipFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    notIn?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipFilter<$PrismaModel> | $Enums.Relationship
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    notIn?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipWithAggregatesFilter<$PrismaModel> | $Enums.Relationship
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipFilter<$PrismaModel>
    _max?: NestedEnumRelationshipFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type RoomCreateWithoutOwnerInput = {
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutRoomInput
    equipment?: EquipmentCreateNestedManyWithoutRoomsInput
    guestHouse?: GuestHouseCreateNestedOneWithoutRoomsInput
    reservations?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutOwnerInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    guestHouseId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutRoomInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutRoomsInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
  }

  export type RoomCreateManyOwnerInputEnvelope = {
    data: RoomCreateManyOwnerInput | RoomCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type GuestHouseCreateWithoutOwnerInput = {
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutGuestHouseInput
    images?: ImageCreateNestedManyWithoutGuestHouseInput
    contacts?: ContactCreateNestedManyWithoutGuestHouseInput
  }

  export type GuestHouseUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutGuestHouseInput
    images?: ImageUncheckedCreateNestedManyWithoutGuestHouseInput
    contacts?: ContactUncheckedCreateNestedManyWithoutGuestHouseInput
  }

  export type GuestHouseCreateOrConnectWithoutOwnerInput = {
    where: GuestHouseWhereUniqueInput
    create: XOR<GuestHouseCreateWithoutOwnerInput, GuestHouseUncheckedCreateWithoutOwnerInput>
  }

  export type GuestHouseCreateManyOwnerInputEnvelope = {
    data: GuestHouseCreateManyOwnerInput | GuestHouseCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutClientInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutReservationsInput
    guests?: GuestCreateNestedManyWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutClientInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    roomId: number
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type ReservationCreateOrConnectWithoutClientInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput>
  }

  export type ReservationCreateManyClientInputEnvelope = {
    data: ReservationCreateManyClientInput | ReservationCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type GuestCreateWithoutAddedByInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    membre?: MembreCreateNestedManyWithoutGuestInput
    reservations?: ReservationCreateNestedManyWithoutGuestsInput
  }

  export type GuestUncheckedCreateWithoutAddedByInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    membre?: MembreUncheckedCreateNestedManyWithoutGuestInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestsInput
  }

  export type GuestCreateOrConnectWithoutAddedByInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutAddedByInput, GuestUncheckedCreateWithoutAddedByInput>
  }

  export type GuestCreateManyAddedByInputEnvelope = {
    data: GuestCreateManyAddedByInput | GuestCreateManyAddedByInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutOwnerInput, RoomUncheckedUpdateWithoutOwnerInput>
    create: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutOwnerInput, RoomUncheckedUpdateWithoutOwnerInput>
  }

  export type RoomUpdateManyWithWhereWithoutOwnerInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    roomNumber?: IntFilter<"Room"> | number
    type?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    pricePerNight?: FloatFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    capacity?: IntFilter<"Room"> | number
    hasBalcony?: BoolFilter<"Room"> | boolean
    description?: StringNullableFilter<"Room"> | string | null
    guestHouseId?: IntNullableFilter<"Room"> | number | null
    isActive?: BoolFilter<"Room"> | boolean
    ownerId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type GuestHouseUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GuestHouseWhereUniqueInput
    update: XOR<GuestHouseUpdateWithoutOwnerInput, GuestHouseUncheckedUpdateWithoutOwnerInput>
    create: XOR<GuestHouseCreateWithoutOwnerInput, GuestHouseUncheckedCreateWithoutOwnerInput>
  }

  export type GuestHouseUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GuestHouseWhereUniqueInput
    data: XOR<GuestHouseUpdateWithoutOwnerInput, GuestHouseUncheckedUpdateWithoutOwnerInput>
  }

  export type GuestHouseUpdateManyWithWhereWithoutOwnerInput = {
    where: GuestHouseScalarWhereInput
    data: XOR<GuestHouseUpdateManyMutationInput, GuestHouseUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GuestHouseScalarWhereInput = {
    AND?: GuestHouseScalarWhereInput | GuestHouseScalarWhereInput[]
    OR?: GuestHouseScalarWhereInput[]
    NOT?: GuestHouseScalarWhereInput | GuestHouseScalarWhereInput[]
    id?: IntFilter<"GuestHouse"> | number
    name?: StringFilter<"GuestHouse"> | string
    address?: StringFilter<"GuestHouse"> | string
    region?: StringFilter<"GuestHouse"> | string
    description?: StringNullableFilter<"GuestHouse"> | string | null
    rating?: FloatFilter<"GuestHouse"> | number
    hasParking?: BoolFilter<"GuestHouse"> | boolean
    isPetFriendly?: BoolFilter<"GuestHouse"> | boolean
    ownerId?: StringFilter<"GuestHouse"> | string
    createdAt?: DateTimeFilter<"GuestHouse"> | Date | string
    updatedAt?: DateTimeFilter<"GuestHouse"> | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutClientInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutClientInput, ReservationUncheckedUpdateWithoutClientInput>
    create: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutClientInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutClientInput, ReservationUncheckedUpdateWithoutClientInput>
  }

  export type ReservationUpdateManyWithWhereWithoutClientInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutClientInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    totalPrice?: FloatFilter<"Reservation"> | number
    roomId?: IntFilter<"Reservation"> | number
    clientId?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type GuestUpsertWithWhereUniqueWithoutAddedByInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUpdateWithoutAddedByInput, GuestUncheckedUpdateWithoutAddedByInput>
    create: XOR<GuestCreateWithoutAddedByInput, GuestUncheckedCreateWithoutAddedByInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutAddedByInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUpdateWithoutAddedByInput, GuestUncheckedUpdateWithoutAddedByInput>
  }

  export type GuestUpdateManyWithWhereWithoutAddedByInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyWithoutAddedByInput>
  }

  export type GuestScalarWhereInput = {
    AND?: GuestScalarWhereInput | GuestScalarWhereInput[]
    OR?: GuestScalarWhereInput[]
    NOT?: GuestScalarWhereInput | GuestScalarWhereInput[]
    id?: StringFilter<"Guest"> | string
    cin?: IntFilter<"Guest"> | number
    numPassport?: IntNullableFilter<"Guest"> | number | null
    fullName?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    gender?: EnumGenderFilter<"Guest"> | $Enums.Gender
    age?: IntNullableFilter<"Guest"> | number | null
    relationship?: EnumRelationshipFilter<"Guest"> | $Enums.Relationship
    addedById?: StringFilter<"Guest"> | string
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
  }

  export type RoomCreateWithoutEquipmentInput = {
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutRoomInput
    guestHouse?: GuestHouseCreateNestedOneWithoutRoomsInput
    owner: UserCreateNestedOneWithoutRoomsInput
    reservations?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutEquipmentInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    guestHouseId?: number | null
    isActive?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutRoomInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutEquipmentInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutEquipmentInput, RoomUncheckedCreateWithoutEquipmentInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutEquipmentInput, RoomUncheckedUpdateWithoutEquipmentInput>
    create: XOR<RoomCreateWithoutEquipmentInput, RoomUncheckedCreateWithoutEquipmentInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutEquipmentInput, RoomUncheckedUpdateWithoutEquipmentInput>
  }

  export type RoomUpdateManyWithWhereWithoutEquipmentInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type RoomCreateWithoutGuestHouseInput = {
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutRoomInput
    equipment?: EquipmentCreateNestedManyWithoutRoomsInput
    owner: UserCreateNestedOneWithoutRoomsInput
    reservations?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutGuestHouseInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    isActive?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutRoomInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutRoomsInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutGuestHouseInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutGuestHouseInput, RoomUncheckedCreateWithoutGuestHouseInput>
  }

  export type RoomCreateManyGuestHouseInputEnvelope = {
    data: RoomCreateManyGuestHouseInput | RoomCreateManyGuestHouseInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutGuestHouseInput = {
    url: string
    createdAt?: Date | string
    room?: RoomCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutGuestHouseInput = {
    id?: number
    url: string
    roomId?: number | null
    createdAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutGuestHouseInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutGuestHouseInput, ImageUncheckedCreateWithoutGuestHouseInput>
  }

  export type ImageCreateManyGuestHouseInputEnvelope = {
    data: ImageCreateManyGuestHouseInput | ImageCreateManyGuestHouseInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutGuestHouseInput = {
    type: $Enums.ContactType
    value: string
    createdAt?: Date | string
  }

  export type ContactUncheckedCreateWithoutGuestHouseInput = {
    id?: number
    type: $Enums.ContactType
    value: string
    createdAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutGuestHouseInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutGuestHouseInput, ContactUncheckedCreateWithoutGuestHouseInput>
  }

  export type ContactCreateManyGuestHouseInputEnvelope = {
    data: ContactCreateManyGuestHouseInput | ContactCreateManyGuestHouseInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGuestHousesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutOwnerInput
    reservations?: ReservationCreateNestedManyWithoutClientInput
    guests?: GuestCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutGuestHousesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutClientInput
    guests?: GuestUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutGuestHousesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuestHousesInput, UserUncheckedCreateWithoutGuestHousesInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutGuestHouseInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutGuestHouseInput, RoomUncheckedUpdateWithoutGuestHouseInput>
    create: XOR<RoomCreateWithoutGuestHouseInput, RoomUncheckedCreateWithoutGuestHouseInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutGuestHouseInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutGuestHouseInput, RoomUncheckedUpdateWithoutGuestHouseInput>
  }

  export type RoomUpdateManyWithWhereWithoutGuestHouseInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutGuestHouseInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutGuestHouseInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutGuestHouseInput, ImageUncheckedUpdateWithoutGuestHouseInput>
    create: XOR<ImageCreateWithoutGuestHouseInput, ImageUncheckedCreateWithoutGuestHouseInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutGuestHouseInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutGuestHouseInput, ImageUncheckedUpdateWithoutGuestHouseInput>
  }

  export type ImageUpdateManyWithWhereWithoutGuestHouseInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutGuestHouseInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    guestHouseId?: IntNullableFilter<"Image"> | number | null
    roomId?: IntNullableFilter<"Image"> | number | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type ContactUpsertWithWhereUniqueWithoutGuestHouseInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutGuestHouseInput, ContactUncheckedUpdateWithoutGuestHouseInput>
    create: XOR<ContactCreateWithoutGuestHouseInput, ContactUncheckedCreateWithoutGuestHouseInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutGuestHouseInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutGuestHouseInput, ContactUncheckedUpdateWithoutGuestHouseInput>
  }

  export type ContactUpdateManyWithWhereWithoutGuestHouseInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutGuestHouseInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: IntFilter<"Contact"> | number
    type?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    value?: StringFilter<"Contact"> | string
    guestHouseId?: IntFilter<"Contact"> | number
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type UserUpsertWithoutGuestHousesInput = {
    update: XOR<UserUpdateWithoutGuestHousesInput, UserUncheckedUpdateWithoutGuestHousesInput>
    create: XOR<UserCreateWithoutGuestHousesInput, UserUncheckedCreateWithoutGuestHousesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuestHousesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuestHousesInput, UserUncheckedUpdateWithoutGuestHousesInput>
  }

  export type UserUpdateWithoutGuestHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUpdateManyWithoutClientNestedInput
    guests?: GuestUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutGuestHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutClientNestedInput
    guests?: GuestUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type ImageCreateWithoutRoomInput = {
    url: string
    createdAt?: Date | string
    guestHouse?: GuestHouseCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutRoomInput = {
    id?: number
    url: string
    guestHouseId?: number | null
    createdAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutRoomInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutRoomInput, ImageUncheckedCreateWithoutRoomInput>
  }

  export type ImageCreateManyRoomInputEnvelope = {
    data: ImageCreateManyRoomInput | ImageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentCreateWithoutRoomsInput = {
    name: string
    icon: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type EquipmentUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
    icon: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutRoomsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutRoomsInput, EquipmentUncheckedCreateWithoutRoomsInput>
  }

  export type GuestHouseCreateWithoutRoomsInput = {
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutGuestHouseInput
    contacts?: ContactCreateNestedManyWithoutGuestHouseInput
    owner: UserCreateNestedOneWithoutGuestHousesInput
  }

  export type GuestHouseUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutGuestHouseInput
    contacts?: ContactUncheckedCreateNestedManyWithoutGuestHouseInput
  }

  export type GuestHouseCreateOrConnectWithoutRoomsInput = {
    where: GuestHouseWhereUniqueInput
    create: XOR<GuestHouseCreateWithoutRoomsInput, GuestHouseUncheckedCreateWithoutRoomsInput>
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    guestHouses?: GuestHouseCreateNestedManyWithoutOwnerInput
    reservations?: ReservationCreateNestedManyWithoutClientInput
    guests?: GuestCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    guestHouses?: GuestHouseUncheckedCreateNestedManyWithoutOwnerInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutClientInput
    guests?: GuestUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type ReservationCreateWithoutRoomInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutReservationsInput
    guests?: GuestCreateNestedManyWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutRoomInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    clientId: string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type ReservationCreateOrConnectWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput>
  }

  export type ReservationCreateManyRoomInputEnvelope = {
    data: ReservationCreateManyRoomInput | ReservationCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutRoomInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutRoomInput, ImageUncheckedUpdateWithoutRoomInput>
    create: XOR<ImageCreateWithoutRoomInput, ImageUncheckedCreateWithoutRoomInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutRoomInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutRoomInput, ImageUncheckedUpdateWithoutRoomInput>
  }

  export type ImageUpdateManyWithWhereWithoutRoomInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutRoomInput>
  }

  export type EquipmentUpsertWithWhereUniqueWithoutRoomsInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutRoomsInput, EquipmentUncheckedUpdateWithoutRoomsInput>
    create: XOR<EquipmentCreateWithoutRoomsInput, EquipmentUncheckedCreateWithoutRoomsInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutRoomsInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutRoomsInput, EquipmentUncheckedUpdateWithoutRoomsInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutRoomsInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutRoomsInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: IntFilter<"Equipment"> | number
    name?: StringFilter<"Equipment"> | string
    icon?: StringFilter<"Equipment"> | string
    description?: StringNullableFilter<"Equipment"> | string | null
    isActive?: BoolFilter<"Equipment"> | boolean
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
  }

  export type GuestHouseUpsertWithoutRoomsInput = {
    update: XOR<GuestHouseUpdateWithoutRoomsInput, GuestHouseUncheckedUpdateWithoutRoomsInput>
    create: XOR<GuestHouseCreateWithoutRoomsInput, GuestHouseUncheckedCreateWithoutRoomsInput>
    where?: GuestHouseWhereInput
  }

  export type GuestHouseUpdateToOneWithWhereWithoutRoomsInput = {
    where?: GuestHouseWhereInput
    data: XOR<GuestHouseUpdateWithoutRoomsInput, GuestHouseUncheckedUpdateWithoutRoomsInput>
  }

  export type GuestHouseUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutGuestHouseNestedInput
    contacts?: ContactUpdateManyWithoutGuestHouseNestedInput
    owner?: UserUpdateOneRequiredWithoutGuestHousesNestedInput
  }

  export type GuestHouseUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutGuestHouseNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutGuestHouseNestedInput
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestHouses?: GuestHouseUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUpdateManyWithoutClientNestedInput
    guests?: GuestUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestHouses?: GuestHouseUncheckedUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutClientNestedInput
    guests?: GuestUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutRoomInput, ReservationUncheckedUpdateWithoutRoomInput>
    create: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutRoomInput, ReservationUncheckedUpdateWithoutRoomInput>
  }

  export type ReservationUpdateManyWithWhereWithoutRoomInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutRoomInput>
  }

  export type GuestHouseCreateWithoutContactsInput = {
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutGuestHouseInput
    images?: ImageCreateNestedManyWithoutGuestHouseInput
    owner: UserCreateNestedOneWithoutGuestHousesInput
  }

  export type GuestHouseUncheckedCreateWithoutContactsInput = {
    id?: number
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutGuestHouseInput
    images?: ImageUncheckedCreateNestedManyWithoutGuestHouseInput
  }

  export type GuestHouseCreateOrConnectWithoutContactsInput = {
    where: GuestHouseWhereUniqueInput
    create: XOR<GuestHouseCreateWithoutContactsInput, GuestHouseUncheckedCreateWithoutContactsInput>
  }

  export type GuestHouseUpsertWithoutContactsInput = {
    update: XOR<GuestHouseUpdateWithoutContactsInput, GuestHouseUncheckedUpdateWithoutContactsInput>
    create: XOR<GuestHouseCreateWithoutContactsInput, GuestHouseUncheckedCreateWithoutContactsInput>
    where?: GuestHouseWhereInput
  }

  export type GuestHouseUpdateToOneWithWhereWithoutContactsInput = {
    where?: GuestHouseWhereInput
    data: XOR<GuestHouseUpdateWithoutContactsInput, GuestHouseUncheckedUpdateWithoutContactsInput>
  }

  export type GuestHouseUpdateWithoutContactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutGuestHouseNestedInput
    images?: ImageUpdateManyWithoutGuestHouseNestedInput
    owner?: UserUpdateOneRequiredWithoutGuestHousesNestedInput
  }

  export type GuestHouseUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutGuestHouseNestedInput
    images?: ImageUncheckedUpdateManyWithoutGuestHouseNestedInput
  }

  export type GuestHouseCreateWithoutImagesInput = {
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutGuestHouseInput
    contacts?: ContactCreateNestedManyWithoutGuestHouseInput
    owner: UserCreateNestedOneWithoutGuestHousesInput
  }

  export type GuestHouseUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutGuestHouseInput
    contacts?: ContactUncheckedCreateNestedManyWithoutGuestHouseInput
  }

  export type GuestHouseCreateOrConnectWithoutImagesInput = {
    where: GuestHouseWhereUniqueInput
    create: XOR<GuestHouseCreateWithoutImagesInput, GuestHouseUncheckedCreateWithoutImagesInput>
  }

  export type RoomCreateWithoutImagesInput = {
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment?: EquipmentCreateNestedManyWithoutRoomsInput
    guestHouse?: GuestHouseCreateNestedOneWithoutRoomsInput
    owner: UserCreateNestedOneWithoutRoomsInput
    reservations?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutImagesInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    guestHouseId?: number | null
    isActive?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment?: EquipmentUncheckedCreateNestedManyWithoutRoomsInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutImagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
  }

  export type GuestHouseUpsertWithoutImagesInput = {
    update: XOR<GuestHouseUpdateWithoutImagesInput, GuestHouseUncheckedUpdateWithoutImagesInput>
    create: XOR<GuestHouseCreateWithoutImagesInput, GuestHouseUncheckedCreateWithoutImagesInput>
    where?: GuestHouseWhereInput
  }

  export type GuestHouseUpdateToOneWithWhereWithoutImagesInput = {
    where?: GuestHouseWhereInput
    data: XOR<GuestHouseUpdateWithoutImagesInput, GuestHouseUncheckedUpdateWithoutImagesInput>
  }

  export type GuestHouseUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutGuestHouseNestedInput
    contacts?: ContactUpdateManyWithoutGuestHouseNestedInput
    owner?: UserUpdateOneRequiredWithoutGuestHousesNestedInput
  }

  export type GuestHouseUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutGuestHouseNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutGuestHouseNestedInput
  }

  export type RoomUpsertWithoutImagesInput = {
    update: XOR<RoomUpdateWithoutImagesInput, RoomUncheckedUpdateWithoutImagesInput>
    create: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutImagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutImagesInput, RoomUncheckedUpdateWithoutImagesInput>
  }

  export type RoomUpdateWithoutImagesInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateManyWithoutRoomsNestedInput
    guestHouse?: GuestHouseUpdateOneWithoutRoomsNestedInput
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
    reservations?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUncheckedUpdateManyWithoutRoomsNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutGuestsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutOwnerInput
    guestHouses?: GuestHouseCreateNestedManyWithoutOwnerInput
    reservations?: ReservationCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutGuestsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    guestHouses?: GuestHouseUncheckedCreateNestedManyWithoutOwnerInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutGuestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuestsInput, UserUncheckedCreateWithoutGuestsInput>
  }

  export type MembreCreateWithoutGuestInput = {
    fullName: string
    gender: $Enums.Gender
    relationship: $Enums.Relationship
    isManier?: boolean
    createdAt?: Date | string
  }

  export type MembreUncheckedCreateWithoutGuestInput = {
    id?: number
    fullName: string
    gender: $Enums.Gender
    relationship: $Enums.Relationship
    isManier?: boolean
    createdAt?: Date | string
  }

  export type MembreCreateOrConnectWithoutGuestInput = {
    where: MembreWhereUniqueInput
    create: XOR<MembreCreateWithoutGuestInput, MembreUncheckedCreateWithoutGuestInput>
  }

  export type MembreCreateManyGuestInputEnvelope = {
    data: MembreCreateManyGuestInput | MembreCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutGuestsInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutReservationsInput
    client: UserCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutGuestsInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    roomId: number
    clientId: string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutGuestsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutGuestsInput, ReservationUncheckedCreateWithoutGuestsInput>
  }

  export type UserUpsertWithoutGuestsInput = {
    update: XOR<UserUpdateWithoutGuestsInput, UserUncheckedUpdateWithoutGuestsInput>
    create: XOR<UserCreateWithoutGuestsInput, UserUncheckedCreateWithoutGuestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuestsInput, UserUncheckedUpdateWithoutGuestsInput>
  }

  export type UserUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutOwnerNestedInput
    guestHouses?: GuestHouseUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    guestHouses?: GuestHouseUncheckedUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutClientNestedInput
  }

  export type MembreUpsertWithWhereUniqueWithoutGuestInput = {
    where: MembreWhereUniqueInput
    update: XOR<MembreUpdateWithoutGuestInput, MembreUncheckedUpdateWithoutGuestInput>
    create: XOR<MembreCreateWithoutGuestInput, MembreUncheckedCreateWithoutGuestInput>
  }

  export type MembreUpdateWithWhereUniqueWithoutGuestInput = {
    where: MembreWhereUniqueInput
    data: XOR<MembreUpdateWithoutGuestInput, MembreUncheckedUpdateWithoutGuestInput>
  }

  export type MembreUpdateManyWithWhereWithoutGuestInput = {
    where: MembreScalarWhereInput
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyWithoutGuestInput>
  }

  export type MembreScalarWhereInput = {
    AND?: MembreScalarWhereInput | MembreScalarWhereInput[]
    OR?: MembreScalarWhereInput[]
    NOT?: MembreScalarWhereInput | MembreScalarWhereInput[]
    id?: IntFilter<"Membre"> | number
    fullName?: StringFilter<"Membre"> | string
    gender?: EnumGenderFilter<"Membre"> | $Enums.Gender
    relationship?: EnumRelationshipFilter<"Membre"> | $Enums.Relationship
    isManier?: BoolFilter<"Membre"> | boolean
    guestId?: StringFilter<"Membre"> | string
    createdAt?: DateTimeFilter<"Membre"> | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutGuestsInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutGuestsInput, ReservationUncheckedUpdateWithoutGuestsInput>
    create: XOR<ReservationCreateWithoutGuestsInput, ReservationUncheckedCreateWithoutGuestsInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutGuestsInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutGuestsInput, ReservationUncheckedUpdateWithoutGuestsInput>
  }

  export type ReservationUpdateManyWithWhereWithoutGuestsInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutGuestsInput>
  }

  export type GuestCreateWithoutMembreInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutGuestsInput
    reservations?: ReservationCreateNestedManyWithoutGuestsInput
  }

  export type GuestUncheckedCreateWithoutMembreInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    addedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestsInput
  }

  export type GuestCreateOrConnectWithoutMembreInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutMembreInput, GuestUncheckedCreateWithoutMembreInput>
  }

  export type GuestUpsertWithoutMembreInput = {
    update: XOR<GuestUpdateWithoutMembreInput, GuestUncheckedUpdateWithoutMembreInput>
    create: XOR<GuestCreateWithoutMembreInput, GuestUncheckedCreateWithoutMembreInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutMembreInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutMembreInput, GuestUncheckedUpdateWithoutMembreInput>
  }

  export type GuestUpdateWithoutMembreInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutGuestsNestedInput
    reservations?: ReservationUpdateManyWithoutGuestsNestedInput
  }

  export type GuestUncheckedUpdateWithoutMembreInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutGuestsNestedInput
  }

  export type RoomCreateWithoutReservationsInput = {
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutRoomInput
    equipment?: EquipmentCreateNestedManyWithoutRoomsInput
    guestHouse?: GuestHouseCreateNestedOneWithoutRoomsInput
    owner: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutReservationsInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    guestHouseId?: number | null
    isActive?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutRoomInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type RoomCreateOrConnectWithoutReservationsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutReservationsInput, RoomUncheckedCreateWithoutReservationsInput>
  }

  export type UserCreateWithoutReservationsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutOwnerInput
    guestHouses?: GuestHouseCreateNestedManyWithoutOwnerInput
    guests?: GuestCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    guestHouses?: GuestHouseUncheckedCreateNestedManyWithoutOwnerInput
    guests?: GuestUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type GuestCreateWithoutReservationsInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutGuestsInput
    membre?: MembreCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutReservationsInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    addedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membre?: MembreUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutReservationsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
  }

  export type RoomUpsertWithoutReservationsInput = {
    update: XOR<RoomUpdateWithoutReservationsInput, RoomUncheckedUpdateWithoutReservationsInput>
    create: XOR<RoomCreateWithoutReservationsInput, RoomUncheckedCreateWithoutReservationsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutReservationsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutReservationsInput, RoomUncheckedUpdateWithoutReservationsInput>
  }

  export type RoomUpdateWithoutReservationsInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutRoomNestedInput
    equipment?: EquipmentUpdateManyWithoutRoomsNestedInput
    guestHouse?: GuestHouseUpdateOneWithoutRoomsNestedInput
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutRoomNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutOwnerNestedInput
    guestHouses?: GuestHouseUpdateManyWithoutOwnerNestedInput
    guests?: GuestUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    guestHouses?: GuestHouseUncheckedUpdateManyWithoutOwnerNestedInput
    guests?: GuestUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type GuestUpsertWithWhereUniqueWithoutReservationsInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUpdateWithoutReservationsInput, GuestUncheckedUpdateWithoutReservationsInput>
    create: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutReservationsInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUpdateWithoutReservationsInput, GuestUncheckedUpdateWithoutReservationsInput>
  }

  export type GuestUpdateManyWithWhereWithoutReservationsInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyWithoutReservationsInput>
  }

  export type RoomCreateManyOwnerInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    guestHouseId?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestHouseCreateManyOwnerInput = {
    id?: number
    name: string
    address: string
    region: string
    description?: string | null
    rating?: number
    hasParking?: boolean
    isPetFriendly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateManyClientInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    roomId: number
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestCreateManyAddedByInput = {
    id?: string
    cin: number
    numPassport?: number | null
    fullName: string
    email?: string | null
    phone?: string | null
    gender: $Enums.Gender
    age?: number | null
    relationship?: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutOwnerInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutRoomNestedInput
    equipment?: EquipmentUpdateManyWithoutRoomsNestedInput
    guestHouse?: GuestHouseUpdateOneWithoutRoomsNestedInput
    reservations?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutRoomNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutRoomsNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestHouseUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutGuestHouseNestedInput
    images?: ImageUpdateManyWithoutGuestHouseNestedInput
    contacts?: ContactUpdateManyWithoutGuestHouseNestedInput
  }

  export type GuestHouseUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutGuestHouseNestedInput
    images?: ImageUncheckedUpdateManyWithoutGuestHouseNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutGuestHouseNestedInput
  }

  export type GuestHouseUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    hasParking?: BoolFieldUpdateOperationsInput | boolean
    isPetFriendly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutReservationsNestedInput
    guests?: GuestUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membre?: MembreUpdateManyWithoutGuestNestedInput
    reservations?: ReservationUpdateManyWithoutGuestsNestedInput
  }

  export type GuestUncheckedUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membre?: MembreUncheckedUpdateManyWithoutGuestNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutGuestsNestedInput
  }

  export type GuestUncheckedUpdateManyWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutEquipmentInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutRoomNestedInput
    guestHouse?: GuestHouseUpdateOneWithoutRoomsNestedInput
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
    reservations?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutRoomNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyGuestHouseInput = {
    id?: number
    roomNumber: number
    type: $Enums.RoomType
    pricePerNight: number
    status: $Enums.RoomStatus
    capacity: number
    hasBalcony?: boolean
    description?: string | null
    isActive?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateManyGuestHouseInput = {
    id?: number
    url: string
    roomId?: number | null
    createdAt?: Date | string
  }

  export type ContactCreateManyGuestHouseInput = {
    id?: number
    type: $Enums.ContactType
    value: string
    createdAt?: Date | string
  }

  export type RoomUpdateWithoutGuestHouseInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutRoomNestedInput
    equipment?: EquipmentUpdateManyWithoutRoomsNestedInput
    owner?: UserUpdateOneRequiredWithoutRoomsNestedInput
    reservations?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutGuestHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutRoomNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutRoomsNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutGuestHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    pricePerNight?: FloatFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    capacity?: IntFieldUpdateOperationsInput | number
    hasBalcony?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutGuestHouseInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutGuestHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutGuestHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutGuestHouseInput = {
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateWithoutGuestHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyWithoutGuestHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyRoomInput = {
    id?: number
    url: string
    guestHouseId?: number | null
    createdAt?: Date | string
  }

  export type ReservationCreateManyRoomInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    clientId: string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateWithoutRoomInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestHouse?: GuestHouseUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    guestHouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutReservationsNestedInput
    guests?: GuestUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreCreateManyGuestInput = {
    id?: number
    fullName: string
    gender: $Enums.Gender
    relationship: $Enums.Relationship
    isManier?: boolean
    createdAt?: Date | string
  }

  export type MembreUpdateWithoutGuestInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    isManier?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreUncheckedUpdateWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    isManier?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembreUncheckedUpdateManyWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    isManier?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutReservationsNestedInput
    client?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutGuestsNestedInput
    membre?: MembreUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membre?: MembreUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateManyWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cin?: IntFieldUpdateOperationsInput | number
    numPassport?: NullableIntFieldUpdateOperationsInput | number | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: NullableIntFieldUpdateOperationsInput | number | null
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}