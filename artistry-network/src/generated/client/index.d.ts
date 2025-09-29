
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Artwork
 * 
 */
export type Artwork = $Result.DefaultSelection<Prisma.$ArtworkPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Hashtag
 * 
 */
export type Hashtag = $Result.DefaultSelection<Prisma.$HashtagPayload>
/**
 * Model ArtworkHashtag
 * 
 */
export type ArtworkHashtag = $Result.DefaultSelection<Prisma.$ArtworkHashtagPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model ReactionType
 * 
 */
export type ReactionType = $Result.DefaultSelection<Prisma.$ReactionTypePayload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model Follows
 * 
 */
export type Follows = $Result.DefaultSelection<Prisma.$FollowsPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artwork`: Exposes CRUD operations for the **Artwork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artworks
    * const artworks = await prisma.artwork.findMany()
    * ```
    */
  get artwork(): Prisma.ArtworkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **Hashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtag.findMany()
    * ```
    */
  get hashtag(): Prisma.HashtagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artworkHashtag`: Exposes CRUD operations for the **ArtworkHashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtworkHashtags
    * const artworkHashtags = await prisma.artworkHashtag.findMany()
    * ```
    */
  get artworkHashtag(): Prisma.ArtworkHashtagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reactionType`: Exposes CRUD operations for the **ReactionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReactionTypes
    * const reactionTypes = await prisma.reactionType.findMany()
    * ```
    */
  get reactionType(): Prisma.ReactionTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follows`: Exposes CRUD operations for the **Follows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follows.findMany()
    * ```
    */
  get follows(): Prisma.FollowsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Role: 'Role',
    Artwork: 'Artwork',
    Category: 'Category',
    Hashtag: 'Hashtag',
    ArtworkHashtag: 'ArtworkHashtag',
    Comment: 'Comment',
    ReactionType: 'ReactionType',
    Reaction: 'Reaction',
    Follows: 'Follows'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "artwork" | "category" | "hashtag" | "artworkHashtag" | "comment" | "reactionType" | "reaction" | "follows"
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Artwork: {
        payload: Prisma.$ArtworkPayload<ExtArgs>
        fields: Prisma.ArtworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload>
          }
          findFirst: {
            args: Prisma.ArtworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload>
          }
          findMany: {
            args: Prisma.ArtworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload>[]
          }
          create: {
            args: Prisma.ArtworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload>
          }
          createMany: {
            args: Prisma.ArtworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload>
          }
          update: {
            args: Prisma.ArtworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload>
          }
          deleteMany: {
            args: Prisma.ArtworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkPayload>
          }
          aggregate: {
            args: Prisma.ArtworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtwork>
          }
          groupBy: {
            args: Prisma.ArtworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtworkCountArgs<ExtArgs>
            result: $Utils.Optional<ArtworkCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Hashtag: {
        payload: Prisma.$HashtagPayload<ExtArgs>
        fields: Prisma.HashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findFirst: {
            args: Prisma.HashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findMany: {
            args: Prisma.HashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          create: {
            args: Prisma.HashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          createMany: {
            args: Prisma.HashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          update: {
            args: Prisma.HashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          deleteMany: {
            args: Prisma.HashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          aggregate: {
            args: Prisma.HashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHashtag>
          }
          groupBy: {
            args: Prisma.HashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<HashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.HashtagCountArgs<ExtArgs>
            result: $Utils.Optional<HashtagCountAggregateOutputType> | number
          }
        }
      }
      ArtworkHashtag: {
        payload: Prisma.$ArtworkHashtagPayload<ExtArgs>
        fields: Prisma.ArtworkHashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtworkHashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtworkHashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload>
          }
          findFirst: {
            args: Prisma.ArtworkHashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtworkHashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload>
          }
          findMany: {
            args: Prisma.ArtworkHashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload>[]
          }
          create: {
            args: Prisma.ArtworkHashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload>
          }
          createMany: {
            args: Prisma.ArtworkHashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtworkHashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload>
          }
          update: {
            args: Prisma.ArtworkHashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload>
          }
          deleteMany: {
            args: Prisma.ArtworkHashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtworkHashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtworkHashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtworkHashtagPayload>
          }
          aggregate: {
            args: Prisma.ArtworkHashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtworkHashtag>
          }
          groupBy: {
            args: Prisma.ArtworkHashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtworkHashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtworkHashtagCountArgs<ExtArgs>
            result: $Utils.Optional<ArtworkHashtagCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      ReactionType: {
        payload: Prisma.$ReactionTypePayload<ExtArgs>
        fields: Prisma.ReactionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload>
          }
          findFirst: {
            args: Prisma.ReactionTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload>
          }
          findMany: {
            args: Prisma.ReactionTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload>[]
          }
          create: {
            args: Prisma.ReactionTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload>
          }
          createMany: {
            args: Prisma.ReactionTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReactionTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload>
          }
          update: {
            args: Prisma.ReactionTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload>
          }
          deleteMany: {
            args: Prisma.ReactionTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReactionTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionTypePayload>
          }
          aggregate: {
            args: Prisma.ReactionTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReactionType>
          }
          groupBy: {
            args: Prisma.ReactionTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionTypeCountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      Follows: {
        payload: Prisma.$FollowsPayload<ExtArgs>
        fields: Prisma.FollowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findFirst: {
            args: Prisma.FollowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findMany: {
            args: Prisma.FollowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[]
          }
          create: {
            args: Prisma.FollowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          createMany: {
            args: Prisma.FollowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          update: {
            args: Prisma.FollowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          deleteMany: {
            args: Prisma.FollowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          aggregate: {
            args: Prisma.FollowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollows>
          }
          groupBy: {
            args: Prisma.FollowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowsCountArgs<ExtArgs>
            result: $Utils.Optional<FollowsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    role?: RoleOmit
    artwork?: ArtworkOmit
    category?: CategoryOmit
    hashtag?: HashtagOmit
    artworkHashtag?: ArtworkHashtagOmit
    comment?: CommentOmit
    reactionType?: ReactionTypeOmit
    reaction?: ReactionOmit
    follows?: FollowsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    artworks: number
    comments: number
    reactions: number
    following: number
    followers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artworks?: boolean | UserCountOutputTypeCountArtworksArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
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
  export type UserCountOutputTypeCountArtworksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtworkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ArtworkCountOutputType
   */

  export type ArtworkCountOutputType = {
    hashtags: number
    reactions: number
    comments: number
  }

  export type ArtworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hashtags?: boolean | ArtworkCountOutputTypeCountHashtagsArgs
    reactions?: boolean | ArtworkCountOutputTypeCountReactionsArgs
    comments?: boolean | ArtworkCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ArtworkCountOutputType without action
   */
  export type ArtworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkCountOutputType
     */
    select?: ArtworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtworkCountOutputType without action
   */
  export type ArtworkCountOutputTypeCountHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtworkHashtagWhereInput
  }

  /**
   * ArtworkCountOutputType without action
   */
  export type ArtworkCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * ArtworkCountOutputType without action
   */
  export type ArtworkCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    artworks: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artworks?: boolean | CategoryCountOutputTypeCountArtworksArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountArtworksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtworkWhereInput
  }


  /**
   * Count Type HashtagCountOutputType
   */

  export type HashtagCountOutputType = {
    artworks: number
  }

  export type HashtagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artworks?: boolean | HashtagCountOutputTypeCountArtworksArgs
  }

  // Custom InputTypes
  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HashtagCountOutputType
     */
    select?: HashtagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeCountArtworksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtworkHashtagWhereInput
  }


  /**
   * Count Type ReactionTypeCountOutputType
   */

  export type ReactionTypeCountOutputType = {
    reactions: number
  }

  export type ReactionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactions?: boolean | ReactionTypeCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * ReactionTypeCountOutputType without action
   */
  export type ReactionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionTypeCountOutputType
     */
    select?: ReactionTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReactionTypeCountOutputType without action
   */
  export type ReactionTypeCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    avatarUrl: string | null
    phone: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    roleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    avatarUrl: string | null
    phone: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    roleId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    avatarUrl: number
    phone: number
    email: number
    password: number
    createdAt: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
    phone?: true
    email?: true
    password?: true
    createdAt?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
    phone?: true
    email?: true
    password?: true
    createdAt?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
    phone?: true
    email?: true
    password?: true
    createdAt?: true
    roleId?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    avatarUrl: string | null
    phone: string | null
    email: string
    password: string
    createdAt: Date
    roleId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    avatarUrl?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    artworks?: boolean | User$artworksArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatarUrl" | "phone" | "email" | "password" | "createdAt" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    artworks?: boolean | User$artworksArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      artworks: Prisma.$ArtworkPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      following: Prisma.$FollowsPayload<ExtArgs>[]
      followers: Prisma.$FollowsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      avatarUrl: string | null
      phone: string | null
      email: string
      password: string
      createdAt: Date
      roleId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artworks<T extends User$artworksArgs<ExtArgs> = {}>(args?: Subset<T, User$artworksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly roleId: FieldRef<"User", 'Int'>
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
   * User.artworks
   */
  export type User$artworksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    where?: ArtworkWhereInput
    orderBy?: ArtworkOrderByWithRelationInput | ArtworkOrderByWithRelationInput[]
    cursor?: ArtworkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtworkScalarFieldEnum | ArtworkScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
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
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Artwork
   */

  export type AggregateArtwork = {
    _count: ArtworkCountAggregateOutputType | null
    _avg: ArtworkAvgAggregateOutputType | null
    _sum: ArtworkSumAggregateOutputType | null
    _min: ArtworkMinAggregateOutputType | null
    _max: ArtworkMaxAggregateOutputType | null
  }

  export type ArtworkAvgAggregateOutputType = {
    id: number | null
    price: number | null
    authorId: number | null
    categoryId: number | null
  }

  export type ArtworkSumAggregateOutputType = {
    id: number | null
    price: number | null
    authorId: number | null
    categoryId: number | null
  }

  export type ArtworkMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dimensions: string | null
    imageUrls: string | null
    authorId: number | null
    categoryId: number | null
  }

  export type ArtworkMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dimensions: string | null
    imageUrls: string | null
    authorId: number | null
    categoryId: number | null
  }

  export type ArtworkCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    status: number
    createdAt: number
    updatedAt: number
    dimensions: number
    imageUrls: number
    authorId: number
    categoryId: number
    _all: number
  }


  export type ArtworkAvgAggregateInputType = {
    id?: true
    price?: true
    authorId?: true
    categoryId?: true
  }

  export type ArtworkSumAggregateInputType = {
    id?: true
    price?: true
    authorId?: true
    categoryId?: true
  }

  export type ArtworkMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    dimensions?: true
    imageUrls?: true
    authorId?: true
    categoryId?: true
  }

  export type ArtworkMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    dimensions?: true
    imageUrls?: true
    authorId?: true
    categoryId?: true
  }

  export type ArtworkCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    dimensions?: true
    imageUrls?: true
    authorId?: true
    categoryId?: true
    _all?: true
  }

  export type ArtworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artwork to aggregate.
     */
    where?: ArtworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artworks to fetch.
     */
    orderBy?: ArtworkOrderByWithRelationInput | ArtworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artworks
    **/
    _count?: true | ArtworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtworkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtworkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtworkMaxAggregateInputType
  }

  export type GetArtworkAggregateType<T extends ArtworkAggregateArgs> = {
        [P in keyof T & keyof AggregateArtwork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtwork[P]>
      : GetScalarType<T[P], AggregateArtwork[P]>
  }




  export type ArtworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtworkWhereInput
    orderBy?: ArtworkOrderByWithAggregationInput | ArtworkOrderByWithAggregationInput[]
    by: ArtworkScalarFieldEnum[] | ArtworkScalarFieldEnum
    having?: ArtworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtworkCountAggregateInputType | true
    _avg?: ArtworkAvgAggregateInputType
    _sum?: ArtworkSumAggregateInputType
    _min?: ArtworkMinAggregateInputType
    _max?: ArtworkMaxAggregateInputType
  }

  export type ArtworkGroupByOutputType = {
    id: number
    title: string
    description: string | null
    price: number | null
    status: string
    createdAt: Date
    updatedAt: Date
    dimensions: string | null
    imageUrls: string
    authorId: number
    categoryId: number
    _count: ArtworkCountAggregateOutputType | null
    _avg: ArtworkAvgAggregateOutputType | null
    _sum: ArtworkSumAggregateOutputType | null
    _min: ArtworkMinAggregateOutputType | null
    _max: ArtworkMaxAggregateOutputType | null
  }

  type GetArtworkGroupByPayload<T extends ArtworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtworkGroupByOutputType[P]>
            : GetScalarType<T[P], ArtworkGroupByOutputType[P]>
        }
      >
    >


  export type ArtworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dimensions?: boolean
    imageUrls?: boolean
    authorId?: boolean
    categoryId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    hashtags?: boolean | Artwork$hashtagsArgs<ExtArgs>
    reactions?: boolean | Artwork$reactionsArgs<ExtArgs>
    comments?: boolean | Artwork$commentsArgs<ExtArgs>
    _count?: boolean | ArtworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artwork"]>



  export type ArtworkSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dimensions?: boolean
    imageUrls?: boolean
    authorId?: boolean
    categoryId?: boolean
  }

  export type ArtworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "status" | "createdAt" | "updatedAt" | "dimensions" | "imageUrls" | "authorId" | "categoryId", ExtArgs["result"]["artwork"]>
  export type ArtworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    hashtags?: boolean | Artwork$hashtagsArgs<ExtArgs>
    reactions?: boolean | Artwork$reactionsArgs<ExtArgs>
    comments?: boolean | Artwork$commentsArgs<ExtArgs>
    _count?: boolean | ArtworkCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArtworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artwork"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      hashtags: Prisma.$ArtworkHashtagPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      price: number | null
      status: string
      createdAt: Date
      updatedAt: Date
      dimensions: string | null
      imageUrls: string
      authorId: number
      categoryId: number
    }, ExtArgs["result"]["artwork"]>
    composites: {}
  }

  type ArtworkGetPayload<S extends boolean | null | undefined | ArtworkDefaultArgs> = $Result.GetResult<Prisma.$ArtworkPayload, S>

  type ArtworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtworkCountAggregateInputType | true
    }

  export interface ArtworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artwork'], meta: { name: 'Artwork' } }
    /**
     * Find zero or one Artwork that matches the filter.
     * @param {ArtworkFindUniqueArgs} args - Arguments to find a Artwork
     * @example
     * // Get one Artwork
     * const artwork = await prisma.artwork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtworkFindUniqueArgs>(args: SelectSubset<T, ArtworkFindUniqueArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artwork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtworkFindUniqueOrThrowArgs} args - Arguments to find a Artwork
     * @example
     * // Get one Artwork
     * const artwork = await prisma.artwork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtworkFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artwork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkFindFirstArgs} args - Arguments to find a Artwork
     * @example
     * // Get one Artwork
     * const artwork = await prisma.artwork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtworkFindFirstArgs>(args?: SelectSubset<T, ArtworkFindFirstArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artwork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkFindFirstOrThrowArgs} args - Arguments to find a Artwork
     * @example
     * // Get one Artwork
     * const artwork = await prisma.artwork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtworkFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artworks
     * const artworks = await prisma.artwork.findMany()
     * 
     * // Get first 10 Artworks
     * const artworks = await prisma.artwork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artworkWithIdOnly = await prisma.artwork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtworkFindManyArgs>(args?: SelectSubset<T, ArtworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artwork.
     * @param {ArtworkCreateArgs} args - Arguments to create a Artwork.
     * @example
     * // Create one Artwork
     * const Artwork = await prisma.artwork.create({
     *   data: {
     *     // ... data to create a Artwork
     *   }
     * })
     * 
     */
    create<T extends ArtworkCreateArgs>(args: SelectSubset<T, ArtworkCreateArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artworks.
     * @param {ArtworkCreateManyArgs} args - Arguments to create many Artworks.
     * @example
     * // Create many Artworks
     * const artwork = await prisma.artwork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtworkCreateManyArgs>(args?: SelectSubset<T, ArtworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artwork.
     * @param {ArtworkDeleteArgs} args - Arguments to delete one Artwork.
     * @example
     * // Delete one Artwork
     * const Artwork = await prisma.artwork.delete({
     *   where: {
     *     // ... filter to delete one Artwork
     *   }
     * })
     * 
     */
    delete<T extends ArtworkDeleteArgs>(args: SelectSubset<T, ArtworkDeleteArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artwork.
     * @param {ArtworkUpdateArgs} args - Arguments to update one Artwork.
     * @example
     * // Update one Artwork
     * const artwork = await prisma.artwork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtworkUpdateArgs>(args: SelectSubset<T, ArtworkUpdateArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artworks.
     * @param {ArtworkDeleteManyArgs} args - Arguments to filter Artworks to delete.
     * @example
     * // Delete a few Artworks
     * const { count } = await prisma.artwork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtworkDeleteManyArgs>(args?: SelectSubset<T, ArtworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artworks
     * const artwork = await prisma.artwork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtworkUpdateManyArgs>(args: SelectSubset<T, ArtworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artwork.
     * @param {ArtworkUpsertArgs} args - Arguments to update or create a Artwork.
     * @example
     * // Update or create a Artwork
     * const artwork = await prisma.artwork.upsert({
     *   create: {
     *     // ... data to create a Artwork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artwork we want to update
     *   }
     * })
     */
    upsert<T extends ArtworkUpsertArgs>(args: SelectSubset<T, ArtworkUpsertArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkCountArgs} args - Arguments to filter Artworks to count.
     * @example
     * // Count the number of Artworks
     * const count = await prisma.artwork.count({
     *   where: {
     *     // ... the filter for the Artworks we want to count
     *   }
     * })
    **/
    count<T extends ArtworkCountArgs>(
      args?: Subset<T, ArtworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtworkAggregateArgs>(args: Subset<T, ArtworkAggregateArgs>): Prisma.PrismaPromise<GetArtworkAggregateType<T>>

    /**
     * Group by Artwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkGroupByArgs} args - Group by arguments.
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
      T extends ArtworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtworkGroupByArgs['orderBy'] }
        : { orderBy?: ArtworkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artwork model
   */
  readonly fields: ArtworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artwork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hashtags<T extends Artwork$hashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Artwork$hashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Artwork$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Artwork$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Artwork$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Artwork$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artwork model
   */
  interface ArtworkFieldRefs {
    readonly id: FieldRef<"Artwork", 'Int'>
    readonly title: FieldRef<"Artwork", 'String'>
    readonly description: FieldRef<"Artwork", 'String'>
    readonly price: FieldRef<"Artwork", 'Float'>
    readonly status: FieldRef<"Artwork", 'String'>
    readonly createdAt: FieldRef<"Artwork", 'DateTime'>
    readonly updatedAt: FieldRef<"Artwork", 'DateTime'>
    readonly dimensions: FieldRef<"Artwork", 'String'>
    readonly imageUrls: FieldRef<"Artwork", 'String'>
    readonly authorId: FieldRef<"Artwork", 'Int'>
    readonly categoryId: FieldRef<"Artwork", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Artwork findUnique
   */
  export type ArtworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * Filter, which Artwork to fetch.
     */
    where: ArtworkWhereUniqueInput
  }

  /**
   * Artwork findUniqueOrThrow
   */
  export type ArtworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * Filter, which Artwork to fetch.
     */
    where: ArtworkWhereUniqueInput
  }

  /**
   * Artwork findFirst
   */
  export type ArtworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * Filter, which Artwork to fetch.
     */
    where?: ArtworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artworks to fetch.
     */
    orderBy?: ArtworkOrderByWithRelationInput | ArtworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artworks.
     */
    cursor?: ArtworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artworks.
     */
    distinct?: ArtworkScalarFieldEnum | ArtworkScalarFieldEnum[]
  }

  /**
   * Artwork findFirstOrThrow
   */
  export type ArtworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * Filter, which Artwork to fetch.
     */
    where?: ArtworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artworks to fetch.
     */
    orderBy?: ArtworkOrderByWithRelationInput | ArtworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artworks.
     */
    cursor?: ArtworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artworks.
     */
    distinct?: ArtworkScalarFieldEnum | ArtworkScalarFieldEnum[]
  }

  /**
   * Artwork findMany
   */
  export type ArtworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * Filter, which Artworks to fetch.
     */
    where?: ArtworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artworks to fetch.
     */
    orderBy?: ArtworkOrderByWithRelationInput | ArtworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artworks.
     */
    cursor?: ArtworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artworks.
     */
    skip?: number
    distinct?: ArtworkScalarFieldEnum | ArtworkScalarFieldEnum[]
  }

  /**
   * Artwork create
   */
  export type ArtworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * The data needed to create a Artwork.
     */
    data: XOR<ArtworkCreateInput, ArtworkUncheckedCreateInput>
  }

  /**
   * Artwork createMany
   */
  export type ArtworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artworks.
     */
    data: ArtworkCreateManyInput | ArtworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artwork update
   */
  export type ArtworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * The data needed to update a Artwork.
     */
    data: XOR<ArtworkUpdateInput, ArtworkUncheckedUpdateInput>
    /**
     * Choose, which Artwork to update.
     */
    where: ArtworkWhereUniqueInput
  }

  /**
   * Artwork updateMany
   */
  export type ArtworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artworks.
     */
    data: XOR<ArtworkUpdateManyMutationInput, ArtworkUncheckedUpdateManyInput>
    /**
     * Filter which Artworks to update
     */
    where?: ArtworkWhereInput
    /**
     * Limit how many Artworks to update.
     */
    limit?: number
  }

  /**
   * Artwork upsert
   */
  export type ArtworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * The filter to search for the Artwork to update in case it exists.
     */
    where: ArtworkWhereUniqueInput
    /**
     * In case the Artwork found by the `where` argument doesn't exist, create a new Artwork with this data.
     */
    create: XOR<ArtworkCreateInput, ArtworkUncheckedCreateInput>
    /**
     * In case the Artwork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtworkUpdateInput, ArtworkUncheckedUpdateInput>
  }

  /**
   * Artwork delete
   */
  export type ArtworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    /**
     * Filter which Artwork to delete.
     */
    where: ArtworkWhereUniqueInput
  }

  /**
   * Artwork deleteMany
   */
  export type ArtworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artworks to delete
     */
    where?: ArtworkWhereInput
    /**
     * Limit how many Artworks to delete.
     */
    limit?: number
  }

  /**
   * Artwork.hashtags
   */
  export type Artwork$hashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    where?: ArtworkHashtagWhereInput
    orderBy?: ArtworkHashtagOrderByWithRelationInput | ArtworkHashtagOrderByWithRelationInput[]
    cursor?: ArtworkHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtworkHashtagScalarFieldEnum | ArtworkHashtagScalarFieldEnum[]
  }

  /**
   * Artwork.reactions
   */
  export type Artwork$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Artwork.comments
   */
  export type Artwork$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Artwork without action
   */
  export type ArtworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    artworks?: boolean | Category$artworksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artworks?: boolean | Category$artworksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      artworks: Prisma.$ArtworkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artworks<T extends Category$artworksArgs<ExtArgs> = {}>(args?: Subset<T, Category$artworksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.artworks
   */
  export type Category$artworksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: ArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artwork
     */
    omit?: ArtworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkInclude<ExtArgs> | null
    where?: ArtworkWhereInput
    orderBy?: ArtworkOrderByWithRelationInput | ArtworkOrderByWithRelationInput[]
    cursor?: ArtworkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtworkScalarFieldEnum | ArtworkScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Hashtag
   */

  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  export type HashtagAvgAggregateOutputType = {
    id: number | null
  }

  export type HashtagSumAggregateOutputType = {
    id: number | null
  }

  export type HashtagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type HashtagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type HashtagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HashtagAvgAggregateInputType = {
    id?: true
  }

  export type HashtagSumAggregateInputType = {
    id?: true
  }

  export type HashtagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HashtagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HashtagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtag to aggregate.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hashtags
    **/
    _count?: true | HashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagMaxAggregateInputType
  }

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>
  }




  export type HashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HashtagWhereInput
    orderBy?: HashtagOrderByWithAggregationInput | HashtagOrderByWithAggregationInput[]
    by: HashtagScalarFieldEnum[] | HashtagScalarFieldEnum
    having?: HashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagCountAggregateInputType | true
    _avg?: HashtagAvgAggregateInputType
    _sum?: HashtagSumAggregateInputType
    _min?: HashtagMinAggregateInputType
    _max?: HashtagMaxAggregateInputType
  }

  export type HashtagGroupByOutputType = {
    id: number
    name: string
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  type GetHashtagGroupByPayload<T extends HashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
        }
      >
    >


  export type HashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    artworks?: boolean | Hashtag$artworksArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hashtag"]>



  export type HashtagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type HashtagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["hashtag"]>
  export type HashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artworks?: boolean | Hashtag$artworksArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hashtag"
    objects: {
      artworks: Prisma.$ArtworkHashtagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["hashtag"]>
    composites: {}
  }

  type HashtagGetPayload<S extends boolean | null | undefined | HashtagDefaultArgs> = $Result.GetResult<Prisma.$HashtagPayload, S>

  type HashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HashtagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HashtagCountAggregateInputType | true
    }

  export interface HashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hashtag'], meta: { name: 'Hashtag' } }
    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {HashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HashtagFindUniqueArgs>(args: SelectSubset<T, HashtagFindUniqueArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hashtag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, HashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HashtagFindFirstArgs>(args?: SelectSubset<T, HashtagFindFirstArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, HashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HashtagFindManyArgs>(args?: SelectSubset<T, HashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hashtag.
     * @param {HashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     * 
     */
    create<T extends HashtagCreateArgs>(args: SelectSubset<T, HashtagCreateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hashtags.
     * @param {HashtagCreateManyArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HashtagCreateManyArgs>(args?: SelectSubset<T, HashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hashtag.
     * @param {HashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     * 
     */
    delete<T extends HashtagDeleteArgs>(args: SelectSubset<T, HashtagDeleteArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hashtag.
     * @param {HashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HashtagUpdateArgs>(args: SelectSubset<T, HashtagUpdateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hashtags.
     * @param {HashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HashtagDeleteManyArgs>(args?: SelectSubset<T, HashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HashtagUpdateManyArgs>(args: SelectSubset<T, HashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hashtag.
     * @param {HashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
     */
    upsert<T extends HashtagUpsertArgs>(args: SelectSubset<T, HashtagUpsertArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends HashtagCountArgs>(
      args?: Subset<T, HashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HashtagAggregateArgs>(args: Subset<T, HashtagAggregateArgs>): Prisma.PrismaPromise<GetHashtagAggregateType<T>>

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagGroupByArgs} args - Group by arguments.
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
      T extends HashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagGroupByArgs['orderBy'] }
        : { orderBy?: HashtagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hashtag model
   */
  readonly fields: HashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artworks<T extends Hashtag$artworksArgs<ExtArgs> = {}>(args?: Subset<T, Hashtag$artworksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hashtag model
   */
  interface HashtagFieldRefs {
    readonly id: FieldRef<"Hashtag", 'Int'>
    readonly name: FieldRef<"Hashtag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hashtag findUnique
   */
  export type HashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findUniqueOrThrow
   */
  export type HashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findFirst
   */
  export type HashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findFirstOrThrow
   */
  export type HashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findMany
   */
  export type HashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtags to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag create
   */
  export type HashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a Hashtag.
     */
    data: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
  }

  /**
   * Hashtag createMany
   */
  export type HashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag update
   */
  export type HashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a Hashtag.
     */
    data: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
    /**
     * Choose, which Hashtag to update.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag updateMany
   */
  export type HashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to update.
     */
    limit?: number
  }

  /**
   * Hashtag upsert
   */
  export type HashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the Hashtag to update in case it exists.
     */
    where: HashtagWhereUniqueInput
    /**
     * In case the Hashtag found by the `where` argument doesn't exist, create a new Hashtag with this data.
     */
    create: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
    /**
     * In case the Hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
  }

  /**
   * Hashtag delete
   */
  export type HashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter which Hashtag to delete.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag deleteMany
   */
  export type HashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtags to delete
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to delete.
     */
    limit?: number
  }

  /**
   * Hashtag.artworks
   */
  export type Hashtag$artworksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    where?: ArtworkHashtagWhereInput
    orderBy?: ArtworkHashtagOrderByWithRelationInput | ArtworkHashtagOrderByWithRelationInput[]
    cursor?: ArtworkHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtworkHashtagScalarFieldEnum | ArtworkHashtagScalarFieldEnum[]
  }

  /**
   * Hashtag without action
   */
  export type HashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
  }


  /**
   * Model ArtworkHashtag
   */

  export type AggregateArtworkHashtag = {
    _count: ArtworkHashtagCountAggregateOutputType | null
    _avg: ArtworkHashtagAvgAggregateOutputType | null
    _sum: ArtworkHashtagSumAggregateOutputType | null
    _min: ArtworkHashtagMinAggregateOutputType | null
    _max: ArtworkHashtagMaxAggregateOutputType | null
  }

  export type ArtworkHashtagAvgAggregateOutputType = {
    artworkId: number | null
    hashtagId: number | null
  }

  export type ArtworkHashtagSumAggregateOutputType = {
    artworkId: number | null
    hashtagId: number | null
  }

  export type ArtworkHashtagMinAggregateOutputType = {
    artworkId: number | null
    hashtagId: number | null
  }

  export type ArtworkHashtagMaxAggregateOutputType = {
    artworkId: number | null
    hashtagId: number | null
  }

  export type ArtworkHashtagCountAggregateOutputType = {
    artworkId: number
    hashtagId: number
    _all: number
  }


  export type ArtworkHashtagAvgAggregateInputType = {
    artworkId?: true
    hashtagId?: true
  }

  export type ArtworkHashtagSumAggregateInputType = {
    artworkId?: true
    hashtagId?: true
  }

  export type ArtworkHashtagMinAggregateInputType = {
    artworkId?: true
    hashtagId?: true
  }

  export type ArtworkHashtagMaxAggregateInputType = {
    artworkId?: true
    hashtagId?: true
  }

  export type ArtworkHashtagCountAggregateInputType = {
    artworkId?: true
    hashtagId?: true
    _all?: true
  }

  export type ArtworkHashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtworkHashtag to aggregate.
     */
    where?: ArtworkHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtworkHashtags to fetch.
     */
    orderBy?: ArtworkHashtagOrderByWithRelationInput | ArtworkHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtworkHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtworkHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtworkHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtworkHashtags
    **/
    _count?: true | ArtworkHashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtworkHashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtworkHashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtworkHashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtworkHashtagMaxAggregateInputType
  }

  export type GetArtworkHashtagAggregateType<T extends ArtworkHashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateArtworkHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtworkHashtag[P]>
      : GetScalarType<T[P], AggregateArtworkHashtag[P]>
  }




  export type ArtworkHashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtworkHashtagWhereInput
    orderBy?: ArtworkHashtagOrderByWithAggregationInput | ArtworkHashtagOrderByWithAggregationInput[]
    by: ArtworkHashtagScalarFieldEnum[] | ArtworkHashtagScalarFieldEnum
    having?: ArtworkHashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtworkHashtagCountAggregateInputType | true
    _avg?: ArtworkHashtagAvgAggregateInputType
    _sum?: ArtworkHashtagSumAggregateInputType
    _min?: ArtworkHashtagMinAggregateInputType
    _max?: ArtworkHashtagMaxAggregateInputType
  }

  export type ArtworkHashtagGroupByOutputType = {
    artworkId: number
    hashtagId: number
    _count: ArtworkHashtagCountAggregateOutputType | null
    _avg: ArtworkHashtagAvgAggregateOutputType | null
    _sum: ArtworkHashtagSumAggregateOutputType | null
    _min: ArtworkHashtagMinAggregateOutputType | null
    _max: ArtworkHashtagMaxAggregateOutputType | null
  }

  type GetArtworkHashtagGroupByPayload<T extends ArtworkHashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtworkHashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtworkHashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtworkHashtagGroupByOutputType[P]>
            : GetScalarType<T[P], ArtworkHashtagGroupByOutputType[P]>
        }
      >
    >


  export type ArtworkHashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artworkId?: boolean
    hashtagId?: boolean
    artwork?: boolean | ArtworkDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artworkHashtag"]>



  export type ArtworkHashtagSelectScalar = {
    artworkId?: boolean
    hashtagId?: boolean
  }

  export type ArtworkHashtagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artworkId" | "hashtagId", ExtArgs["result"]["artworkHashtag"]>
  export type ArtworkHashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artwork?: boolean | ArtworkDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }

  export type $ArtworkHashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtworkHashtag"
    objects: {
      artwork: Prisma.$ArtworkPayload<ExtArgs>
      hashtag: Prisma.$HashtagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      artworkId: number
      hashtagId: number
    }, ExtArgs["result"]["artworkHashtag"]>
    composites: {}
  }

  type ArtworkHashtagGetPayload<S extends boolean | null | undefined | ArtworkHashtagDefaultArgs> = $Result.GetResult<Prisma.$ArtworkHashtagPayload, S>

  type ArtworkHashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtworkHashtagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtworkHashtagCountAggregateInputType | true
    }

  export interface ArtworkHashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtworkHashtag'], meta: { name: 'ArtworkHashtag' } }
    /**
     * Find zero or one ArtworkHashtag that matches the filter.
     * @param {ArtworkHashtagFindUniqueArgs} args - Arguments to find a ArtworkHashtag
     * @example
     * // Get one ArtworkHashtag
     * const artworkHashtag = await prisma.artworkHashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtworkHashtagFindUniqueArgs>(args: SelectSubset<T, ArtworkHashtagFindUniqueArgs<ExtArgs>>): Prisma__ArtworkHashtagClient<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtworkHashtag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtworkHashtagFindUniqueOrThrowArgs} args - Arguments to find a ArtworkHashtag
     * @example
     * // Get one ArtworkHashtag
     * const artworkHashtag = await prisma.artworkHashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtworkHashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtworkHashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtworkHashtagClient<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtworkHashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkHashtagFindFirstArgs} args - Arguments to find a ArtworkHashtag
     * @example
     * // Get one ArtworkHashtag
     * const artworkHashtag = await prisma.artworkHashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtworkHashtagFindFirstArgs>(args?: SelectSubset<T, ArtworkHashtagFindFirstArgs<ExtArgs>>): Prisma__ArtworkHashtagClient<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtworkHashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkHashtagFindFirstOrThrowArgs} args - Arguments to find a ArtworkHashtag
     * @example
     * // Get one ArtworkHashtag
     * const artworkHashtag = await prisma.artworkHashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtworkHashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtworkHashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtworkHashtagClient<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtworkHashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkHashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtworkHashtags
     * const artworkHashtags = await prisma.artworkHashtag.findMany()
     * 
     * // Get first 10 ArtworkHashtags
     * const artworkHashtags = await prisma.artworkHashtag.findMany({ take: 10 })
     * 
     * // Only select the `artworkId`
     * const artworkHashtagWithArtworkIdOnly = await prisma.artworkHashtag.findMany({ select: { artworkId: true } })
     * 
     */
    findMany<T extends ArtworkHashtagFindManyArgs>(args?: SelectSubset<T, ArtworkHashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtworkHashtag.
     * @param {ArtworkHashtagCreateArgs} args - Arguments to create a ArtworkHashtag.
     * @example
     * // Create one ArtworkHashtag
     * const ArtworkHashtag = await prisma.artworkHashtag.create({
     *   data: {
     *     // ... data to create a ArtworkHashtag
     *   }
     * })
     * 
     */
    create<T extends ArtworkHashtagCreateArgs>(args: SelectSubset<T, ArtworkHashtagCreateArgs<ExtArgs>>): Prisma__ArtworkHashtagClient<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtworkHashtags.
     * @param {ArtworkHashtagCreateManyArgs} args - Arguments to create many ArtworkHashtags.
     * @example
     * // Create many ArtworkHashtags
     * const artworkHashtag = await prisma.artworkHashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtworkHashtagCreateManyArgs>(args?: SelectSubset<T, ArtworkHashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtworkHashtag.
     * @param {ArtworkHashtagDeleteArgs} args - Arguments to delete one ArtworkHashtag.
     * @example
     * // Delete one ArtworkHashtag
     * const ArtworkHashtag = await prisma.artworkHashtag.delete({
     *   where: {
     *     // ... filter to delete one ArtworkHashtag
     *   }
     * })
     * 
     */
    delete<T extends ArtworkHashtagDeleteArgs>(args: SelectSubset<T, ArtworkHashtagDeleteArgs<ExtArgs>>): Prisma__ArtworkHashtagClient<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtworkHashtag.
     * @param {ArtworkHashtagUpdateArgs} args - Arguments to update one ArtworkHashtag.
     * @example
     * // Update one ArtworkHashtag
     * const artworkHashtag = await prisma.artworkHashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtworkHashtagUpdateArgs>(args: SelectSubset<T, ArtworkHashtagUpdateArgs<ExtArgs>>): Prisma__ArtworkHashtagClient<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtworkHashtags.
     * @param {ArtworkHashtagDeleteManyArgs} args - Arguments to filter ArtworkHashtags to delete.
     * @example
     * // Delete a few ArtworkHashtags
     * const { count } = await prisma.artworkHashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtworkHashtagDeleteManyArgs>(args?: SelectSubset<T, ArtworkHashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtworkHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkHashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtworkHashtags
     * const artworkHashtag = await prisma.artworkHashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtworkHashtagUpdateManyArgs>(args: SelectSubset<T, ArtworkHashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtworkHashtag.
     * @param {ArtworkHashtagUpsertArgs} args - Arguments to update or create a ArtworkHashtag.
     * @example
     * // Update or create a ArtworkHashtag
     * const artworkHashtag = await prisma.artworkHashtag.upsert({
     *   create: {
     *     // ... data to create a ArtworkHashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtworkHashtag we want to update
     *   }
     * })
     */
    upsert<T extends ArtworkHashtagUpsertArgs>(args: SelectSubset<T, ArtworkHashtagUpsertArgs<ExtArgs>>): Prisma__ArtworkHashtagClient<$Result.GetResult<Prisma.$ArtworkHashtagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtworkHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkHashtagCountArgs} args - Arguments to filter ArtworkHashtags to count.
     * @example
     * // Count the number of ArtworkHashtags
     * const count = await prisma.artworkHashtag.count({
     *   where: {
     *     // ... the filter for the ArtworkHashtags we want to count
     *   }
     * })
    **/
    count<T extends ArtworkHashtagCountArgs>(
      args?: Subset<T, ArtworkHashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtworkHashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtworkHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkHashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtworkHashtagAggregateArgs>(args: Subset<T, ArtworkHashtagAggregateArgs>): Prisma.PrismaPromise<GetArtworkHashtagAggregateType<T>>

    /**
     * Group by ArtworkHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkHashtagGroupByArgs} args - Group by arguments.
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
      T extends ArtworkHashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtworkHashtagGroupByArgs['orderBy'] }
        : { orderBy?: ArtworkHashtagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtworkHashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtworkHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtworkHashtag model
   */
  readonly fields: ArtworkHashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtworkHashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtworkHashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artwork<T extends ArtworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtworkDefaultArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hashtag<T extends HashtagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HashtagDefaultArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArtworkHashtag model
   */
  interface ArtworkHashtagFieldRefs {
    readonly artworkId: FieldRef<"ArtworkHashtag", 'Int'>
    readonly hashtagId: FieldRef<"ArtworkHashtag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArtworkHashtag findUnique
   */
  export type ArtworkHashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * Filter, which ArtworkHashtag to fetch.
     */
    where: ArtworkHashtagWhereUniqueInput
  }

  /**
   * ArtworkHashtag findUniqueOrThrow
   */
  export type ArtworkHashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * Filter, which ArtworkHashtag to fetch.
     */
    where: ArtworkHashtagWhereUniqueInput
  }

  /**
   * ArtworkHashtag findFirst
   */
  export type ArtworkHashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * Filter, which ArtworkHashtag to fetch.
     */
    where?: ArtworkHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtworkHashtags to fetch.
     */
    orderBy?: ArtworkHashtagOrderByWithRelationInput | ArtworkHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtworkHashtags.
     */
    cursor?: ArtworkHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtworkHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtworkHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtworkHashtags.
     */
    distinct?: ArtworkHashtagScalarFieldEnum | ArtworkHashtagScalarFieldEnum[]
  }

  /**
   * ArtworkHashtag findFirstOrThrow
   */
  export type ArtworkHashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * Filter, which ArtworkHashtag to fetch.
     */
    where?: ArtworkHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtworkHashtags to fetch.
     */
    orderBy?: ArtworkHashtagOrderByWithRelationInput | ArtworkHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtworkHashtags.
     */
    cursor?: ArtworkHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtworkHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtworkHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtworkHashtags.
     */
    distinct?: ArtworkHashtagScalarFieldEnum | ArtworkHashtagScalarFieldEnum[]
  }

  /**
   * ArtworkHashtag findMany
   */
  export type ArtworkHashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * Filter, which ArtworkHashtags to fetch.
     */
    where?: ArtworkHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtworkHashtags to fetch.
     */
    orderBy?: ArtworkHashtagOrderByWithRelationInput | ArtworkHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtworkHashtags.
     */
    cursor?: ArtworkHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtworkHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtworkHashtags.
     */
    skip?: number
    distinct?: ArtworkHashtagScalarFieldEnum | ArtworkHashtagScalarFieldEnum[]
  }

  /**
   * ArtworkHashtag create
   */
  export type ArtworkHashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtworkHashtag.
     */
    data: XOR<ArtworkHashtagCreateInput, ArtworkHashtagUncheckedCreateInput>
  }

  /**
   * ArtworkHashtag createMany
   */
  export type ArtworkHashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtworkHashtags.
     */
    data: ArtworkHashtagCreateManyInput | ArtworkHashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtworkHashtag update
   */
  export type ArtworkHashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtworkHashtag.
     */
    data: XOR<ArtworkHashtagUpdateInput, ArtworkHashtagUncheckedUpdateInput>
    /**
     * Choose, which ArtworkHashtag to update.
     */
    where: ArtworkHashtagWhereUniqueInput
  }

  /**
   * ArtworkHashtag updateMany
   */
  export type ArtworkHashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtworkHashtags.
     */
    data: XOR<ArtworkHashtagUpdateManyMutationInput, ArtworkHashtagUncheckedUpdateManyInput>
    /**
     * Filter which ArtworkHashtags to update
     */
    where?: ArtworkHashtagWhereInput
    /**
     * Limit how many ArtworkHashtags to update.
     */
    limit?: number
  }

  /**
   * ArtworkHashtag upsert
   */
  export type ArtworkHashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtworkHashtag to update in case it exists.
     */
    where: ArtworkHashtagWhereUniqueInput
    /**
     * In case the ArtworkHashtag found by the `where` argument doesn't exist, create a new ArtworkHashtag with this data.
     */
    create: XOR<ArtworkHashtagCreateInput, ArtworkHashtagUncheckedCreateInput>
    /**
     * In case the ArtworkHashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtworkHashtagUpdateInput, ArtworkHashtagUncheckedUpdateInput>
  }

  /**
   * ArtworkHashtag delete
   */
  export type ArtworkHashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
    /**
     * Filter which ArtworkHashtag to delete.
     */
    where: ArtworkHashtagWhereUniqueInput
  }

  /**
   * ArtworkHashtag deleteMany
   */
  export type ArtworkHashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtworkHashtags to delete
     */
    where?: ArtworkHashtagWhereInput
    /**
     * Limit how many ArtworkHashtags to delete.
     */
    limit?: number
  }

  /**
   * ArtworkHashtag without action
   */
  export type ArtworkHashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkHashtag
     */
    select?: ArtworkHashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtworkHashtag
     */
    omit?: ArtworkHashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtworkHashtagInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
    authorId: number | null
    artworkId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    parentId: number | null
    authorId: number | null
    artworkId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    image_user: string | null
    parentId: number | null
    authorId: number | null
    artworkId: number | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    image_user: string | null
    parentId: number | null
    authorId: number | null
    artworkId: number | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    image_user: number
    parentId: number
    authorId: number
    artworkId: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    parentId?: true
    authorId?: true
    artworkId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    parentId?: true
    authorId?: true
    artworkId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    image_user?: true
    parentId?: true
    authorId?: true
    artworkId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    image_user?: true
    parentId?: true
    authorId?: true
    artworkId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    image_user?: true
    parentId?: true
    authorId?: true
    artworkId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: string
    image_user: string
    parentId: number | null
    authorId: number
    artworkId: number
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    image_user?: boolean
    parentId?: boolean
    authorId?: boolean
    artworkId?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    artwork?: boolean | ArtworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    image_user?: boolean
    parentId?: boolean
    authorId?: boolean
    artworkId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "image_user" | "parentId" | "authorId" | "artworkId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    artwork?: boolean | ArtworkDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      artwork: Prisma.$ArtworkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      image_user: string
      parentId: number | null
      authorId: number
      artworkId: number
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artwork<T extends ArtworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtworkDefaultArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly image_user: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'Int'>
    readonly authorId: FieldRef<"Comment", 'Int'>
    readonly artworkId: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model ReactionType
   */

  export type AggregateReactionType = {
    _count: ReactionTypeCountAggregateOutputType | null
    _avg: ReactionTypeAvgAggregateOutputType | null
    _sum: ReactionTypeSumAggregateOutputType | null
    _min: ReactionTypeMinAggregateOutputType | null
    _max: ReactionTypeMaxAggregateOutputType | null
  }

  export type ReactionTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type ReactionTypeSumAggregateOutputType = {
    id: number | null
  }

  export type ReactionTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ReactionTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ReactionTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ReactionTypeAvgAggregateInputType = {
    id?: true
  }

  export type ReactionTypeSumAggregateInputType = {
    id?: true
  }

  export type ReactionTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ReactionTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ReactionTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ReactionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReactionType to aggregate.
     */
    where?: ReactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionTypes to fetch.
     */
    orderBy?: ReactionTypeOrderByWithRelationInput | ReactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReactionTypes
    **/
    _count?: true | ReactionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReactionTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReactionTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionTypeMaxAggregateInputType
  }

  export type GetReactionTypeAggregateType<T extends ReactionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateReactionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReactionType[P]>
      : GetScalarType<T[P], AggregateReactionType[P]>
  }




  export type ReactionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionTypeWhereInput
    orderBy?: ReactionTypeOrderByWithAggregationInput | ReactionTypeOrderByWithAggregationInput[]
    by: ReactionTypeScalarFieldEnum[] | ReactionTypeScalarFieldEnum
    having?: ReactionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionTypeCountAggregateInputType | true
    _avg?: ReactionTypeAvgAggregateInputType
    _sum?: ReactionTypeSumAggregateInputType
    _min?: ReactionTypeMinAggregateInputType
    _max?: ReactionTypeMaxAggregateInputType
  }

  export type ReactionTypeGroupByOutputType = {
    id: number
    name: string
    _count: ReactionTypeCountAggregateOutputType | null
    _avg: ReactionTypeAvgAggregateOutputType | null
    _sum: ReactionTypeSumAggregateOutputType | null
    _min: ReactionTypeMinAggregateOutputType | null
    _max: ReactionTypeMaxAggregateOutputType | null
  }

  type GetReactionTypeGroupByPayload<T extends ReactionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionTypeGroupByOutputType[P]>
        }
      >
    >


  export type ReactionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reactions?: boolean | ReactionType$reactionsArgs<ExtArgs>
    _count?: boolean | ReactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reactionType"]>



  export type ReactionTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ReactionTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["reactionType"]>
  export type ReactionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactions?: boolean | ReactionType$reactionsArgs<ExtArgs>
    _count?: boolean | ReactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReactionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReactionType"
    objects: {
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["reactionType"]>
    composites: {}
  }

  type ReactionTypeGetPayload<S extends boolean | null | undefined | ReactionTypeDefaultArgs> = $Result.GetResult<Prisma.$ReactionTypePayload, S>

  type ReactionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionTypeCountAggregateInputType | true
    }

  export interface ReactionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReactionType'], meta: { name: 'ReactionType' } }
    /**
     * Find zero or one ReactionType that matches the filter.
     * @param {ReactionTypeFindUniqueArgs} args - Arguments to find a ReactionType
     * @example
     * // Get one ReactionType
     * const reactionType = await prisma.reactionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionTypeFindUniqueArgs>(args: SelectSubset<T, ReactionTypeFindUniqueArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReactionType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionTypeFindUniqueOrThrowArgs} args - Arguments to find a ReactionType
     * @example
     * // Get one ReactionType
     * const reactionType = await prisma.reactionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReactionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeFindFirstArgs} args - Arguments to find a ReactionType
     * @example
     * // Get one ReactionType
     * const reactionType = await prisma.reactionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionTypeFindFirstArgs>(args?: SelectSubset<T, ReactionTypeFindFirstArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReactionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeFindFirstOrThrowArgs} args - Arguments to find a ReactionType
     * @example
     * // Get one ReactionType
     * const reactionType = await prisma.reactionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReactionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReactionTypes
     * const reactionTypes = await prisma.reactionType.findMany()
     * 
     * // Get first 10 ReactionTypes
     * const reactionTypes = await prisma.reactionType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionTypeWithIdOnly = await prisma.reactionType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionTypeFindManyArgs>(args?: SelectSubset<T, ReactionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReactionType.
     * @param {ReactionTypeCreateArgs} args - Arguments to create a ReactionType.
     * @example
     * // Create one ReactionType
     * const ReactionType = await prisma.reactionType.create({
     *   data: {
     *     // ... data to create a ReactionType
     *   }
     * })
     * 
     */
    create<T extends ReactionTypeCreateArgs>(args: SelectSubset<T, ReactionTypeCreateArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReactionTypes.
     * @param {ReactionTypeCreateManyArgs} args - Arguments to create many ReactionTypes.
     * @example
     * // Create many ReactionTypes
     * const reactionType = await prisma.reactionType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionTypeCreateManyArgs>(args?: SelectSubset<T, ReactionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReactionType.
     * @param {ReactionTypeDeleteArgs} args - Arguments to delete one ReactionType.
     * @example
     * // Delete one ReactionType
     * const ReactionType = await prisma.reactionType.delete({
     *   where: {
     *     // ... filter to delete one ReactionType
     *   }
     * })
     * 
     */
    delete<T extends ReactionTypeDeleteArgs>(args: SelectSubset<T, ReactionTypeDeleteArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReactionType.
     * @param {ReactionTypeUpdateArgs} args - Arguments to update one ReactionType.
     * @example
     * // Update one ReactionType
     * const reactionType = await prisma.reactionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionTypeUpdateArgs>(args: SelectSubset<T, ReactionTypeUpdateArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReactionTypes.
     * @param {ReactionTypeDeleteManyArgs} args - Arguments to filter ReactionTypes to delete.
     * @example
     * // Delete a few ReactionTypes
     * const { count } = await prisma.reactionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionTypeDeleteManyArgs>(args?: SelectSubset<T, ReactionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReactionTypes
     * const reactionType = await prisma.reactionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionTypeUpdateManyArgs>(args: SelectSubset<T, ReactionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReactionType.
     * @param {ReactionTypeUpsertArgs} args - Arguments to update or create a ReactionType.
     * @example
     * // Update or create a ReactionType
     * const reactionType = await prisma.reactionType.upsert({
     *   create: {
     *     // ... data to create a ReactionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReactionType we want to update
     *   }
     * })
     */
    upsert<T extends ReactionTypeUpsertArgs>(args: SelectSubset<T, ReactionTypeUpsertArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeCountArgs} args - Arguments to filter ReactionTypes to count.
     * @example
     * // Count the number of ReactionTypes
     * const count = await prisma.reactionType.count({
     *   where: {
     *     // ... the filter for the ReactionTypes we want to count
     *   }
     * })
    **/
    count<T extends ReactionTypeCountArgs>(
      args?: Subset<T, ReactionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReactionTypeAggregateArgs>(args: Subset<T, ReactionTypeAggregateArgs>): Prisma.PrismaPromise<GetReactionTypeAggregateType<T>>

    /**
     * Group by ReactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionTypeGroupByArgs} args - Group by arguments.
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
      T extends ReactionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionTypeGroupByArgs['orderBy'] }
        : { orderBy?: ReactionTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReactionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReactionType model
   */
  readonly fields: ReactionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReactionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reactions<T extends ReactionType$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, ReactionType$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReactionType model
   */
  interface ReactionTypeFieldRefs {
    readonly id: FieldRef<"ReactionType", 'Int'>
    readonly name: FieldRef<"ReactionType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReactionType findUnique
   */
  export type ReactionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ReactionType to fetch.
     */
    where: ReactionTypeWhereUniqueInput
  }

  /**
   * ReactionType findUniqueOrThrow
   */
  export type ReactionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ReactionType to fetch.
     */
    where: ReactionTypeWhereUniqueInput
  }

  /**
   * ReactionType findFirst
   */
  export type ReactionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ReactionType to fetch.
     */
    where?: ReactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionTypes to fetch.
     */
    orderBy?: ReactionTypeOrderByWithRelationInput | ReactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReactionTypes.
     */
    cursor?: ReactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReactionTypes.
     */
    distinct?: ReactionTypeScalarFieldEnum | ReactionTypeScalarFieldEnum[]
  }

  /**
   * ReactionType findFirstOrThrow
   */
  export type ReactionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ReactionType to fetch.
     */
    where?: ReactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionTypes to fetch.
     */
    orderBy?: ReactionTypeOrderByWithRelationInput | ReactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReactionTypes.
     */
    cursor?: ReactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReactionTypes.
     */
    distinct?: ReactionTypeScalarFieldEnum | ReactionTypeScalarFieldEnum[]
  }

  /**
   * ReactionType findMany
   */
  export type ReactionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which ReactionTypes to fetch.
     */
    where?: ReactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReactionTypes to fetch.
     */
    orderBy?: ReactionTypeOrderByWithRelationInput | ReactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReactionTypes.
     */
    cursor?: ReactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReactionTypes.
     */
    skip?: number
    distinct?: ReactionTypeScalarFieldEnum | ReactionTypeScalarFieldEnum[]
  }

  /**
   * ReactionType create
   */
  export type ReactionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ReactionType.
     */
    data: XOR<ReactionTypeCreateInput, ReactionTypeUncheckedCreateInput>
  }

  /**
   * ReactionType createMany
   */
  export type ReactionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReactionTypes.
     */
    data: ReactionTypeCreateManyInput | ReactionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReactionType update
   */
  export type ReactionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ReactionType.
     */
    data: XOR<ReactionTypeUpdateInput, ReactionTypeUncheckedUpdateInput>
    /**
     * Choose, which ReactionType to update.
     */
    where: ReactionTypeWhereUniqueInput
  }

  /**
   * ReactionType updateMany
   */
  export type ReactionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReactionTypes.
     */
    data: XOR<ReactionTypeUpdateManyMutationInput, ReactionTypeUncheckedUpdateManyInput>
    /**
     * Filter which ReactionTypes to update
     */
    where?: ReactionTypeWhereInput
    /**
     * Limit how many ReactionTypes to update.
     */
    limit?: number
  }

  /**
   * ReactionType upsert
   */
  export type ReactionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ReactionType to update in case it exists.
     */
    where: ReactionTypeWhereUniqueInput
    /**
     * In case the ReactionType found by the `where` argument doesn't exist, create a new ReactionType with this data.
     */
    create: XOR<ReactionTypeCreateInput, ReactionTypeUncheckedCreateInput>
    /**
     * In case the ReactionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionTypeUpdateInput, ReactionTypeUncheckedUpdateInput>
  }

  /**
   * ReactionType delete
   */
  export type ReactionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
    /**
     * Filter which ReactionType to delete.
     */
    where: ReactionTypeWhereUniqueInput
  }

  /**
   * ReactionType deleteMany
   */
  export type ReactionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReactionTypes to delete
     */
    where?: ReactionTypeWhereInput
    /**
     * Limit how many ReactionTypes to delete.
     */
    limit?: number
  }

  /**
   * ReactionType.reactions
   */
  export type ReactionType$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * ReactionType without action
   */
  export type ReactionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReactionType
     */
    select?: ReactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReactionType
     */
    omit?: ReactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionTypeInclude<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _avg: ReactionAvgAggregateOutputType | null
    _sum: ReactionSumAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionAvgAggregateOutputType = {
    userId: number | null
    artworkId: number | null
    reactionTypeId: number | null
  }

  export type ReactionSumAggregateOutputType = {
    userId: number | null
    artworkId: number | null
    reactionTypeId: number | null
  }

  export type ReactionMinAggregateOutputType = {
    userId: number | null
    artworkId: number | null
    reactionTypeId: number | null
    createdAt: Date | null
  }

  export type ReactionMaxAggregateOutputType = {
    userId: number | null
    artworkId: number | null
    reactionTypeId: number | null
    createdAt: Date | null
  }

  export type ReactionCountAggregateOutputType = {
    userId: number
    artworkId: number
    reactionTypeId: number
    createdAt: number
    _all: number
  }


  export type ReactionAvgAggregateInputType = {
    userId?: true
    artworkId?: true
    reactionTypeId?: true
  }

  export type ReactionSumAggregateInputType = {
    userId?: true
    artworkId?: true
    reactionTypeId?: true
  }

  export type ReactionMinAggregateInputType = {
    userId?: true
    artworkId?: true
    reactionTypeId?: true
    createdAt?: true
  }

  export type ReactionMaxAggregateInputType = {
    userId?: true
    artworkId?: true
    reactionTypeId?: true
    createdAt?: true
  }

  export type ReactionCountAggregateInputType = {
    userId?: true
    artworkId?: true
    reactionTypeId?: true
    createdAt?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _avg?: ReactionAvgAggregateInputType
    _sum?: ReactionSumAggregateInputType
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    userId: number
    artworkId: number
    reactionTypeId: number
    createdAt: Date
    _count: ReactionCountAggregateOutputType | null
    _avg: ReactionAvgAggregateOutputType | null
    _sum: ReactionSumAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    artworkId?: boolean
    reactionTypeId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artwork?: boolean | ArtworkDefaultArgs<ExtArgs>
    reactionType?: boolean | ReactionTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>



  export type ReactionSelectScalar = {
    userId?: boolean
    artworkId?: boolean
    reactionTypeId?: boolean
    createdAt?: boolean
  }

  export type ReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "artworkId" | "reactionTypeId" | "createdAt", ExtArgs["result"]["reaction"]>
  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artwork?: boolean | ArtworkDefaultArgs<ExtArgs>
    reactionType?: boolean | ReactionTypeDefaultArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      artwork: Prisma.$ArtworkPayload<ExtArgs>
      reactionType: Prisma.$ReactionTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      artworkId: number
      reactionTypeId: number
      createdAt: Date
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const reactionWithUserIdOnly = await prisma.reaction.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ReactionFindManyArgs>(args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
     */
    create<T extends ReactionCreateArgs>(args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionCreateManyArgs>(args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
     */
    delete<T extends ReactionDeleteArgs>(args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionUpdateArgs>(args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionDeleteManyArgs>(args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionUpdateManyArgs>(args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
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
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artwork<T extends ArtworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtworkDefaultArgs<ExtArgs>>): Prisma__ArtworkClient<$Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reactionType<T extends ReactionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReactionTypeDefaultArgs<ExtArgs>>): Prisma__ReactionTypeClient<$Result.GetResult<Prisma.$ReactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reaction model
   */
  interface ReactionFieldRefs {
    readonly userId: FieldRef<"Reaction", 'Int'>
    readonly artworkId: FieldRef<"Reaction", 'Int'>
    readonly reactionTypeId: FieldRef<"Reaction", 'Int'>
    readonly createdAt: FieldRef<"Reaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model Follows
   */

  export type AggregateFollows = {
    _count: FollowsCountAggregateOutputType | null
    _avg: FollowsAvgAggregateOutputType | null
    _sum: FollowsSumAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  export type FollowsAvgAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowsSumAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowsMinAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowsMaxAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowsCountAggregateOutputType = {
    followerId: number
    followingId: number
    _all: number
  }


  export type FollowsAvgAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowsSumAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowsMinAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowsMaxAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowsCountAggregateInputType = {
    followerId?: true
    followingId?: true
    _all?: true
  }

  export type FollowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to aggregate.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowsMaxAggregateInputType
  }

  export type GetFollowsAggregateType<T extends FollowsAggregateArgs> = {
        [P in keyof T & keyof AggregateFollows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollows[P]>
      : GetScalarType<T[P], AggregateFollows[P]>
  }




  export type FollowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithAggregationInput | FollowsOrderByWithAggregationInput[]
    by: FollowsScalarFieldEnum[] | FollowsScalarFieldEnum
    having?: FollowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowsCountAggregateInputType | true
    _avg?: FollowsAvgAggregateInputType
    _sum?: FollowsSumAggregateInputType
    _min?: FollowsMinAggregateInputType
    _max?: FollowsMaxAggregateInputType
  }

  export type FollowsGroupByOutputType = {
    followerId: number
    followingId: number
    _count: FollowsCountAggregateOutputType | null
    _avg: FollowsAvgAggregateOutputType | null
    _sum: FollowsSumAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  type GetFollowsGroupByPayload<T extends FollowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowsGroupByOutputType[P]>
        }
      >
    >


  export type FollowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    followerId?: boolean
    followingId?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>



  export type FollowsSelectScalar = {
    followerId?: boolean
    followingId?: boolean
  }

  export type FollowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"followerId" | "followingId", ExtArgs["result"]["follows"]>
  export type FollowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follows"
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>
      following: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      followerId: number
      followingId: number
    }, ExtArgs["result"]["follows"]>
    composites: {}
  }

  type FollowsGetPayload<S extends boolean | null | undefined | FollowsDefaultArgs> = $Result.GetResult<Prisma.$FollowsPayload, S>

  type FollowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowsCountAggregateInputType | true
    }

  export interface FollowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follows'], meta: { name: 'Follows' } }
    /**
     * Find zero or one Follows that matches the filter.
     * @param {FollowsFindUniqueArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowsFindUniqueArgs>(args: SelectSubset<T, FollowsFindUniqueArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowsFindUniqueOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowsFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowsFindFirstArgs>(args?: SelectSubset<T, FollowsFindFirstArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowsFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follows.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follows.findMany({ take: 10 })
     * 
     * // Only select the `followerId`
     * const followsWithFollowerIdOnly = await prisma.follows.findMany({ select: { followerId: true } })
     * 
     */
    findMany<T extends FollowsFindManyArgs>(args?: SelectSubset<T, FollowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follows.
     * @param {FollowsCreateArgs} args - Arguments to create a Follows.
     * @example
     * // Create one Follows
     * const Follows = await prisma.follows.create({
     *   data: {
     *     // ... data to create a Follows
     *   }
     * })
     * 
     */
    create<T extends FollowsCreateArgs>(args: SelectSubset<T, FollowsCreateArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowsCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowsCreateManyArgs>(args?: SelectSubset<T, FollowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follows.
     * @param {FollowsDeleteArgs} args - Arguments to delete one Follows.
     * @example
     * // Delete one Follows
     * const Follows = await prisma.follows.delete({
     *   where: {
     *     // ... filter to delete one Follows
     *   }
     * })
     * 
     */
    delete<T extends FollowsDeleteArgs>(args: SelectSubset<T, FollowsDeleteArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follows.
     * @param {FollowsUpdateArgs} args - Arguments to update one Follows.
     * @example
     * // Update one Follows
     * const follows = await prisma.follows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowsUpdateArgs>(args: SelectSubset<T, FollowsUpdateArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowsDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowsDeleteManyArgs>(args?: SelectSubset<T, FollowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowsUpdateManyArgs>(args: SelectSubset<T, FollowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follows.
     * @param {FollowsUpsertArgs} args - Arguments to update or create a Follows.
     * @example
     * // Update or create a Follows
     * const follows = await prisma.follows.upsert({
     *   create: {
     *     // ... data to create a Follows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follows we want to update
     *   }
     * })
     */
    upsert<T extends FollowsUpsertArgs>(args: SelectSubset<T, FollowsUpsertArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follows.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowsCountArgs>(
      args?: Subset<T, FollowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowsAggregateArgs>(args: Subset<T, FollowsAggregateArgs>): Prisma.PrismaPromise<GetFollowsAggregateType<T>>

    /**
     * Group by Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsGroupByArgs} args - Group by arguments.
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
      T extends FollowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowsGroupByArgs['orderBy'] }
        : { orderBy?: FollowsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follows model
   */
  readonly fields: FollowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    following<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Follows model
   */
  interface FollowsFieldRefs {
    readonly followerId: FieldRef<"Follows", 'Int'>
    readonly followingId: FieldRef<"Follows", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Follows findUnique
   */
  export type FollowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows findUniqueOrThrow
   */
  export type FollowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows findFirst
   */
  export type FollowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows findFirstOrThrow
   */
  export type FollowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows findMany
   */
  export type FollowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows create
   */
  export type FollowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to create a Follows.
     */
    data: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
  }

  /**
   * Follows createMany
   */
  export type FollowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowsCreateManyInput | FollowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follows update
   */
  export type FollowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to update a Follows.
     */
    data: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
    /**
     * Choose, which Follows to update.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows updateMany
   */
  export type FollowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follows upsert
   */
  export type FollowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The filter to search for the Follows to update in case it exists.
     */
    where: FollowsWhereUniqueInput
    /**
     * In case the Follows found by the `where` argument doesn't exist, create a new Follows with this data.
     */
    create: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
    /**
     * In case the Follows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
  }

  /**
   * Follows delete
   */
  export type FollowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter which Follows to delete.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows deleteMany
   */
  export type FollowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follows without action
   */
  export type FollowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
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
    name: 'name',
    avatarUrl: 'avatarUrl',
    phone: 'phone',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const ArtworkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dimensions: 'dimensions',
    imageUrls: 'imageUrls',
    authorId: 'authorId',
    categoryId: 'categoryId'
  };

  export type ArtworkScalarFieldEnum = (typeof ArtworkScalarFieldEnum)[keyof typeof ArtworkScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const HashtagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum]


  export const ArtworkHashtagScalarFieldEnum: {
    artworkId: 'artworkId',
    hashtagId: 'hashtagId'
  };

  export type ArtworkHashtagScalarFieldEnum = (typeof ArtworkHashtagScalarFieldEnum)[keyof typeof ArtworkHashtagScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    image_user: 'image_user',
    parentId: 'parentId',
    authorId: 'authorId',
    artworkId: 'artworkId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ReactionTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ReactionTypeScalarFieldEnum = (typeof ReactionTypeScalarFieldEnum)[keyof typeof ReactionTypeScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    userId: 'userId',
    artworkId: 'artworkId',
    reactionTypeId: 'reactionTypeId',
    createdAt: 'createdAt'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const FollowsScalarFieldEnum: {
    followerId: 'followerId',
    followingId: 'followingId'
  };

  export type FollowsScalarFieldEnum = (typeof FollowsScalarFieldEnum)[keyof typeof FollowsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    avatarUrl: 'avatarUrl',
    phone: 'phone',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const ArtworkOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    status: 'status',
    dimensions: 'dimensions',
    imageUrls: 'imageUrls'
  };

  export type ArtworkOrderByRelevanceFieldEnum = (typeof ArtworkOrderByRelevanceFieldEnum)[keyof typeof ArtworkOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const HashtagOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type HashtagOrderByRelevanceFieldEnum = (typeof HashtagOrderByRelevanceFieldEnum)[keyof typeof HashtagOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    content: 'content',
    image_user: 'image_user'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const ReactionTypeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ReactionTypeOrderByRelevanceFieldEnum = (typeof ReactionTypeOrderByRelevanceFieldEnum)[keyof typeof ReactionTypeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    artworks?: ArtworkListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
    following?: FollowsListRelationFilter
    followers?: FollowsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    artworks?: ArtworkOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    following?: FollowsOrderByRelationAggregateInput
    followers?: FollowsOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    artworks?: ArtworkListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
    following?: FollowsListRelationFilter
    followers?: FollowsListRelationFilter
  }, "id" | "phone" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    roleId?: IntWithAggregatesFilter<"User"> | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type ArtworkWhereInput = {
    AND?: ArtworkWhereInput | ArtworkWhereInput[]
    OR?: ArtworkWhereInput[]
    NOT?: ArtworkWhereInput | ArtworkWhereInput[]
    id?: IntFilter<"Artwork"> | number
    title?: StringFilter<"Artwork"> | string
    description?: StringNullableFilter<"Artwork"> | string | null
    price?: FloatNullableFilter<"Artwork"> | number | null
    status?: StringFilter<"Artwork"> | string
    createdAt?: DateTimeFilter<"Artwork"> | Date | string
    updatedAt?: DateTimeFilter<"Artwork"> | Date | string
    dimensions?: StringNullableFilter<"Artwork"> | string | null
    imageUrls?: StringFilter<"Artwork"> | string
    authorId?: IntFilter<"Artwork"> | number
    categoryId?: IntFilter<"Artwork"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    hashtags?: ArtworkHashtagListRelationFilter
    reactions?: ReactionListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type ArtworkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    author?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    hashtags?: ArtworkHashtagOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    _relevance?: ArtworkOrderByRelevanceInput
  }

  export type ArtworkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArtworkWhereInput | ArtworkWhereInput[]
    OR?: ArtworkWhereInput[]
    NOT?: ArtworkWhereInput | ArtworkWhereInput[]
    title?: StringFilter<"Artwork"> | string
    description?: StringNullableFilter<"Artwork"> | string | null
    price?: FloatNullableFilter<"Artwork"> | number | null
    status?: StringFilter<"Artwork"> | string
    createdAt?: DateTimeFilter<"Artwork"> | Date | string
    updatedAt?: DateTimeFilter<"Artwork"> | Date | string
    dimensions?: StringNullableFilter<"Artwork"> | string | null
    imageUrls?: StringFilter<"Artwork"> | string
    authorId?: IntFilter<"Artwork"> | number
    categoryId?: IntFilter<"Artwork"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    hashtags?: ArtworkHashtagListRelationFilter
    reactions?: ReactionListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type ArtworkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    _count?: ArtworkCountOrderByAggregateInput
    _avg?: ArtworkAvgOrderByAggregateInput
    _max?: ArtworkMaxOrderByAggregateInput
    _min?: ArtworkMinOrderByAggregateInput
    _sum?: ArtworkSumOrderByAggregateInput
  }

  export type ArtworkScalarWhereWithAggregatesInput = {
    AND?: ArtworkScalarWhereWithAggregatesInput | ArtworkScalarWhereWithAggregatesInput[]
    OR?: ArtworkScalarWhereWithAggregatesInput[]
    NOT?: ArtworkScalarWhereWithAggregatesInput | ArtworkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artwork"> | number
    title?: StringWithAggregatesFilter<"Artwork"> | string
    description?: StringNullableWithAggregatesFilter<"Artwork"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Artwork"> | number | null
    status?: StringWithAggregatesFilter<"Artwork"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Artwork"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artwork"> | Date | string
    dimensions?: StringNullableWithAggregatesFilter<"Artwork"> | string | null
    imageUrls?: StringWithAggregatesFilter<"Artwork"> | string
    authorId?: IntWithAggregatesFilter<"Artwork"> | number
    categoryId?: IntWithAggregatesFilter<"Artwork"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    artworks?: ArtworkListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    artworks?: ArtworkOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    artworks?: ArtworkListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type HashtagWhereInput = {
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    id?: IntFilter<"Hashtag"> | number
    name?: StringFilter<"Hashtag"> | string
    artworks?: ArtworkHashtagListRelationFilter
  }

  export type HashtagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    artworks?: ArtworkHashtagOrderByRelationAggregateInput
    _relevance?: HashtagOrderByRelevanceInput
  }

  export type HashtagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    artworks?: ArtworkHashtagListRelationFilter
  }, "id" | "name">

  export type HashtagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HashtagCountOrderByAggregateInput
    _avg?: HashtagAvgOrderByAggregateInput
    _max?: HashtagMaxOrderByAggregateInput
    _min?: HashtagMinOrderByAggregateInput
    _sum?: HashtagSumOrderByAggregateInput
  }

  export type HashtagScalarWhereWithAggregatesInput = {
    AND?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    OR?: HashtagScalarWhereWithAggregatesInput[]
    NOT?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hashtag"> | number
    name?: StringWithAggregatesFilter<"Hashtag"> | string
  }

  export type ArtworkHashtagWhereInput = {
    AND?: ArtworkHashtagWhereInput | ArtworkHashtagWhereInput[]
    OR?: ArtworkHashtagWhereInput[]
    NOT?: ArtworkHashtagWhereInput | ArtworkHashtagWhereInput[]
    artworkId?: IntFilter<"ArtworkHashtag"> | number
    hashtagId?: IntFilter<"ArtworkHashtag"> | number
    artwork?: XOR<ArtworkScalarRelationFilter, ArtworkWhereInput>
    hashtag?: XOR<HashtagScalarRelationFilter, HashtagWhereInput>
  }

  export type ArtworkHashtagOrderByWithRelationInput = {
    artworkId?: SortOrder
    hashtagId?: SortOrder
    artwork?: ArtworkOrderByWithRelationInput
    hashtag?: HashtagOrderByWithRelationInput
  }

  export type ArtworkHashtagWhereUniqueInput = Prisma.AtLeast<{
    artworkId_hashtagId?: ArtworkHashtagArtworkIdHashtagIdCompoundUniqueInput
    AND?: ArtworkHashtagWhereInput | ArtworkHashtagWhereInput[]
    OR?: ArtworkHashtagWhereInput[]
    NOT?: ArtworkHashtagWhereInput | ArtworkHashtagWhereInput[]
    artworkId?: IntFilter<"ArtworkHashtag"> | number
    hashtagId?: IntFilter<"ArtworkHashtag"> | number
    artwork?: XOR<ArtworkScalarRelationFilter, ArtworkWhereInput>
    hashtag?: XOR<HashtagScalarRelationFilter, HashtagWhereInput>
  }, "artworkId_hashtagId">

  export type ArtworkHashtagOrderByWithAggregationInput = {
    artworkId?: SortOrder
    hashtagId?: SortOrder
    _count?: ArtworkHashtagCountOrderByAggregateInput
    _avg?: ArtworkHashtagAvgOrderByAggregateInput
    _max?: ArtworkHashtagMaxOrderByAggregateInput
    _min?: ArtworkHashtagMinOrderByAggregateInput
    _sum?: ArtworkHashtagSumOrderByAggregateInput
  }

  export type ArtworkHashtagScalarWhereWithAggregatesInput = {
    AND?: ArtworkHashtagScalarWhereWithAggregatesInput | ArtworkHashtagScalarWhereWithAggregatesInput[]
    OR?: ArtworkHashtagScalarWhereWithAggregatesInput[]
    NOT?: ArtworkHashtagScalarWhereWithAggregatesInput | ArtworkHashtagScalarWhereWithAggregatesInput[]
    artworkId?: IntWithAggregatesFilter<"ArtworkHashtag"> | number
    hashtagId?: IntWithAggregatesFilter<"ArtworkHashtag"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    image_user?: StringFilter<"Comment"> | string
    parentId?: IntNullableFilter<"Comment"> | number | null
    authorId?: IntFilter<"Comment"> | number
    artworkId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    artwork?: XOR<ArtworkScalarRelationFilter, ArtworkWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    image_user?: SortOrder
    parentId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    artworkId?: SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
    artwork?: ArtworkOrderByWithRelationInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    image_user?: StringFilter<"Comment"> | string
    parentId?: IntNullableFilter<"Comment"> | number | null
    authorId?: IntFilter<"Comment"> | number
    artworkId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    artwork?: XOR<ArtworkScalarRelationFilter, ArtworkWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    image_user?: SortOrder
    parentId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    artworkId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    image_user?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    authorId?: IntWithAggregatesFilter<"Comment"> | number
    artworkId?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type ReactionTypeWhereInput = {
    AND?: ReactionTypeWhereInput | ReactionTypeWhereInput[]
    OR?: ReactionTypeWhereInput[]
    NOT?: ReactionTypeWhereInput | ReactionTypeWhereInput[]
    id?: IntFilter<"ReactionType"> | number
    name?: StringFilter<"ReactionType"> | string
    reactions?: ReactionListRelationFilter
  }

  export type ReactionTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    reactions?: ReactionOrderByRelationAggregateInput
    _relevance?: ReactionTypeOrderByRelevanceInput
  }

  export type ReactionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ReactionTypeWhereInput | ReactionTypeWhereInput[]
    OR?: ReactionTypeWhereInput[]
    NOT?: ReactionTypeWhereInput | ReactionTypeWhereInput[]
    reactions?: ReactionListRelationFilter
  }, "id" | "name">

  export type ReactionTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ReactionTypeCountOrderByAggregateInput
    _avg?: ReactionTypeAvgOrderByAggregateInput
    _max?: ReactionTypeMaxOrderByAggregateInput
    _min?: ReactionTypeMinOrderByAggregateInput
    _sum?: ReactionTypeSumOrderByAggregateInput
  }

  export type ReactionTypeScalarWhereWithAggregatesInput = {
    AND?: ReactionTypeScalarWhereWithAggregatesInput | ReactionTypeScalarWhereWithAggregatesInput[]
    OR?: ReactionTypeScalarWhereWithAggregatesInput[]
    NOT?: ReactionTypeScalarWhereWithAggregatesInput | ReactionTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReactionType"> | number
    name?: StringWithAggregatesFilter<"ReactionType"> | string
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    userId?: IntFilter<"Reaction"> | number
    artworkId?: IntFilter<"Reaction"> | number
    reactionTypeId?: IntFilter<"Reaction"> | number
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artwork?: XOR<ArtworkScalarRelationFilter, ArtworkWhereInput>
    reactionType?: XOR<ReactionTypeScalarRelationFilter, ReactionTypeWhereInput>
  }

  export type ReactionOrderByWithRelationInput = {
    userId?: SortOrder
    artworkId?: SortOrder
    reactionTypeId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    artwork?: ArtworkOrderByWithRelationInput
    reactionType?: ReactionTypeOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    userId_artworkId?: ReactionUserIdArtworkIdCompoundUniqueInput
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    userId?: IntFilter<"Reaction"> | number
    artworkId?: IntFilter<"Reaction"> | number
    reactionTypeId?: IntFilter<"Reaction"> | number
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artwork?: XOR<ArtworkScalarRelationFilter, ArtworkWhereInput>
    reactionType?: XOR<ReactionTypeScalarRelationFilter, ReactionTypeWhereInput>
  }, "userId_artworkId">

  export type ReactionOrderByWithAggregationInput = {
    userId?: SortOrder
    artworkId?: SortOrder
    reactionTypeId?: SortOrder
    createdAt?: SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _avg?: ReactionAvgOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
    _sum?: ReactionSumOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Reaction"> | number
    artworkId?: IntWithAggregatesFilter<"Reaction"> | number
    reactionTypeId?: IntWithAggregatesFilter<"Reaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
  }

  export type FollowsWhereInput = {
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    followerId?: IntFilter<"Follows"> | number
    followingId?: IntFilter<"Follows"> | number
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FollowsOrderByWithRelationInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    follower?: UserOrderByWithRelationInput
    following?: UserOrderByWithRelationInput
  }

  export type FollowsWhereUniqueInput = Prisma.AtLeast<{
    followerId_followingId?: FollowsFollowerIdFollowingIdCompoundUniqueInput
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    followerId?: IntFilter<"Follows"> | number
    followingId?: IntFilter<"Follows"> | number
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "followerId_followingId">

  export type FollowsOrderByWithAggregationInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    _count?: FollowsCountOrderByAggregateInput
    _avg?: FollowsAvgOrderByAggregateInput
    _max?: FollowsMaxOrderByAggregateInput
    _min?: FollowsMinOrderByAggregateInput
    _sum?: FollowsSumOrderByAggregateInput
  }

  export type FollowsScalarWhereWithAggregatesInput = {
    AND?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    OR?: FollowsScalarWhereWithAggregatesInput[]
    NOT?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    followerId?: IntWithAggregatesFilter<"Follows"> | number
    followingId?: IntWithAggregatesFilter<"Follows"> | number
  }

  export type UserCreateInput = {
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    artworks?: ArtworkCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    roleId: number
    artworks?: ArtworkUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    artworks?: ArtworkUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    artworks?: ArtworkUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    roleId: number
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateInput = {
    name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtworkCreateInput = {
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    author: UserCreateNestedOneWithoutArtworksInput
    category: CategoryCreateNestedOneWithoutArtworksInput
    hashtags?: ArtworkHashtagCreateNestedManyWithoutArtworkInput
    reactions?: ReactionCreateNestedManyWithoutArtworkInput
    comments?: CommentCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    authorId: number
    categoryId: number
    hashtags?: ArtworkHashtagUncheckedCreateNestedManyWithoutArtworkInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutArtworkInput
    comments?: CommentUncheckedCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutArtworksNestedInput
    category?: CategoryUpdateOneRequiredWithoutArtworksNestedInput
    hashtags?: ArtworkHashtagUpdateManyWithoutArtworkNestedInput
    reactions?: ReactionUpdateManyWithoutArtworkNestedInput
    comments?: CommentUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    hashtags?: ArtworkHashtagUncheckedUpdateManyWithoutArtworkNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutArtworkNestedInput
    comments?: CommentUncheckedUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    authorId: number
    categoryId: number
  }

  export type ArtworkUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
  }

  export type ArtworkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    artworks?: ArtworkCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    artworks?: ArtworkUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    artworks?: ArtworkUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artworks?: ArtworkUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagCreateInput = {
    name: string
    artworks?: ArtworkHashtagCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUncheckedCreateInput = {
    id?: number
    name: string
    artworks?: ArtworkHashtagUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    artworks?: ArtworkHashtagUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artworks?: ArtworkHashtagUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagCreateManyInput = {
    id?: number
    name: string
  }

  export type HashtagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtworkHashtagCreateInput = {
    artwork: ArtworkCreateNestedOneWithoutHashtagsInput
    hashtag: HashtagCreateNestedOneWithoutArtworksInput
  }

  export type ArtworkHashtagUncheckedCreateInput = {
    artworkId: number
    hashtagId: number
  }

  export type ArtworkHashtagUpdateInput = {
    artwork?: ArtworkUpdateOneRequiredWithoutHashtagsNestedInput
    hashtag?: HashtagUpdateOneRequiredWithoutArtworksNestedInput
  }

  export type ArtworkHashtagUncheckedUpdateInput = {
    artworkId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtworkHashtagCreateManyInput = {
    artworkId: number
    hashtagId: number
  }

  export type ArtworkHashtagUpdateManyMutationInput = {

  }

  export type ArtworkHashtagUncheckedUpdateManyInput = {
    artworkId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    content: string
    image_user: string
    parentId?: number | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    artwork: ArtworkCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    content: string
    image_user: string
    parentId?: number | null
    authorId: number
    artworkId: number
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    artwork?: ArtworkUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    artworkId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    content: string
    image_user: string
    parentId?: number | null
    authorId: number
    artworkId: number
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    artworkId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionTypeCreateInput = {
    name: string
    reactions?: ReactionCreateNestedManyWithoutReactionTypeInput
  }

  export type ReactionTypeUncheckedCreateInput = {
    id?: number
    name: string
    reactions?: ReactionUncheckedCreateNestedManyWithoutReactionTypeInput
  }

  export type ReactionTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    reactions?: ReactionUpdateManyWithoutReactionTypeNestedInput
  }

  export type ReactionTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reactions?: ReactionUncheckedUpdateManyWithoutReactionTypeNestedInput
  }

  export type ReactionTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type ReactionTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
    artwork: ArtworkCreateNestedOneWithoutReactionsInput
    reactionType: ReactionTypeCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateInput = {
    userId: number
    artworkId: number
    reactionTypeId: number
    createdAt?: Date | string
  }

  export type ReactionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
    artwork?: ArtworkUpdateOneRequiredWithoutReactionsNestedInput
    reactionType?: ReactionTypeUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    artworkId?: IntFieldUpdateOperationsInput | number
    reactionTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateManyInput = {
    userId: number
    artworkId: number
    reactionTypeId: number
    createdAt?: Date | string
  }

  export type ReactionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    artworkId?: IntFieldUpdateOperationsInput | number
    reactionTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowsCreateInput = {
    follower: UserCreateNestedOneWithoutFollowingInput
    following: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowsUncheckedCreateInput = {
    followerId: number
    followingId: number
  }

  export type FollowsUpdateInput = {
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowsUncheckedUpdateInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowsCreateManyInput = {
    followerId: number
    followingId: number
  }

  export type FollowsUpdateManyMutationInput = {

  }

  export type FollowsUncheckedUpdateManyInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ArtworkListRelationFilter = {
    every?: ArtworkWhereInput
    some?: ArtworkWhereInput
    none?: ArtworkWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type FollowsListRelationFilter = {
    every?: FollowsWhereInput
    some?: FollowsWhereInput
    none?: FollowsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArtworkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ArtworkHashtagListRelationFilter = {
    every?: ArtworkHashtagWhereInput
    some?: ArtworkHashtagWhereInput
    none?: ArtworkHashtagWhereInput
  }

  export type ArtworkHashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtworkOrderByRelevanceInput = {
    fields: ArtworkOrderByRelevanceFieldEnum | ArtworkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArtworkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dimensions?: SortOrder
    imageUrls?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type ArtworkAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type ArtworkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dimensions?: SortOrder
    imageUrls?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type ArtworkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dimensions?: SortOrder
    imageUrls?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type ArtworkSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashtagOrderByRelevanceInput = {
    fields: HashtagOrderByRelevanceFieldEnum | HashtagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HashtagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HashtagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HashtagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HashtagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtworkScalarRelationFilter = {
    is?: ArtworkWhereInput
    isNot?: ArtworkWhereInput
  }

  export type HashtagScalarRelationFilter = {
    is?: HashtagWhereInput
    isNot?: HashtagWhereInput
  }

  export type ArtworkHashtagArtworkIdHashtagIdCompoundUniqueInput = {
    artworkId: number
    hashtagId: number
  }

  export type ArtworkHashtagCountOrderByAggregateInput = {
    artworkId?: SortOrder
    hashtagId?: SortOrder
  }

  export type ArtworkHashtagAvgOrderByAggregateInput = {
    artworkId?: SortOrder
    hashtagId?: SortOrder
  }

  export type ArtworkHashtagMaxOrderByAggregateInput = {
    artworkId?: SortOrder
    hashtagId?: SortOrder
  }

  export type ArtworkHashtagMinOrderByAggregateInput = {
    artworkId?: SortOrder
    hashtagId?: SortOrder
  }

  export type ArtworkHashtagSumOrderByAggregateInput = {
    artworkId?: SortOrder
    hashtagId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    image_user?: SortOrder
    parentId?: SortOrder
    authorId?: SortOrder
    artworkId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    authorId?: SortOrder
    artworkId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    image_user?: SortOrder
    parentId?: SortOrder
    authorId?: SortOrder
    artworkId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    image_user?: SortOrder
    parentId?: SortOrder
    authorId?: SortOrder
    artworkId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    authorId?: SortOrder
    artworkId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type ReactionTypeOrderByRelevanceInput = {
    fields: ReactionTypeOrderByRelevanceFieldEnum | ReactionTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReactionTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ReactionTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReactionTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ReactionTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ReactionTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReactionTypeScalarRelationFilter = {
    is?: ReactionTypeWhereInput
    isNot?: ReactionTypeWhereInput
  }

  export type ReactionUserIdArtworkIdCompoundUniqueInput = {
    userId: number
    artworkId: number
  }

  export type ReactionCountOrderByAggregateInput = {
    userId?: SortOrder
    artworkId?: SortOrder
    reactionTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReactionAvgOrderByAggregateInput = {
    userId?: SortOrder
    artworkId?: SortOrder
    reactionTypeId?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    userId?: SortOrder
    artworkId?: SortOrder
    reactionTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    userId?: SortOrder
    artworkId?: SortOrder
    reactionTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReactionSumOrderByAggregateInput = {
    userId?: SortOrder
    artworkId?: SortOrder
    reactionTypeId?: SortOrder
  }

  export type FollowsFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: number
    followingId: number
  }

  export type FollowsCountOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowsAvgOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowsMaxOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowsMinOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowsSumOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type ArtworkCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArtworkCreateWithoutAuthorInput, ArtworkUncheckedCreateWithoutAuthorInput> | ArtworkCreateWithoutAuthorInput[] | ArtworkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArtworkCreateOrConnectWithoutAuthorInput | ArtworkCreateOrConnectWithoutAuthorInput[]
    createMany?: ArtworkCreateManyAuthorInputEnvelope
    connect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type FollowsCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type FollowsCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type ArtworkUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArtworkCreateWithoutAuthorInput, ArtworkUncheckedCreateWithoutAuthorInput> | ArtworkCreateWithoutAuthorInput[] | ArtworkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArtworkCreateOrConnectWithoutAuthorInput | ArtworkCreateOrConnectWithoutAuthorInput[]
    createMany?: ArtworkCreateManyAuthorInputEnvelope
    connect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type FollowsUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type FollowsUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type ArtworkUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArtworkCreateWithoutAuthorInput, ArtworkUncheckedCreateWithoutAuthorInput> | ArtworkCreateWithoutAuthorInput[] | ArtworkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArtworkCreateOrConnectWithoutAuthorInput | ArtworkCreateOrConnectWithoutAuthorInput[]
    upsert?: ArtworkUpsertWithWhereUniqueWithoutAuthorInput | ArtworkUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArtworkCreateManyAuthorInputEnvelope
    set?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    disconnect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    delete?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    connect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    update?: ArtworkUpdateWithWhereUniqueWithoutAuthorInput | ArtworkUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArtworkUpdateManyWithWhereWithoutAuthorInput | ArtworkUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArtworkScalarWhereInput | ArtworkScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type FollowsUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowerInput | FollowsUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowerInput | FollowsUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowerInput | FollowsUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type FollowsUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput | FollowsUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput | FollowsUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput | FollowsUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArtworkUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArtworkCreateWithoutAuthorInput, ArtworkUncheckedCreateWithoutAuthorInput> | ArtworkCreateWithoutAuthorInput[] | ArtworkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArtworkCreateOrConnectWithoutAuthorInput | ArtworkCreateOrConnectWithoutAuthorInput[]
    upsert?: ArtworkUpsertWithWhereUniqueWithoutAuthorInput | ArtworkUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArtworkCreateManyAuthorInputEnvelope
    set?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    disconnect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    delete?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    connect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    update?: ArtworkUpdateWithWhereUniqueWithoutAuthorInput | ArtworkUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArtworkUpdateManyWithWhereWithoutAuthorInput | ArtworkUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArtworkScalarWhereInput | ArtworkScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type FollowsUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowerInput | FollowsUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowerInput | FollowsUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowerInput | FollowsUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type FollowsUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput | FollowsUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput | FollowsUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput | FollowsUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutArtworksInput = {
    create?: XOR<UserCreateWithoutArtworksInput, UserUncheckedCreateWithoutArtworksInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtworksInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutArtworksInput = {
    create?: XOR<CategoryCreateWithoutArtworksInput, CategoryUncheckedCreateWithoutArtworksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArtworksInput
    connect?: CategoryWhereUniqueInput
  }

  export type ArtworkHashtagCreateNestedManyWithoutArtworkInput = {
    create?: XOR<ArtworkHashtagCreateWithoutArtworkInput, ArtworkHashtagUncheckedCreateWithoutArtworkInput> | ArtworkHashtagCreateWithoutArtworkInput[] | ArtworkHashtagUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: ArtworkHashtagCreateOrConnectWithoutArtworkInput | ArtworkHashtagCreateOrConnectWithoutArtworkInput[]
    createMany?: ArtworkHashtagCreateManyArtworkInputEnvelope
    connect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutArtworkInput = {
    create?: XOR<ReactionCreateWithoutArtworkInput, ReactionUncheckedCreateWithoutArtworkInput> | ReactionCreateWithoutArtworkInput[] | ReactionUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutArtworkInput | ReactionCreateOrConnectWithoutArtworkInput[]
    createMany?: ReactionCreateManyArtworkInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutArtworkInput = {
    create?: XOR<CommentCreateWithoutArtworkInput, CommentUncheckedCreateWithoutArtworkInput> | CommentCreateWithoutArtworkInput[] | CommentUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArtworkInput | CommentCreateOrConnectWithoutArtworkInput[]
    createMany?: CommentCreateManyArtworkInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ArtworkHashtagUncheckedCreateNestedManyWithoutArtworkInput = {
    create?: XOR<ArtworkHashtagCreateWithoutArtworkInput, ArtworkHashtagUncheckedCreateWithoutArtworkInput> | ArtworkHashtagCreateWithoutArtworkInput[] | ArtworkHashtagUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: ArtworkHashtagCreateOrConnectWithoutArtworkInput | ArtworkHashtagCreateOrConnectWithoutArtworkInput[]
    createMany?: ArtworkHashtagCreateManyArtworkInputEnvelope
    connect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutArtworkInput = {
    create?: XOR<ReactionCreateWithoutArtworkInput, ReactionUncheckedCreateWithoutArtworkInput> | ReactionCreateWithoutArtworkInput[] | ReactionUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutArtworkInput | ReactionCreateOrConnectWithoutArtworkInput[]
    createMany?: ReactionCreateManyArtworkInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutArtworkInput = {
    create?: XOR<CommentCreateWithoutArtworkInput, CommentUncheckedCreateWithoutArtworkInput> | CommentCreateWithoutArtworkInput[] | CommentUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArtworkInput | CommentCreateOrConnectWithoutArtworkInput[]
    createMany?: CommentCreateManyArtworkInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutArtworksNestedInput = {
    create?: XOR<UserCreateWithoutArtworksInput, UserUncheckedCreateWithoutArtworksInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtworksInput
    upsert?: UserUpsertWithoutArtworksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtworksInput, UserUpdateWithoutArtworksInput>, UserUncheckedUpdateWithoutArtworksInput>
  }

  export type CategoryUpdateOneRequiredWithoutArtworksNestedInput = {
    create?: XOR<CategoryCreateWithoutArtworksInput, CategoryUncheckedCreateWithoutArtworksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArtworksInput
    upsert?: CategoryUpsertWithoutArtworksInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutArtworksInput, CategoryUpdateWithoutArtworksInput>, CategoryUncheckedUpdateWithoutArtworksInput>
  }

  export type ArtworkHashtagUpdateManyWithoutArtworkNestedInput = {
    create?: XOR<ArtworkHashtagCreateWithoutArtworkInput, ArtworkHashtagUncheckedCreateWithoutArtworkInput> | ArtworkHashtagCreateWithoutArtworkInput[] | ArtworkHashtagUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: ArtworkHashtagCreateOrConnectWithoutArtworkInput | ArtworkHashtagCreateOrConnectWithoutArtworkInput[]
    upsert?: ArtworkHashtagUpsertWithWhereUniqueWithoutArtworkInput | ArtworkHashtagUpsertWithWhereUniqueWithoutArtworkInput[]
    createMany?: ArtworkHashtagCreateManyArtworkInputEnvelope
    set?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    disconnect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    delete?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    connect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    update?: ArtworkHashtagUpdateWithWhereUniqueWithoutArtworkInput | ArtworkHashtagUpdateWithWhereUniqueWithoutArtworkInput[]
    updateMany?: ArtworkHashtagUpdateManyWithWhereWithoutArtworkInput | ArtworkHashtagUpdateManyWithWhereWithoutArtworkInput[]
    deleteMany?: ArtworkHashtagScalarWhereInput | ArtworkHashtagScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutArtworkNestedInput = {
    create?: XOR<ReactionCreateWithoutArtworkInput, ReactionUncheckedCreateWithoutArtworkInput> | ReactionCreateWithoutArtworkInput[] | ReactionUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutArtworkInput | ReactionCreateOrConnectWithoutArtworkInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutArtworkInput | ReactionUpsertWithWhereUniqueWithoutArtworkInput[]
    createMany?: ReactionCreateManyArtworkInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutArtworkInput | ReactionUpdateWithWhereUniqueWithoutArtworkInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutArtworkInput | ReactionUpdateManyWithWhereWithoutArtworkInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutArtworkNestedInput = {
    create?: XOR<CommentCreateWithoutArtworkInput, CommentUncheckedCreateWithoutArtworkInput> | CommentCreateWithoutArtworkInput[] | CommentUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArtworkInput | CommentCreateOrConnectWithoutArtworkInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArtworkInput | CommentUpsertWithWhereUniqueWithoutArtworkInput[]
    createMany?: CommentCreateManyArtworkInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArtworkInput | CommentUpdateWithWhereUniqueWithoutArtworkInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArtworkInput | CommentUpdateManyWithWhereWithoutArtworkInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ArtworkHashtagUncheckedUpdateManyWithoutArtworkNestedInput = {
    create?: XOR<ArtworkHashtagCreateWithoutArtworkInput, ArtworkHashtagUncheckedCreateWithoutArtworkInput> | ArtworkHashtagCreateWithoutArtworkInput[] | ArtworkHashtagUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: ArtworkHashtagCreateOrConnectWithoutArtworkInput | ArtworkHashtagCreateOrConnectWithoutArtworkInput[]
    upsert?: ArtworkHashtagUpsertWithWhereUniqueWithoutArtworkInput | ArtworkHashtagUpsertWithWhereUniqueWithoutArtworkInput[]
    createMany?: ArtworkHashtagCreateManyArtworkInputEnvelope
    set?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    disconnect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    delete?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    connect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    update?: ArtworkHashtagUpdateWithWhereUniqueWithoutArtworkInput | ArtworkHashtagUpdateWithWhereUniqueWithoutArtworkInput[]
    updateMany?: ArtworkHashtagUpdateManyWithWhereWithoutArtworkInput | ArtworkHashtagUpdateManyWithWhereWithoutArtworkInput[]
    deleteMany?: ArtworkHashtagScalarWhereInput | ArtworkHashtagScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutArtworkNestedInput = {
    create?: XOR<ReactionCreateWithoutArtworkInput, ReactionUncheckedCreateWithoutArtworkInput> | ReactionCreateWithoutArtworkInput[] | ReactionUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutArtworkInput | ReactionCreateOrConnectWithoutArtworkInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutArtworkInput | ReactionUpsertWithWhereUniqueWithoutArtworkInput[]
    createMany?: ReactionCreateManyArtworkInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutArtworkInput | ReactionUpdateWithWhereUniqueWithoutArtworkInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutArtworkInput | ReactionUpdateManyWithWhereWithoutArtworkInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutArtworkNestedInput = {
    create?: XOR<CommentCreateWithoutArtworkInput, CommentUncheckedCreateWithoutArtworkInput> | CommentCreateWithoutArtworkInput[] | CommentUncheckedCreateWithoutArtworkInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArtworkInput | CommentCreateOrConnectWithoutArtworkInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArtworkInput | CommentUpsertWithWhereUniqueWithoutArtworkInput[]
    createMany?: CommentCreateManyArtworkInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArtworkInput | CommentUpdateWithWhereUniqueWithoutArtworkInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArtworkInput | CommentUpdateManyWithWhereWithoutArtworkInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ArtworkCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ArtworkCreateWithoutCategoryInput, ArtworkUncheckedCreateWithoutCategoryInput> | ArtworkCreateWithoutCategoryInput[] | ArtworkUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArtworkCreateOrConnectWithoutCategoryInput | ArtworkCreateOrConnectWithoutCategoryInput[]
    createMany?: ArtworkCreateManyCategoryInputEnvelope
    connect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
  }

  export type ArtworkUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ArtworkCreateWithoutCategoryInput, ArtworkUncheckedCreateWithoutCategoryInput> | ArtworkCreateWithoutCategoryInput[] | ArtworkUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArtworkCreateOrConnectWithoutCategoryInput | ArtworkCreateOrConnectWithoutCategoryInput[]
    createMany?: ArtworkCreateManyCategoryInputEnvelope
    connect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
  }

  export type ArtworkUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ArtworkCreateWithoutCategoryInput, ArtworkUncheckedCreateWithoutCategoryInput> | ArtworkCreateWithoutCategoryInput[] | ArtworkUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArtworkCreateOrConnectWithoutCategoryInput | ArtworkCreateOrConnectWithoutCategoryInput[]
    upsert?: ArtworkUpsertWithWhereUniqueWithoutCategoryInput | ArtworkUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ArtworkCreateManyCategoryInputEnvelope
    set?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    disconnect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    delete?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    connect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    update?: ArtworkUpdateWithWhereUniqueWithoutCategoryInput | ArtworkUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ArtworkUpdateManyWithWhereWithoutCategoryInput | ArtworkUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ArtworkScalarWhereInput | ArtworkScalarWhereInput[]
  }

  export type ArtworkUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ArtworkCreateWithoutCategoryInput, ArtworkUncheckedCreateWithoutCategoryInput> | ArtworkCreateWithoutCategoryInput[] | ArtworkUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArtworkCreateOrConnectWithoutCategoryInput | ArtworkCreateOrConnectWithoutCategoryInput[]
    upsert?: ArtworkUpsertWithWhereUniqueWithoutCategoryInput | ArtworkUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ArtworkCreateManyCategoryInputEnvelope
    set?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    disconnect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    delete?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    connect?: ArtworkWhereUniqueInput | ArtworkWhereUniqueInput[]
    update?: ArtworkUpdateWithWhereUniqueWithoutCategoryInput | ArtworkUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ArtworkUpdateManyWithWhereWithoutCategoryInput | ArtworkUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ArtworkScalarWhereInput | ArtworkScalarWhereInput[]
  }

  export type ArtworkHashtagCreateNestedManyWithoutHashtagInput = {
    create?: XOR<ArtworkHashtagCreateWithoutHashtagInput, ArtworkHashtagUncheckedCreateWithoutHashtagInput> | ArtworkHashtagCreateWithoutHashtagInput[] | ArtworkHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: ArtworkHashtagCreateOrConnectWithoutHashtagInput | ArtworkHashtagCreateOrConnectWithoutHashtagInput[]
    createMany?: ArtworkHashtagCreateManyHashtagInputEnvelope
    connect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
  }

  export type ArtworkHashtagUncheckedCreateNestedManyWithoutHashtagInput = {
    create?: XOR<ArtworkHashtagCreateWithoutHashtagInput, ArtworkHashtagUncheckedCreateWithoutHashtagInput> | ArtworkHashtagCreateWithoutHashtagInput[] | ArtworkHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: ArtworkHashtagCreateOrConnectWithoutHashtagInput | ArtworkHashtagCreateOrConnectWithoutHashtagInput[]
    createMany?: ArtworkHashtagCreateManyHashtagInputEnvelope
    connect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
  }

  export type ArtworkHashtagUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<ArtworkHashtagCreateWithoutHashtagInput, ArtworkHashtagUncheckedCreateWithoutHashtagInput> | ArtworkHashtagCreateWithoutHashtagInput[] | ArtworkHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: ArtworkHashtagCreateOrConnectWithoutHashtagInput | ArtworkHashtagCreateOrConnectWithoutHashtagInput[]
    upsert?: ArtworkHashtagUpsertWithWhereUniqueWithoutHashtagInput | ArtworkHashtagUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: ArtworkHashtagCreateManyHashtagInputEnvelope
    set?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    disconnect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    delete?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    connect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    update?: ArtworkHashtagUpdateWithWhereUniqueWithoutHashtagInput | ArtworkHashtagUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: ArtworkHashtagUpdateManyWithWhereWithoutHashtagInput | ArtworkHashtagUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: ArtworkHashtagScalarWhereInput | ArtworkHashtagScalarWhereInput[]
  }

  export type ArtworkHashtagUncheckedUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<ArtworkHashtagCreateWithoutHashtagInput, ArtworkHashtagUncheckedCreateWithoutHashtagInput> | ArtworkHashtagCreateWithoutHashtagInput[] | ArtworkHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: ArtworkHashtagCreateOrConnectWithoutHashtagInput | ArtworkHashtagCreateOrConnectWithoutHashtagInput[]
    upsert?: ArtworkHashtagUpsertWithWhereUniqueWithoutHashtagInput | ArtworkHashtagUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: ArtworkHashtagCreateManyHashtagInputEnvelope
    set?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    disconnect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    delete?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    connect?: ArtworkHashtagWhereUniqueInput | ArtworkHashtagWhereUniqueInput[]
    update?: ArtworkHashtagUpdateWithWhereUniqueWithoutHashtagInput | ArtworkHashtagUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: ArtworkHashtagUpdateManyWithWhereWithoutHashtagInput | ArtworkHashtagUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: ArtworkHashtagScalarWhereInput | ArtworkHashtagScalarWhereInput[]
  }

  export type ArtworkCreateNestedOneWithoutHashtagsInput = {
    create?: XOR<ArtworkCreateWithoutHashtagsInput, ArtworkUncheckedCreateWithoutHashtagsInput>
    connectOrCreate?: ArtworkCreateOrConnectWithoutHashtagsInput
    connect?: ArtworkWhereUniqueInput
  }

  export type HashtagCreateNestedOneWithoutArtworksInput = {
    create?: XOR<HashtagCreateWithoutArtworksInput, HashtagUncheckedCreateWithoutArtworksInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutArtworksInput
    connect?: HashtagWhereUniqueInput
  }

  export type ArtworkUpdateOneRequiredWithoutHashtagsNestedInput = {
    create?: XOR<ArtworkCreateWithoutHashtagsInput, ArtworkUncheckedCreateWithoutHashtagsInput>
    connectOrCreate?: ArtworkCreateOrConnectWithoutHashtagsInput
    upsert?: ArtworkUpsertWithoutHashtagsInput
    connect?: ArtworkWhereUniqueInput
    update?: XOR<XOR<ArtworkUpdateToOneWithWhereWithoutHashtagsInput, ArtworkUpdateWithoutHashtagsInput>, ArtworkUncheckedUpdateWithoutHashtagsInput>
  }

  export type HashtagUpdateOneRequiredWithoutArtworksNestedInput = {
    create?: XOR<HashtagCreateWithoutArtworksInput, HashtagUncheckedCreateWithoutArtworksInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutArtworksInput
    upsert?: HashtagUpsertWithoutArtworksInput
    connect?: HashtagWhereUniqueInput
    update?: XOR<XOR<HashtagUpdateToOneWithWhereWithoutArtworksInput, HashtagUpdateWithoutArtworksInput>, HashtagUncheckedUpdateWithoutArtworksInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtworkCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ArtworkCreateWithoutCommentsInput, ArtworkUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArtworkCreateOrConnectWithoutCommentsInput
    connect?: ArtworkWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type ArtworkUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ArtworkCreateWithoutCommentsInput, ArtworkUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArtworkCreateOrConnectWithoutCommentsInput
    upsert?: ArtworkUpsertWithoutCommentsInput
    connect?: ArtworkWhereUniqueInput
    update?: XOR<XOR<ArtworkUpdateToOneWithWhereWithoutCommentsInput, ArtworkUpdateWithoutCommentsInput>, ArtworkUncheckedUpdateWithoutCommentsInput>
  }

  export type ReactionCreateNestedManyWithoutReactionTypeInput = {
    create?: XOR<ReactionCreateWithoutReactionTypeInput, ReactionUncheckedCreateWithoutReactionTypeInput> | ReactionCreateWithoutReactionTypeInput[] | ReactionUncheckedCreateWithoutReactionTypeInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutReactionTypeInput | ReactionCreateOrConnectWithoutReactionTypeInput[]
    createMany?: ReactionCreateManyReactionTypeInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutReactionTypeInput = {
    create?: XOR<ReactionCreateWithoutReactionTypeInput, ReactionUncheckedCreateWithoutReactionTypeInput> | ReactionCreateWithoutReactionTypeInput[] | ReactionUncheckedCreateWithoutReactionTypeInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutReactionTypeInput | ReactionCreateOrConnectWithoutReactionTypeInput[]
    createMany?: ReactionCreateManyReactionTypeInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type ReactionUpdateManyWithoutReactionTypeNestedInput = {
    create?: XOR<ReactionCreateWithoutReactionTypeInput, ReactionUncheckedCreateWithoutReactionTypeInput> | ReactionCreateWithoutReactionTypeInput[] | ReactionUncheckedCreateWithoutReactionTypeInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutReactionTypeInput | ReactionCreateOrConnectWithoutReactionTypeInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutReactionTypeInput | ReactionUpsertWithWhereUniqueWithoutReactionTypeInput[]
    createMany?: ReactionCreateManyReactionTypeInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutReactionTypeInput | ReactionUpdateWithWhereUniqueWithoutReactionTypeInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutReactionTypeInput | ReactionUpdateManyWithWhereWithoutReactionTypeInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutReactionTypeNestedInput = {
    create?: XOR<ReactionCreateWithoutReactionTypeInput, ReactionUncheckedCreateWithoutReactionTypeInput> | ReactionCreateWithoutReactionTypeInput[] | ReactionUncheckedCreateWithoutReactionTypeInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutReactionTypeInput | ReactionCreateOrConnectWithoutReactionTypeInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutReactionTypeInput | ReactionUpsertWithWhereUniqueWithoutReactionTypeInput[]
    createMany?: ReactionCreateManyReactionTypeInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutReactionTypeInput | ReactionUpdateWithWhereUniqueWithoutReactionTypeInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutReactionTypeInput | ReactionUpdateManyWithWhereWithoutReactionTypeInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtworkCreateNestedOneWithoutReactionsInput = {
    create?: XOR<ArtworkCreateWithoutReactionsInput, ArtworkUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ArtworkCreateOrConnectWithoutReactionsInput
    connect?: ArtworkWhereUniqueInput
  }

  export type ReactionTypeCreateNestedOneWithoutReactionsInput = {
    create?: XOR<ReactionTypeCreateWithoutReactionsInput, ReactionTypeUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ReactionTypeCreateOrConnectWithoutReactionsInput
    connect?: ReactionTypeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type ArtworkUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<ArtworkCreateWithoutReactionsInput, ArtworkUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ArtworkCreateOrConnectWithoutReactionsInput
    upsert?: ArtworkUpsertWithoutReactionsInput
    connect?: ArtworkWhereUniqueInput
    update?: XOR<XOR<ArtworkUpdateToOneWithWhereWithoutReactionsInput, ArtworkUpdateWithoutReactionsInput>, ArtworkUncheckedUpdateWithoutReactionsInput>
  }

  export type ReactionTypeUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<ReactionTypeCreateWithoutReactionsInput, ReactionTypeUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ReactionTypeCreateOrConnectWithoutReactionsInput
    upsert?: ReactionTypeUpsertWithoutReactionsInput
    connect?: ReactionTypeWhereUniqueInput
    update?: XOR<XOR<ReactionTypeUpdateToOneWithWhereWithoutReactionsInput, ReactionTypeUpdateWithoutReactionsInput>, ReactionTypeUncheckedUpdateWithoutReactionsInput>
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type RoleCreateWithoutUsersInput = {
    name: string
    description?: string | null
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type ArtworkCreateWithoutAuthorInput = {
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    category: CategoryCreateNestedOneWithoutArtworksInput
    hashtags?: ArtworkHashtagCreateNestedManyWithoutArtworkInput
    reactions?: ReactionCreateNestedManyWithoutArtworkInput
    comments?: CommentCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    categoryId: number
    hashtags?: ArtworkHashtagUncheckedCreateNestedManyWithoutArtworkInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutArtworkInput
    comments?: CommentUncheckedCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkCreateOrConnectWithoutAuthorInput = {
    where: ArtworkWhereUniqueInput
    create: XOR<ArtworkCreateWithoutAuthorInput, ArtworkUncheckedCreateWithoutAuthorInput>
  }

  export type ArtworkCreateManyAuthorInputEnvelope = {
    data: ArtworkCreateManyAuthorInput | ArtworkCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    content: string
    image_user: string
    parentId?: number | null
    createdAt?: Date | string
    artwork: ArtworkCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    image_user: string
    parentId?: number | null
    artworkId: number
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutUserInput = {
    createdAt?: Date | string
    artwork: ArtworkCreateNestedOneWithoutReactionsInput
    reactionType: ReactionTypeCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutUserInput = {
    artworkId: number
    reactionTypeId: number
    createdAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutUserInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionCreateManyUserInputEnvelope = {
    data: ReactionCreateManyUserInput | ReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowsCreateWithoutFollowerInput = {
    following: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowsUncheckedCreateWithoutFollowerInput = {
    followingId: number
  }

  export type FollowsCreateOrConnectWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput>
  }

  export type FollowsCreateManyFollowerInputEnvelope = {
    data: FollowsCreateManyFollowerInput | FollowsCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type FollowsCreateWithoutFollowingInput = {
    follower: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowsUncheckedCreateWithoutFollowingInput = {
    followerId: number
  }

  export type FollowsCreateOrConnectWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput>
  }

  export type FollowsCreateManyFollowingInputEnvelope = {
    data: FollowsCreateManyFollowingInput | FollowsCreateManyFollowingInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtworkUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ArtworkWhereUniqueInput
    update: XOR<ArtworkUpdateWithoutAuthorInput, ArtworkUncheckedUpdateWithoutAuthorInput>
    create: XOR<ArtworkCreateWithoutAuthorInput, ArtworkUncheckedCreateWithoutAuthorInput>
  }

  export type ArtworkUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ArtworkWhereUniqueInput
    data: XOR<ArtworkUpdateWithoutAuthorInput, ArtworkUncheckedUpdateWithoutAuthorInput>
  }

  export type ArtworkUpdateManyWithWhereWithoutAuthorInput = {
    where: ArtworkScalarWhereInput
    data: XOR<ArtworkUpdateManyMutationInput, ArtworkUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ArtworkScalarWhereInput = {
    AND?: ArtworkScalarWhereInput | ArtworkScalarWhereInput[]
    OR?: ArtworkScalarWhereInput[]
    NOT?: ArtworkScalarWhereInput | ArtworkScalarWhereInput[]
    id?: IntFilter<"Artwork"> | number
    title?: StringFilter<"Artwork"> | string
    description?: StringNullableFilter<"Artwork"> | string | null
    price?: FloatNullableFilter<"Artwork"> | number | null
    status?: StringFilter<"Artwork"> | string
    createdAt?: DateTimeFilter<"Artwork"> | Date | string
    updatedAt?: DateTimeFilter<"Artwork"> | Date | string
    dimensions?: StringNullableFilter<"Artwork"> | string | null
    imageUrls?: StringFilter<"Artwork"> | string
    authorId?: IntFilter<"Artwork"> | number
    categoryId?: IntFilter<"Artwork"> | number
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    image_user?: StringFilter<"Comment"> | string
    parentId?: IntNullableFilter<"Comment"> | number | null
    authorId?: IntFilter<"Comment"> | number
    artworkId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
  }

  export type ReactionUpdateManyWithWhereWithoutUserInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    userId?: IntFilter<"Reaction"> | number
    artworkId?: IntFilter<"Reaction"> | number
    reactionTypeId?: IntFilter<"Reaction"> | number
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
  }

  export type FollowsUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutFollowerInput, FollowsUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutFollowerInput, FollowsUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowsUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutFollowerInput>
  }

  export type FollowsScalarWhereInput = {
    AND?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    OR?: FollowsScalarWhereInput[]
    NOT?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    followerId?: IntFilter<"Follows"> | number
    followingId?: IntFilter<"Follows"> | number
  }

  export type FollowsUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutFollowingInput, FollowsUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutFollowingInput, FollowsUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowsUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutFollowingInput>
  }

  export type UserCreateWithoutRoleInput = {
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    artworks?: ArtworkCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    artworks?: ArtworkUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    roleId?: IntFilter<"User"> | number
  }

  export type UserCreateWithoutArtworksInput = {
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutArtworksInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    roleId: number
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutArtworksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtworksInput, UserUncheckedCreateWithoutArtworksInput>
  }

  export type CategoryCreateWithoutArtworksInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutArtworksInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutArtworksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutArtworksInput, CategoryUncheckedCreateWithoutArtworksInput>
  }

  export type ArtworkHashtagCreateWithoutArtworkInput = {
    hashtag: HashtagCreateNestedOneWithoutArtworksInput
  }

  export type ArtworkHashtagUncheckedCreateWithoutArtworkInput = {
    hashtagId: number
  }

  export type ArtworkHashtagCreateOrConnectWithoutArtworkInput = {
    where: ArtworkHashtagWhereUniqueInput
    create: XOR<ArtworkHashtagCreateWithoutArtworkInput, ArtworkHashtagUncheckedCreateWithoutArtworkInput>
  }

  export type ArtworkHashtagCreateManyArtworkInputEnvelope = {
    data: ArtworkHashtagCreateManyArtworkInput | ArtworkHashtagCreateManyArtworkInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutArtworkInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
    reactionType: ReactionTypeCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutArtworkInput = {
    userId: number
    reactionTypeId: number
    createdAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutArtworkInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutArtworkInput, ReactionUncheckedCreateWithoutArtworkInput>
  }

  export type ReactionCreateManyArtworkInputEnvelope = {
    data: ReactionCreateManyArtworkInput | ReactionCreateManyArtworkInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutArtworkInput = {
    content: string
    image_user: string
    parentId?: number | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutArtworkInput = {
    id?: number
    content: string
    image_user: string
    parentId?: number | null
    authorId: number
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutArtworkInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutArtworkInput, CommentUncheckedCreateWithoutArtworkInput>
  }

  export type CommentCreateManyArtworkInputEnvelope = {
    data: CommentCreateManyArtworkInput | CommentCreateManyArtworkInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArtworksInput = {
    update: XOR<UserUpdateWithoutArtworksInput, UserUncheckedUpdateWithoutArtworksInput>
    create: XOR<UserCreateWithoutArtworksInput, UserUncheckedCreateWithoutArtworksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArtworksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArtworksInput, UserUncheckedUpdateWithoutArtworksInput>
  }

  export type UserUpdateWithoutArtworksInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutArtworksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type CategoryUpsertWithoutArtworksInput = {
    update: XOR<CategoryUpdateWithoutArtworksInput, CategoryUncheckedUpdateWithoutArtworksInput>
    create: XOR<CategoryCreateWithoutArtworksInput, CategoryUncheckedCreateWithoutArtworksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutArtworksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutArtworksInput, CategoryUncheckedUpdateWithoutArtworksInput>
  }

  export type CategoryUpdateWithoutArtworksInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutArtworksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtworkHashtagUpsertWithWhereUniqueWithoutArtworkInput = {
    where: ArtworkHashtagWhereUniqueInput
    update: XOR<ArtworkHashtagUpdateWithoutArtworkInput, ArtworkHashtagUncheckedUpdateWithoutArtworkInput>
    create: XOR<ArtworkHashtagCreateWithoutArtworkInput, ArtworkHashtagUncheckedCreateWithoutArtworkInput>
  }

  export type ArtworkHashtagUpdateWithWhereUniqueWithoutArtworkInput = {
    where: ArtworkHashtagWhereUniqueInput
    data: XOR<ArtworkHashtagUpdateWithoutArtworkInput, ArtworkHashtagUncheckedUpdateWithoutArtworkInput>
  }

  export type ArtworkHashtagUpdateManyWithWhereWithoutArtworkInput = {
    where: ArtworkHashtagScalarWhereInput
    data: XOR<ArtworkHashtagUpdateManyMutationInput, ArtworkHashtagUncheckedUpdateManyWithoutArtworkInput>
  }

  export type ArtworkHashtagScalarWhereInput = {
    AND?: ArtworkHashtagScalarWhereInput | ArtworkHashtagScalarWhereInput[]
    OR?: ArtworkHashtagScalarWhereInput[]
    NOT?: ArtworkHashtagScalarWhereInput | ArtworkHashtagScalarWhereInput[]
    artworkId?: IntFilter<"ArtworkHashtag"> | number
    hashtagId?: IntFilter<"ArtworkHashtag"> | number
  }

  export type ReactionUpsertWithWhereUniqueWithoutArtworkInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutArtworkInput, ReactionUncheckedUpdateWithoutArtworkInput>
    create: XOR<ReactionCreateWithoutArtworkInput, ReactionUncheckedCreateWithoutArtworkInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutArtworkInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutArtworkInput, ReactionUncheckedUpdateWithoutArtworkInput>
  }

  export type ReactionUpdateManyWithWhereWithoutArtworkInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutArtworkInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutArtworkInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutArtworkInput, CommentUncheckedUpdateWithoutArtworkInput>
    create: XOR<CommentCreateWithoutArtworkInput, CommentUncheckedCreateWithoutArtworkInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutArtworkInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutArtworkInput, CommentUncheckedUpdateWithoutArtworkInput>
  }

  export type CommentUpdateManyWithWhereWithoutArtworkInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutArtworkInput>
  }

  export type ArtworkCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    author: UserCreateNestedOneWithoutArtworksInput
    hashtags?: ArtworkHashtagCreateNestedManyWithoutArtworkInput
    reactions?: ReactionCreateNestedManyWithoutArtworkInput
    comments?: CommentCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    authorId: number
    hashtags?: ArtworkHashtagUncheckedCreateNestedManyWithoutArtworkInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutArtworkInput
    comments?: CommentUncheckedCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkCreateOrConnectWithoutCategoryInput = {
    where: ArtworkWhereUniqueInput
    create: XOR<ArtworkCreateWithoutCategoryInput, ArtworkUncheckedCreateWithoutCategoryInput>
  }

  export type ArtworkCreateManyCategoryInputEnvelope = {
    data: ArtworkCreateManyCategoryInput | ArtworkCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ArtworkUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ArtworkWhereUniqueInput
    update: XOR<ArtworkUpdateWithoutCategoryInput, ArtworkUncheckedUpdateWithoutCategoryInput>
    create: XOR<ArtworkCreateWithoutCategoryInput, ArtworkUncheckedCreateWithoutCategoryInput>
  }

  export type ArtworkUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ArtworkWhereUniqueInput
    data: XOR<ArtworkUpdateWithoutCategoryInput, ArtworkUncheckedUpdateWithoutCategoryInput>
  }

  export type ArtworkUpdateManyWithWhereWithoutCategoryInput = {
    where: ArtworkScalarWhereInput
    data: XOR<ArtworkUpdateManyMutationInput, ArtworkUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ArtworkHashtagCreateWithoutHashtagInput = {
    artwork: ArtworkCreateNestedOneWithoutHashtagsInput
  }

  export type ArtworkHashtagUncheckedCreateWithoutHashtagInput = {
    artworkId: number
  }

  export type ArtworkHashtagCreateOrConnectWithoutHashtagInput = {
    where: ArtworkHashtagWhereUniqueInput
    create: XOR<ArtworkHashtagCreateWithoutHashtagInput, ArtworkHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type ArtworkHashtagCreateManyHashtagInputEnvelope = {
    data: ArtworkHashtagCreateManyHashtagInput | ArtworkHashtagCreateManyHashtagInput[]
    skipDuplicates?: boolean
  }

  export type ArtworkHashtagUpsertWithWhereUniqueWithoutHashtagInput = {
    where: ArtworkHashtagWhereUniqueInput
    update: XOR<ArtworkHashtagUpdateWithoutHashtagInput, ArtworkHashtagUncheckedUpdateWithoutHashtagInput>
    create: XOR<ArtworkHashtagCreateWithoutHashtagInput, ArtworkHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type ArtworkHashtagUpdateWithWhereUniqueWithoutHashtagInput = {
    where: ArtworkHashtagWhereUniqueInput
    data: XOR<ArtworkHashtagUpdateWithoutHashtagInput, ArtworkHashtagUncheckedUpdateWithoutHashtagInput>
  }

  export type ArtworkHashtagUpdateManyWithWhereWithoutHashtagInput = {
    where: ArtworkHashtagScalarWhereInput
    data: XOR<ArtworkHashtagUpdateManyMutationInput, ArtworkHashtagUncheckedUpdateManyWithoutHashtagInput>
  }

  export type ArtworkCreateWithoutHashtagsInput = {
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    author: UserCreateNestedOneWithoutArtworksInput
    category: CategoryCreateNestedOneWithoutArtworksInput
    reactions?: ReactionCreateNestedManyWithoutArtworkInput
    comments?: CommentCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkUncheckedCreateWithoutHashtagsInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    authorId: number
    categoryId: number
    reactions?: ReactionUncheckedCreateNestedManyWithoutArtworkInput
    comments?: CommentUncheckedCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkCreateOrConnectWithoutHashtagsInput = {
    where: ArtworkWhereUniqueInput
    create: XOR<ArtworkCreateWithoutHashtagsInput, ArtworkUncheckedCreateWithoutHashtagsInput>
  }

  export type HashtagCreateWithoutArtworksInput = {
    name: string
  }

  export type HashtagUncheckedCreateWithoutArtworksInput = {
    id?: number
    name: string
  }

  export type HashtagCreateOrConnectWithoutArtworksInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutArtworksInput, HashtagUncheckedCreateWithoutArtworksInput>
  }

  export type ArtworkUpsertWithoutHashtagsInput = {
    update: XOR<ArtworkUpdateWithoutHashtagsInput, ArtworkUncheckedUpdateWithoutHashtagsInput>
    create: XOR<ArtworkCreateWithoutHashtagsInput, ArtworkUncheckedCreateWithoutHashtagsInput>
    where?: ArtworkWhereInput
  }

  export type ArtworkUpdateToOneWithWhereWithoutHashtagsInput = {
    where?: ArtworkWhereInput
    data: XOR<ArtworkUpdateWithoutHashtagsInput, ArtworkUncheckedUpdateWithoutHashtagsInput>
  }

  export type ArtworkUpdateWithoutHashtagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutArtworksNestedInput
    category?: CategoryUpdateOneRequiredWithoutArtworksNestedInput
    reactions?: ReactionUpdateManyWithoutArtworkNestedInput
    comments?: CommentUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkUncheckedUpdateWithoutHashtagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    reactions?: ReactionUncheckedUpdateManyWithoutArtworkNestedInput
    comments?: CommentUncheckedUpdateManyWithoutArtworkNestedInput
  }

  export type HashtagUpsertWithoutArtworksInput = {
    update: XOR<HashtagUpdateWithoutArtworksInput, HashtagUncheckedUpdateWithoutArtworksInput>
    create: XOR<HashtagCreateWithoutArtworksInput, HashtagUncheckedCreateWithoutArtworksInput>
    where?: HashtagWhereInput
  }

  export type HashtagUpdateToOneWithWhereWithoutArtworksInput = {
    where?: HashtagWhereInput
    data: XOR<HashtagUpdateWithoutArtworksInput, HashtagUncheckedUpdateWithoutArtworksInput>
  }

  export type HashtagUpdateWithoutArtworksInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagUncheckedUpdateWithoutArtworksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutCommentsInput = {
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    artworks?: ArtworkCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    roleId: number
    artworks?: ArtworkUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ArtworkCreateWithoutCommentsInput = {
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    author: UserCreateNestedOneWithoutArtworksInput
    category: CategoryCreateNestedOneWithoutArtworksInput
    hashtags?: ArtworkHashtagCreateNestedManyWithoutArtworkInput
    reactions?: ReactionCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    authorId: number
    categoryId: number
    hashtags?: ArtworkHashtagUncheckedCreateNestedManyWithoutArtworkInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkCreateOrConnectWithoutCommentsInput = {
    where: ArtworkWhereUniqueInput
    create: XOR<ArtworkCreateWithoutCommentsInput, ArtworkUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    artworks?: ArtworkUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    artworks?: ArtworkUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type ArtworkUpsertWithoutCommentsInput = {
    update: XOR<ArtworkUpdateWithoutCommentsInput, ArtworkUncheckedUpdateWithoutCommentsInput>
    create: XOR<ArtworkCreateWithoutCommentsInput, ArtworkUncheckedCreateWithoutCommentsInput>
    where?: ArtworkWhereInput
  }

  export type ArtworkUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ArtworkWhereInput
    data: XOR<ArtworkUpdateWithoutCommentsInput, ArtworkUncheckedUpdateWithoutCommentsInput>
  }

  export type ArtworkUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutArtworksNestedInput
    category?: CategoryUpdateOneRequiredWithoutArtworksNestedInput
    hashtags?: ArtworkHashtagUpdateManyWithoutArtworkNestedInput
    reactions?: ReactionUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    hashtags?: ArtworkHashtagUncheckedUpdateManyWithoutArtworkNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutArtworkNestedInput
  }

  export type ReactionCreateWithoutReactionTypeInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
    artwork: ArtworkCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutReactionTypeInput = {
    userId: number
    artworkId: number
    createdAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutReactionTypeInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutReactionTypeInput, ReactionUncheckedCreateWithoutReactionTypeInput>
  }

  export type ReactionCreateManyReactionTypeInputEnvelope = {
    data: ReactionCreateManyReactionTypeInput | ReactionCreateManyReactionTypeInput[]
    skipDuplicates?: boolean
  }

  export type ReactionUpsertWithWhereUniqueWithoutReactionTypeInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutReactionTypeInput, ReactionUncheckedUpdateWithoutReactionTypeInput>
    create: XOR<ReactionCreateWithoutReactionTypeInput, ReactionUncheckedCreateWithoutReactionTypeInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutReactionTypeInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutReactionTypeInput, ReactionUncheckedUpdateWithoutReactionTypeInput>
  }

  export type ReactionUpdateManyWithWhereWithoutReactionTypeInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutReactionTypeInput>
  }

  export type UserCreateWithoutReactionsInput = {
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    artworks?: ArtworkCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    roleId: number
    artworks?: ArtworkUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type ArtworkCreateWithoutReactionsInput = {
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    author: UserCreateNestedOneWithoutArtworksInput
    category: CategoryCreateNestedOneWithoutArtworksInput
    hashtags?: ArtworkHashtagCreateNestedManyWithoutArtworkInput
    comments?: CommentCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkUncheckedCreateWithoutReactionsInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    authorId: number
    categoryId: number
    hashtags?: ArtworkHashtagUncheckedCreateNestedManyWithoutArtworkInput
    comments?: CommentUncheckedCreateNestedManyWithoutArtworkInput
  }

  export type ArtworkCreateOrConnectWithoutReactionsInput = {
    where: ArtworkWhereUniqueInput
    create: XOR<ArtworkCreateWithoutReactionsInput, ArtworkUncheckedCreateWithoutReactionsInput>
  }

  export type ReactionTypeCreateWithoutReactionsInput = {
    name: string
  }

  export type ReactionTypeUncheckedCreateWithoutReactionsInput = {
    id?: number
    name: string
  }

  export type ReactionTypeCreateOrConnectWithoutReactionsInput = {
    where: ReactionTypeWhereUniqueInput
    create: XOR<ReactionTypeCreateWithoutReactionsInput, ReactionTypeUncheckedCreateWithoutReactionsInput>
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    artworks?: ArtworkUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    artworks?: ArtworkUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type ArtworkUpsertWithoutReactionsInput = {
    update: XOR<ArtworkUpdateWithoutReactionsInput, ArtworkUncheckedUpdateWithoutReactionsInput>
    create: XOR<ArtworkCreateWithoutReactionsInput, ArtworkUncheckedCreateWithoutReactionsInput>
    where?: ArtworkWhereInput
  }

  export type ArtworkUpdateToOneWithWhereWithoutReactionsInput = {
    where?: ArtworkWhereInput
    data: XOR<ArtworkUpdateWithoutReactionsInput, ArtworkUncheckedUpdateWithoutReactionsInput>
  }

  export type ArtworkUpdateWithoutReactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutArtworksNestedInput
    category?: CategoryUpdateOneRequiredWithoutArtworksNestedInput
    hashtags?: ArtworkHashtagUpdateManyWithoutArtworkNestedInput
    comments?: CommentUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkUncheckedUpdateWithoutReactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    hashtags?: ArtworkHashtagUncheckedUpdateManyWithoutArtworkNestedInput
    comments?: CommentUncheckedUpdateManyWithoutArtworkNestedInput
  }

  export type ReactionTypeUpsertWithoutReactionsInput = {
    update: XOR<ReactionTypeUpdateWithoutReactionsInput, ReactionTypeUncheckedUpdateWithoutReactionsInput>
    create: XOR<ReactionTypeCreateWithoutReactionsInput, ReactionTypeUncheckedCreateWithoutReactionsInput>
    where?: ReactionTypeWhereInput
  }

  export type ReactionTypeUpdateToOneWithWhereWithoutReactionsInput = {
    where?: ReactionTypeWhereInput
    data: XOR<ReactionTypeUpdateWithoutReactionsInput, ReactionTypeUncheckedUpdateWithoutReactionsInput>
  }

  export type ReactionTypeUpdateWithoutReactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionTypeUncheckedUpdateWithoutReactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutFollowingInput = {
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    artworks?: ArtworkCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    followers?: FollowsCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    roleId: number
    artworks?: ArtworkUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserCreateWithoutFollowersInput = {
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    artworks?: ArtworkCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    following?: FollowsCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
    roleId: number
    artworks?: ArtworkUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    artworks?: ArtworkUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    artworks?: ArtworkUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    artworks?: ArtworkUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    artworks?: ArtworkUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type ArtworkCreateManyAuthorInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    categoryId: number
  }

  export type CommentCreateManyAuthorInput = {
    id?: number
    content: string
    image_user: string
    parentId?: number | null
    artworkId: number
    createdAt?: Date | string
  }

  export type ReactionCreateManyUserInput = {
    artworkId: number
    reactionTypeId: number
    createdAt?: Date | string
  }

  export type FollowsCreateManyFollowerInput = {
    followingId: number
  }

  export type FollowsCreateManyFollowingInput = {
    followerId: number
  }

  export type ArtworkUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutArtworksNestedInput
    hashtags?: ArtworkHashtagUpdateManyWithoutArtworkNestedInput
    reactions?: ReactionUpdateManyWithoutArtworkNestedInput
    comments?: CommentUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    hashtags?: ArtworkHashtagUncheckedUpdateManyWithoutArtworkNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutArtworkNestedInput
    comments?: CommentUncheckedUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artwork?: ArtworkUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    artworkId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    artworkId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artwork?: ArtworkUpdateOneRequiredWithoutReactionsNestedInput
    reactionType?: ReactionTypeUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutUserInput = {
    artworkId?: IntFieldUpdateOperationsInput | number
    reactionTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutUserInput = {
    artworkId?: IntFieldUpdateOperationsInput | number
    reactionTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowsUpdateWithoutFollowerInput = {
    following?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowsUncheckedUpdateWithoutFollowerInput = {
    followingId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowsUncheckedUpdateManyWithoutFollowerInput = {
    followingId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowsUpdateWithoutFollowingInput = {
    follower?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowsUncheckedUpdateWithoutFollowingInput = {
    followerId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowsUncheckedUpdateManyWithoutFollowingInput = {
    followerId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyRoleInput = {
    id?: number
    name: string
    avatarUrl?: string | null
    phone?: string | null
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artworks?: ArtworkUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    following?: FollowsUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artworks?: ArtworkUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtworkHashtagCreateManyArtworkInput = {
    hashtagId: number
  }

  export type ReactionCreateManyArtworkInput = {
    userId: number
    reactionTypeId: number
    createdAt?: Date | string
  }

  export type CommentCreateManyArtworkInput = {
    id?: number
    content: string
    image_user: string
    parentId?: number | null
    authorId: number
    createdAt?: Date | string
  }

  export type ArtworkHashtagUpdateWithoutArtworkInput = {
    hashtag?: HashtagUpdateOneRequiredWithoutArtworksNestedInput
  }

  export type ArtworkHashtagUncheckedUpdateWithoutArtworkInput = {
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtworkHashtagUncheckedUpdateManyWithoutArtworkInput = {
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type ReactionUpdateWithoutArtworkInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
    reactionType?: ReactionTypeUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutArtworkInput = {
    userId?: IntFieldUpdateOperationsInput | number
    reactionTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutArtworkInput = {
    userId?: IntFieldUpdateOperationsInput | number
    reactionTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutArtworkInput = {
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutArtworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutArtworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtworkCreateManyCategoryInput = {
    id?: number
    title: string
    description?: string | null
    price?: number | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dimensions?: string | null
    imageUrls: string
    authorId: number
  }

  export type ArtworkUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutArtworksNestedInput
    hashtags?: ArtworkHashtagUpdateManyWithoutArtworkNestedInput
    reactions?: ReactionUpdateManyWithoutArtworkNestedInput
    comments?: CommentUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    hashtags?: ArtworkHashtagUncheckedUpdateManyWithoutArtworkNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutArtworkNestedInput
    comments?: CommentUncheckedUpdateManyWithoutArtworkNestedInput
  }

  export type ArtworkUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtworkHashtagCreateManyHashtagInput = {
    artworkId: number
  }

  export type ArtworkHashtagUpdateWithoutHashtagInput = {
    artwork?: ArtworkUpdateOneRequiredWithoutHashtagsNestedInput
  }

  export type ArtworkHashtagUncheckedUpdateWithoutHashtagInput = {
    artworkId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtworkHashtagUncheckedUpdateManyWithoutHashtagInput = {
    artworkId?: IntFieldUpdateOperationsInput | number
  }

  export type ReactionCreateManyReactionTypeInput = {
    userId: number
    artworkId: number
    createdAt?: Date | string
  }

  export type ReactionUpdateWithoutReactionTypeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
    artwork?: ArtworkUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutReactionTypeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    artworkId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutReactionTypeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    artworkId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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