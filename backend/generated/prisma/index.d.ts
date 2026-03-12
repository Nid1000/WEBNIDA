
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
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model PedidoDetalle
 * 
 */
export type PedidoDetalle = $Result.DefaultSelection<Prisma.$PedidoDetallePayload>
/**
 * Model LoginLog
 * 
 */
export type LoginLog = $Result.DefaultSelection<Prisma.$LoginLogPayload>
/**
 * Model Comprobante
 * 
 */
export type Comprobante = $Result.DefaultSelection<Prisma.$ComprobantePayload>
/**
 * Model ComprobanteSerie
 * 
 */
export type ComprobanteSerie = $Result.DefaultSelection<Prisma.$ComprobanteSeriePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AdminRol: {
  admin: 'admin',
  super_admin: 'super_admin'
};

export type AdminRol = (typeof AdminRol)[keyof typeof AdminRol]


export const PedidoEstado: {
  pendiente: 'pendiente',
  confirmado: 'confirmado',
  en_preparacion: 'en_preparacion',
  listo: 'listo',
  entregado: 'entregado',
  cancelado: 'cancelado'
};

export type PedidoEstado = (typeof PedidoEstado)[keyof typeof PedidoEstado]


export const TipoUsuarioLoginLog: {
  usuario: 'usuario',
  admin: 'admin'
};

export type TipoUsuarioLoginLog = (typeof TipoUsuarioLoginLog)[keyof typeof TipoUsuarioLoginLog]

}

export type AdminRol = $Enums.AdminRol

export const AdminRol: typeof $Enums.AdminRol

export type PedidoEstado = $Enums.PedidoEstado

export const PedidoEstado: typeof $Enums.PedidoEstado

export type TipoUsuarioLoginLog = $Enums.TipoUsuarioLoginLog

export const TipoUsuarioLoginLog: typeof $Enums.TipoUsuarioLoginLog

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
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
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoDetalle`: Exposes CRUD operations for the **PedidoDetalle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoDetalles
    * const pedidoDetalles = await prisma.pedidoDetalle.findMany()
    * ```
    */
  get pedidoDetalle(): Prisma.PedidoDetalleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loginLog`: Exposes CRUD operations for the **LoginLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginLogs
    * const loginLogs = await prisma.loginLog.findMany()
    * ```
    */
  get loginLog(): Prisma.LoginLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comprobante`: Exposes CRUD operations for the **Comprobante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comprobantes
    * const comprobantes = await prisma.comprobante.findMany()
    * ```
    */
  get comprobante(): Prisma.ComprobanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comprobanteSerie`: Exposes CRUD operations for the **ComprobanteSerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComprobanteSeries
    * const comprobanteSeries = await prisma.comprobanteSerie.findMany()
    * ```
    */
  get comprobanteSerie(): Prisma.ComprobanteSerieDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    Categoria: 'Categoria',
    Producto: 'Producto',
    Usuario: 'Usuario',
    Administrador: 'Administrador',
    Pedido: 'Pedido',
    PedidoDetalle: 'PedidoDetalle',
    LoginLog: 'LoginLog',
    Comprobante: 'Comprobante',
    ComprobanteSerie: 'ComprobanteSerie'
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
      modelProps: "categoria" | "producto" | "usuario" | "administrador" | "pedido" | "pedidoDetalle" | "loginLog" | "comprobante" | "comprobanteSerie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      PedidoDetalle: {
        payload: Prisma.$PedidoDetallePayload<ExtArgs>
        fields: Prisma.PedidoDetalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoDetalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoDetalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload>
          }
          findFirst: {
            args: Prisma.PedidoDetalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoDetalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload>
          }
          findMany: {
            args: Prisma.PedidoDetalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload>[]
          }
          create: {
            args: Prisma.PedidoDetalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload>
          }
          createMany: {
            args: Prisma.PedidoDetalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDetalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload>
          }
          update: {
            args: Prisma.PedidoDetalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload>
          }
          deleteMany: {
            args: Prisma.PedidoDetalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoDetalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoDetalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoDetallePayload>
          }
          aggregate: {
            args: Prisma.PedidoDetalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoDetalle>
          }
          groupBy: {
            args: Prisma.PedidoDetalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoDetalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoDetalleCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoDetalleCountAggregateOutputType> | number
          }
        }
      }
      LoginLog: {
        payload: Prisma.$LoginLogPayload<ExtArgs>
        fields: Prisma.LoginLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload>
          }
          findFirst: {
            args: Prisma.LoginLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload>
          }
          findMany: {
            args: Prisma.LoginLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload>[]
          }
          create: {
            args: Prisma.LoginLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload>
          }
          createMany: {
            args: Prisma.LoginLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoginLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload>
          }
          update: {
            args: Prisma.LoginLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload>
          }
          deleteMany: {
            args: Prisma.LoginLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoginLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginLogPayload>
          }
          aggregate: {
            args: Prisma.LoginLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginLog>
          }
          groupBy: {
            args: Prisma.LoginLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginLogCountArgs<ExtArgs>
            result: $Utils.Optional<LoginLogCountAggregateOutputType> | number
          }
        }
      }
      Comprobante: {
        payload: Prisma.$ComprobantePayload<ExtArgs>
        fields: Prisma.ComprobanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComprobanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComprobanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          findFirst: {
            args: Prisma.ComprobanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComprobanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          findMany: {
            args: Prisma.ComprobanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>[]
          }
          create: {
            args: Prisma.ComprobanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          createMany: {
            args: Prisma.ComprobanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComprobanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          update: {
            args: Prisma.ComprobanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          deleteMany: {
            args: Prisma.ComprobanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComprobanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComprobanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          aggregate: {
            args: Prisma.ComprobanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprobante>
          }
          groupBy: {
            args: Prisma.ComprobanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComprobanteCountArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteCountAggregateOutputType> | number
          }
        }
      }
      ComprobanteSerie: {
        payload: Prisma.$ComprobanteSeriePayload<ExtArgs>
        fields: Prisma.ComprobanteSerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComprobanteSerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComprobanteSerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload>
          }
          findFirst: {
            args: Prisma.ComprobanteSerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComprobanteSerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload>
          }
          findMany: {
            args: Prisma.ComprobanteSerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload>[]
          }
          create: {
            args: Prisma.ComprobanteSerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload>
          }
          createMany: {
            args: Prisma.ComprobanteSerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComprobanteSerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload>
          }
          update: {
            args: Prisma.ComprobanteSerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload>
          }
          deleteMany: {
            args: Prisma.ComprobanteSerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComprobanteSerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComprobanteSerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobanteSeriePayload>
          }
          aggregate: {
            args: Prisma.ComprobanteSerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprobanteSerie>
          }
          groupBy: {
            args: Prisma.ComprobanteSerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteSerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComprobanteSerieCountArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteSerieCountAggregateOutputType> | number
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
    categoria?: CategoriaOmit
    producto?: ProductoOmit
    usuario?: UsuarioOmit
    administrador?: AdministradorOmit
    pedido?: PedidoOmit
    pedidoDetalle?: PedidoDetalleOmit
    loginLog?: LoginLogOmit
    comprobante?: ComprobanteOmit
    comprobanteSerie?: ComprobanteSerieOmit
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
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    detalles: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | ProductoCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoDetalleWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    pedidos: number
    loginLogs: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
    loginLogs?: boolean | UsuarioCountOutputTypeCountLoginLogsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLoginLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginLogWhereInput
  }


  /**
   * Count Type AdministradorCountOutputType
   */

  export type AdministradorCountOutputType = {
    loginLogs: number
  }

  export type AdministradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loginLogs?: boolean | AdministradorCountOutputTypeCountLoginLogsArgs
  }

  // Custom InputTypes
  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministradorCountOutputType
     */
    select?: AdministradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountLoginLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginLogWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    detalles: number
    comprobantes: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | PedidoCountOutputTypeCountDetallesArgs
    comprobantes?: boolean | PedidoCountOutputTypeCountComprobantesArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoDetalleWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountComprobantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprobanteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    imagen: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    imagen: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    imagen: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagen?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagen?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagen?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    imagen: string | null
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "imagen" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      imagen: string | null
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly descripcion: FieldRef<"Categoria", 'String'>
    readonly imagen: FieldRef<"Categoria", 'String'>
    readonly activo: FieldRef<"Categoria", 'Boolean'>
    readonly created_at: FieldRef<"Categoria", 'DateTime'>
    readonly updated_at: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    categoria_id: number | null
    stock: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    categoria_id: number | null
    stock: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    categoria_id: number | null
    imagen: string | null
    stock: number | null
    destacado: boolean | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    categoria_id: number | null
    imagen: string | null
    stock: number | null
    destacado: boolean | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    categoria_id: number
    imagen: number
    stock: number
    destacado: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    categoria_id?: true
    stock?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    categoria_id?: true
    stock?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoria_id?: true
    imagen?: true
    stock?: true
    destacado?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoria_id?: true
    imagen?: true
    stock?: true
    destacado?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoria_id?: true
    imagen?: true
    stock?: true
    destacado?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    precio: Decimal
    categoria_id: number | null
    imagen: string | null
    stock: number
    destacado: boolean
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    categoria_id?: boolean
    imagen?: boolean
    stock?: boolean
    destacado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    categoria?: boolean | Producto$categoriaArgs<ExtArgs>
    detalles?: boolean | Producto$detallesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    categoria_id?: boolean
    imagen?: boolean
    stock?: boolean
    destacado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "categoria_id" | "imagen" | "stock" | "destacado" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Producto$categoriaArgs<ExtArgs>
    detalles?: boolean | Producto$detallesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      detalles: Prisma.$PedidoDetallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      precio: Prisma.Decimal
      categoria_id: number | null
      imagen: string | null
      stock: number
      destacado: boolean
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
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
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends Producto$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Producto$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Producto$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Decimal'>
    readonly categoria_id: FieldRef<"Producto", 'Int'>
    readonly imagen: FieldRef<"Producto", 'String'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly destacado: FieldRef<"Producto", 'Boolean'>
    readonly activo: FieldRef<"Producto", 'Boolean'>
    readonly created_at: FieldRef<"Producto", 'DateTime'>
    readonly updated_at: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.categoria
   */
  export type Producto$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Producto.detalles
   */
  export type Producto$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    where?: PedidoDetalleWhereInput
    orderBy?: PedidoDetalleOrderByWithRelationInput | PedidoDetalleOrderByWithRelationInput[]
    cursor?: PedidoDetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoDetalleScalarFieldEnum | PedidoDetalleScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    telefono: string | null
    direccion: string | null
    distrito: string | null
    numero_casa: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    telefono: string | null
    direccion: string | null
    distrito: string | null
    numero_casa: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    password: number
    telefono: number
    direccion: number
    distrito: number
    numero_casa: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    telefono?: true
    direccion?: true
    distrito?: true
    numero_casa?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    telefono?: true
    direccion?: true
    distrito?: true
    numero_casa?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    telefono?: true
    direccion?: true
    distrito?: true
    numero_casa?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    email: string
    password: string
    telefono: string | null
    direccion: string | null
    distrito: string | null
    numero_casa: string | null
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    telefono?: boolean
    direccion?: boolean
    distrito?: boolean
    numero_casa?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    loginLogs?: boolean | Usuario$loginLogsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    telefono?: boolean
    direccion?: boolean
    distrito?: boolean
    numero_casa?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "password" | "telefono" | "direccion" | "distrito" | "numero_casa" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    loginLogs?: boolean | Usuario$loginLogsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      loginLogs: Prisma.$LoginLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      email: string
      password: string
      telefono: string | null
      direccion: string | null
      distrito: string | null
      numero_casa: string | null
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loginLogs<T extends Usuario$loginLogsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$loginLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly direccion: FieldRef<"Usuario", 'String'>
    readonly distrito: FieldRef<"Usuario", 'String'>
    readonly numero_casa: FieldRef<"Usuario", 'String'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly created_at: FieldRef<"Usuario", 'DateTime'>
    readonly updated_at: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario.loginLogs
   */
  export type Usuario$loginLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    where?: LoginLogWhereInput
    orderBy?: LoginLogOrderByWithRelationInput | LoginLogOrderByWithRelationInput[]
    cursor?: LoginLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginLogScalarFieldEnum | LoginLogScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    id: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    id: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: $Enums.AdminRol | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: $Enums.AdminRol | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdministradorCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    rol: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    id?: true
  }

  export type AdministradorSumAggregateInputType = {
    id?: true
  }

  export type AdministradorMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type AdministradorCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password: string
    rol: $Enums.AdminRol
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    loginLogs?: boolean | Administrador$loginLogsArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>



  export type AdministradorSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "rol" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["administrador"]>
  export type AdministradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loginLogs?: boolean | Administrador$loginLogsArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {
      loginLogs: Prisma.$LoginLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password: string
      rol: $Enums.AdminRol
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administradorWithIdOnly = await prisma.administrador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
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
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loginLogs<T extends Administrador$loginLogsArgs<ExtArgs> = {}>(args?: Subset<T, Administrador$loginLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Administrador model
   */
  interface AdministradorFieldRefs {
    readonly id: FieldRef<"Administrador", 'Int'>
    readonly nombre: FieldRef<"Administrador", 'String'>
    readonly email: FieldRef<"Administrador", 'String'>
    readonly password: FieldRef<"Administrador", 'String'>
    readonly rol: FieldRef<"Administrador", 'AdminRol'>
    readonly activo: FieldRef<"Administrador", 'Boolean'>
    readonly created_at: FieldRef<"Administrador", 'DateTime'>
    readonly updated_at: FieldRef<"Administrador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador.loginLogs
   */
  export type Administrador$loginLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    where?: LoginLogWhereInput
    orderBy?: LoginLogOrderByWithRelationInput | LoginLogOrderByWithRelationInput[]
    cursor?: LoginLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginLogScalarFieldEnum | LoginLogScalarFieldEnum[]
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    total: Decimal | null
    direccion_id: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    total: Decimal | null
    direccion_id: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    total: Decimal | null
    estado: $Enums.PedidoEstado | null
    fecha_entrega: Date | null
    direccion_entrega: string | null
    distrito_entrega: string | null
    numero_casa_entrega: string | null
    direccion_id: number | null
    telefono_contacto: string | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    total: Decimal | null
    estado: $Enums.PedidoEstado | null
    fecha_entrega: Date | null
    direccion_entrega: string | null
    distrito_entrega: string | null
    numero_casa_entrega: string | null
    direccion_id: number | null
    telefono_contacto: string | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    usuario_id: number
    total: number
    estado: number
    fecha_entrega: number
    direccion_entrega: number
    distrito_entrega: number
    numero_casa_entrega: number
    direccion_id: number
    telefono_contacto: number
    notas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    total?: true
    direccion_id?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    usuario_id?: true
    total?: true
    direccion_id?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    total?: true
    estado?: true
    fecha_entrega?: true
    direccion_entrega?: true
    distrito_entrega?: true
    numero_casa_entrega?: true
    direccion_id?: true
    telefono_contacto?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    total?: true
    estado?: true
    fecha_entrega?: true
    direccion_entrega?: true
    distrito_entrega?: true
    numero_casa_entrega?: true
    direccion_id?: true
    telefono_contacto?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    total?: true
    estado?: true
    fecha_entrega?: true
    direccion_entrega?: true
    distrito_entrega?: true
    numero_casa_entrega?: true
    direccion_id?: true
    telefono_contacto?: true
    notas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    usuario_id: number | null
    total: Decimal
    estado: $Enums.PedidoEstado
    fecha_entrega: Date | null
    direccion_entrega: string | null
    distrito_entrega: string | null
    numero_casa_entrega: string | null
    direccion_id: number | null
    telefono_contacto: string | null
    notas: string | null
    created_at: Date
    updated_at: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    total?: boolean
    estado?: boolean
    fecha_entrega?: boolean
    direccion_entrega?: boolean
    distrito_entrega?: boolean
    numero_casa_entrega?: boolean
    direccion_id?: boolean
    telefono_contacto?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
    usuario?: boolean | Pedido$usuarioArgs<ExtArgs>
    detalles?: boolean | Pedido$detallesArgs<ExtArgs>
    comprobantes?: boolean | Pedido$comprobantesArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    total?: boolean
    estado?: boolean
    fecha_entrega?: boolean
    direccion_entrega?: boolean
    distrito_entrega?: boolean
    numero_casa_entrega?: boolean
    direccion_id?: boolean
    telefono_contacto?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "total" | "estado" | "fecha_entrega" | "direccion_entrega" | "distrito_entrega" | "numero_casa_entrega" | "direccion_id" | "telefono_contacto" | "notas" | "created_at" | "updated_at", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Pedido$usuarioArgs<ExtArgs>
    detalles?: boolean | Pedido$detallesArgs<ExtArgs>
    comprobantes?: boolean | Pedido$comprobantesArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      detalles: Prisma.$PedidoDetallePayload<ExtArgs>[]
      comprobantes: Prisma.$ComprobantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number | null
      total: Prisma.Decimal
      estado: $Enums.PedidoEstado
      fecha_entrega: Date | null
      direccion_entrega: string | null
      distrito_entrega: string | null
      numero_casa_entrega: string | null
      direccion_id: number | null
      telefono_contacto: string | null
      notas: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Pedido$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Pedido$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comprobantes<T extends Pedido$comprobantesArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$comprobantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly usuario_id: FieldRef<"Pedido", 'Int'>
    readonly total: FieldRef<"Pedido", 'Decimal'>
    readonly estado: FieldRef<"Pedido", 'PedidoEstado'>
    readonly fecha_entrega: FieldRef<"Pedido", 'DateTime'>
    readonly direccion_entrega: FieldRef<"Pedido", 'String'>
    readonly distrito_entrega: FieldRef<"Pedido", 'String'>
    readonly numero_casa_entrega: FieldRef<"Pedido", 'String'>
    readonly direccion_id: FieldRef<"Pedido", 'Int'>
    readonly telefono_contacto: FieldRef<"Pedido", 'String'>
    readonly notas: FieldRef<"Pedido", 'String'>
    readonly created_at: FieldRef<"Pedido", 'DateTime'>
    readonly updated_at: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.usuario
   */
  export type Pedido$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Pedido.detalles
   */
  export type Pedido$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    where?: PedidoDetalleWhereInput
    orderBy?: PedidoDetalleOrderByWithRelationInput | PedidoDetalleOrderByWithRelationInput[]
    cursor?: PedidoDetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoDetalleScalarFieldEnum | PedidoDetalleScalarFieldEnum[]
  }

  /**
   * Pedido.comprobantes
   */
  export type Pedido$comprobantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    where?: ComprobanteWhereInput
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    cursor?: ComprobanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoDetalle
   */

  export type AggregatePedidoDetalle = {
    _count: PedidoDetalleCountAggregateOutputType | null
    _avg: PedidoDetalleAvgAggregateOutputType | null
    _sum: PedidoDetalleSumAggregateOutputType | null
    _min: PedidoDetalleMinAggregateOutputType | null
    _max: PedidoDetalleMaxAggregateOutputType | null
  }

  export type PedidoDetalleAvgAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type PedidoDetalleSumAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type PedidoDetalleMinAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type PedidoDetalleMaxAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type PedidoDetalleCountAggregateOutputType = {
    id: number
    pedido_id: number
    producto_id: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    _all: number
  }


  export type PedidoDetalleAvgAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type PedidoDetalleSumAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type PedidoDetalleMinAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type PedidoDetalleMaxAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type PedidoDetalleCountAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
    _all?: true
  }

  export type PedidoDetalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoDetalle to aggregate.
     */
    where?: PedidoDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoDetalles to fetch.
     */
    orderBy?: PedidoDetalleOrderByWithRelationInput | PedidoDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoDetalles
    **/
    _count?: true | PedidoDetalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoDetalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoDetalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoDetalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoDetalleMaxAggregateInputType
  }

  export type GetPedidoDetalleAggregateType<T extends PedidoDetalleAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoDetalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoDetalle[P]>
      : GetScalarType<T[P], AggregatePedidoDetalle[P]>
  }




  export type PedidoDetalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoDetalleWhereInput
    orderBy?: PedidoDetalleOrderByWithAggregationInput | PedidoDetalleOrderByWithAggregationInput[]
    by: PedidoDetalleScalarFieldEnum[] | PedidoDetalleScalarFieldEnum
    having?: PedidoDetalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoDetalleCountAggregateInputType | true
    _avg?: PedidoDetalleAvgAggregateInputType
    _sum?: PedidoDetalleSumAggregateInputType
    _min?: PedidoDetalleMinAggregateInputType
    _max?: PedidoDetalleMaxAggregateInputType
  }

  export type PedidoDetalleGroupByOutputType = {
    id: number
    pedido_id: number
    producto_id: number | null
    cantidad: number
    precio_unitario: Decimal
    subtotal: Decimal
    _count: PedidoDetalleCountAggregateOutputType | null
    _avg: PedidoDetalleAvgAggregateOutputType | null
    _sum: PedidoDetalleSumAggregateOutputType | null
    _min: PedidoDetalleMinAggregateOutputType | null
    _max: PedidoDetalleMaxAggregateOutputType | null
  }

  type GetPedidoDetalleGroupByPayload<T extends PedidoDetalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoDetalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoDetalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoDetalleGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoDetalleGroupByOutputType[P]>
        }
      >
    >


  export type PedidoDetalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedido_id?: boolean
    producto_id?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    subtotal?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | PedidoDetalle$productoArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoDetalle"]>



  export type PedidoDetalleSelectScalar = {
    id?: boolean
    pedido_id?: boolean
    producto_id?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    subtotal?: boolean
  }

  export type PedidoDetalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedido_id" | "producto_id" | "cantidad" | "precio_unitario" | "subtotal", ExtArgs["result"]["pedidoDetalle"]>
  export type PedidoDetalleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | PedidoDetalle$productoArgs<ExtArgs>
  }

  export type $PedidoDetallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoDetalle"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedido_id: number
      producto_id: number | null
      cantidad: number
      precio_unitario: Prisma.Decimal
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["pedidoDetalle"]>
    composites: {}
  }

  type PedidoDetalleGetPayload<S extends boolean | null | undefined | PedidoDetalleDefaultArgs> = $Result.GetResult<Prisma.$PedidoDetallePayload, S>

  type PedidoDetalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoDetalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoDetalleCountAggregateInputType | true
    }

  export interface PedidoDetalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoDetalle'], meta: { name: 'PedidoDetalle' } }
    /**
     * Find zero or one PedidoDetalle that matches the filter.
     * @param {PedidoDetalleFindUniqueArgs} args - Arguments to find a PedidoDetalle
     * @example
     * // Get one PedidoDetalle
     * const pedidoDetalle = await prisma.pedidoDetalle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoDetalleFindUniqueArgs>(args: SelectSubset<T, PedidoDetalleFindUniqueArgs<ExtArgs>>): Prisma__PedidoDetalleClient<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoDetalle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoDetalleFindUniqueOrThrowArgs} args - Arguments to find a PedidoDetalle
     * @example
     * // Get one PedidoDetalle
     * const pedidoDetalle = await prisma.pedidoDetalle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoDetalleFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoDetalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoDetalleClient<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoDetalle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetalleFindFirstArgs} args - Arguments to find a PedidoDetalle
     * @example
     * // Get one PedidoDetalle
     * const pedidoDetalle = await prisma.pedidoDetalle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoDetalleFindFirstArgs>(args?: SelectSubset<T, PedidoDetalleFindFirstArgs<ExtArgs>>): Prisma__PedidoDetalleClient<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoDetalle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetalleFindFirstOrThrowArgs} args - Arguments to find a PedidoDetalle
     * @example
     * // Get one PedidoDetalle
     * const pedidoDetalle = await prisma.pedidoDetalle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoDetalleFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoDetalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoDetalleClient<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoDetalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoDetalles
     * const pedidoDetalles = await prisma.pedidoDetalle.findMany()
     * 
     * // Get first 10 PedidoDetalles
     * const pedidoDetalles = await prisma.pedidoDetalle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoDetalleWithIdOnly = await prisma.pedidoDetalle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoDetalleFindManyArgs>(args?: SelectSubset<T, PedidoDetalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoDetalle.
     * @param {PedidoDetalleCreateArgs} args - Arguments to create a PedidoDetalle.
     * @example
     * // Create one PedidoDetalle
     * const PedidoDetalle = await prisma.pedidoDetalle.create({
     *   data: {
     *     // ... data to create a PedidoDetalle
     *   }
     * })
     * 
     */
    create<T extends PedidoDetalleCreateArgs>(args: SelectSubset<T, PedidoDetalleCreateArgs<ExtArgs>>): Prisma__PedidoDetalleClient<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoDetalles.
     * @param {PedidoDetalleCreateManyArgs} args - Arguments to create many PedidoDetalles.
     * @example
     * // Create many PedidoDetalles
     * const pedidoDetalle = await prisma.pedidoDetalle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoDetalleCreateManyArgs>(args?: SelectSubset<T, PedidoDetalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PedidoDetalle.
     * @param {PedidoDetalleDeleteArgs} args - Arguments to delete one PedidoDetalle.
     * @example
     * // Delete one PedidoDetalle
     * const PedidoDetalle = await prisma.pedidoDetalle.delete({
     *   where: {
     *     // ... filter to delete one PedidoDetalle
     *   }
     * })
     * 
     */
    delete<T extends PedidoDetalleDeleteArgs>(args: SelectSubset<T, PedidoDetalleDeleteArgs<ExtArgs>>): Prisma__PedidoDetalleClient<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoDetalle.
     * @param {PedidoDetalleUpdateArgs} args - Arguments to update one PedidoDetalle.
     * @example
     * // Update one PedidoDetalle
     * const pedidoDetalle = await prisma.pedidoDetalle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoDetalleUpdateArgs>(args: SelectSubset<T, PedidoDetalleUpdateArgs<ExtArgs>>): Prisma__PedidoDetalleClient<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoDetalles.
     * @param {PedidoDetalleDeleteManyArgs} args - Arguments to filter PedidoDetalles to delete.
     * @example
     * // Delete a few PedidoDetalles
     * const { count } = await prisma.pedidoDetalle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDetalleDeleteManyArgs>(args?: SelectSubset<T, PedidoDetalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoDetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoDetalles
     * const pedidoDetalle = await prisma.pedidoDetalle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoDetalleUpdateManyArgs>(args: SelectSubset<T, PedidoDetalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PedidoDetalle.
     * @param {PedidoDetalleUpsertArgs} args - Arguments to update or create a PedidoDetalle.
     * @example
     * // Update or create a PedidoDetalle
     * const pedidoDetalle = await prisma.pedidoDetalle.upsert({
     *   create: {
     *     // ... data to create a PedidoDetalle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoDetalle we want to update
     *   }
     * })
     */
    upsert<T extends PedidoDetalleUpsertArgs>(args: SelectSubset<T, PedidoDetalleUpsertArgs<ExtArgs>>): Prisma__PedidoDetalleClient<$Result.GetResult<Prisma.$PedidoDetallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoDetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetalleCountArgs} args - Arguments to filter PedidoDetalles to count.
     * @example
     * // Count the number of PedidoDetalles
     * const count = await prisma.pedidoDetalle.count({
     *   where: {
     *     // ... the filter for the PedidoDetalles we want to count
     *   }
     * })
    **/
    count<T extends PedidoDetalleCountArgs>(
      args?: Subset<T, PedidoDetalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoDetalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoDetalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoDetalleAggregateArgs>(args: Subset<T, PedidoDetalleAggregateArgs>): Prisma.PrismaPromise<GetPedidoDetalleAggregateType<T>>

    /**
     * Group by PedidoDetalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoDetalleGroupByArgs} args - Group by arguments.
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
      T extends PedidoDetalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoDetalleGroupByArgs['orderBy'] }
        : { orderBy?: PedidoDetalleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoDetalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoDetalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoDetalle model
   */
  readonly fields: PedidoDetalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoDetalle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoDetalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends PedidoDetalle$productoArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDetalle$productoArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PedidoDetalle model
   */
  interface PedidoDetalleFieldRefs {
    readonly id: FieldRef<"PedidoDetalle", 'Int'>
    readonly pedido_id: FieldRef<"PedidoDetalle", 'Int'>
    readonly producto_id: FieldRef<"PedidoDetalle", 'Int'>
    readonly cantidad: FieldRef<"PedidoDetalle", 'Int'>
    readonly precio_unitario: FieldRef<"PedidoDetalle", 'Decimal'>
    readonly subtotal: FieldRef<"PedidoDetalle", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PedidoDetalle findUnique
   */
  export type PedidoDetalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * Filter, which PedidoDetalle to fetch.
     */
    where: PedidoDetalleWhereUniqueInput
  }

  /**
   * PedidoDetalle findUniqueOrThrow
   */
  export type PedidoDetalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * Filter, which PedidoDetalle to fetch.
     */
    where: PedidoDetalleWhereUniqueInput
  }

  /**
   * PedidoDetalle findFirst
   */
  export type PedidoDetalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * Filter, which PedidoDetalle to fetch.
     */
    where?: PedidoDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoDetalles to fetch.
     */
    orderBy?: PedidoDetalleOrderByWithRelationInput | PedidoDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoDetalles.
     */
    cursor?: PedidoDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoDetalles.
     */
    distinct?: PedidoDetalleScalarFieldEnum | PedidoDetalleScalarFieldEnum[]
  }

  /**
   * PedidoDetalle findFirstOrThrow
   */
  export type PedidoDetalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * Filter, which PedidoDetalle to fetch.
     */
    where?: PedidoDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoDetalles to fetch.
     */
    orderBy?: PedidoDetalleOrderByWithRelationInput | PedidoDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoDetalles.
     */
    cursor?: PedidoDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoDetalles.
     */
    distinct?: PedidoDetalleScalarFieldEnum | PedidoDetalleScalarFieldEnum[]
  }

  /**
   * PedidoDetalle findMany
   */
  export type PedidoDetalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * Filter, which PedidoDetalles to fetch.
     */
    where?: PedidoDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoDetalles to fetch.
     */
    orderBy?: PedidoDetalleOrderByWithRelationInput | PedidoDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoDetalles.
     */
    cursor?: PedidoDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoDetalles.
     */
    skip?: number
    distinct?: PedidoDetalleScalarFieldEnum | PedidoDetalleScalarFieldEnum[]
  }

  /**
   * PedidoDetalle create
   */
  export type PedidoDetalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoDetalle.
     */
    data: XOR<PedidoDetalleCreateInput, PedidoDetalleUncheckedCreateInput>
  }

  /**
   * PedidoDetalle createMany
   */
  export type PedidoDetalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoDetalles.
     */
    data: PedidoDetalleCreateManyInput | PedidoDetalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoDetalle update
   */
  export type PedidoDetalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoDetalle.
     */
    data: XOR<PedidoDetalleUpdateInput, PedidoDetalleUncheckedUpdateInput>
    /**
     * Choose, which PedidoDetalle to update.
     */
    where: PedidoDetalleWhereUniqueInput
  }

  /**
   * PedidoDetalle updateMany
   */
  export type PedidoDetalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoDetalles.
     */
    data: XOR<PedidoDetalleUpdateManyMutationInput, PedidoDetalleUncheckedUpdateManyInput>
    /**
     * Filter which PedidoDetalles to update
     */
    where?: PedidoDetalleWhereInput
    /**
     * Limit how many PedidoDetalles to update.
     */
    limit?: number
  }

  /**
   * PedidoDetalle upsert
   */
  export type PedidoDetalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoDetalle to update in case it exists.
     */
    where: PedidoDetalleWhereUniqueInput
    /**
     * In case the PedidoDetalle found by the `where` argument doesn't exist, create a new PedidoDetalle with this data.
     */
    create: XOR<PedidoDetalleCreateInput, PedidoDetalleUncheckedCreateInput>
    /**
     * In case the PedidoDetalle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoDetalleUpdateInput, PedidoDetalleUncheckedUpdateInput>
  }

  /**
   * PedidoDetalle delete
   */
  export type PedidoDetalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
    /**
     * Filter which PedidoDetalle to delete.
     */
    where: PedidoDetalleWhereUniqueInput
  }

  /**
   * PedidoDetalle deleteMany
   */
  export type PedidoDetalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoDetalles to delete
     */
    where?: PedidoDetalleWhereInput
    /**
     * Limit how many PedidoDetalles to delete.
     */
    limit?: number
  }

  /**
   * PedidoDetalle.producto
   */
  export type PedidoDetalle$productoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
  }

  /**
   * PedidoDetalle without action
   */
  export type PedidoDetalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoDetalle
     */
    select?: PedidoDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoDetalle
     */
    omit?: PedidoDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoDetalleInclude<ExtArgs> | null
  }


  /**
   * Model LoginLog
   */

  export type AggregateLoginLog = {
    _count: LoginLogCountAggregateOutputType | null
    _avg: LoginLogAvgAggregateOutputType | null
    _sum: LoginLogSumAggregateOutputType | null
    _min: LoginLogMinAggregateOutputType | null
    _max: LoginLogMaxAggregateOutputType | null
  }

  export type LoginLogAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    admin_id: number | null
  }

  export type LoginLogSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    admin_id: number | null
  }

  export type LoginLogMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    admin_id: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog | null
    ip_address: string | null
    user_agent: string | null
    exitoso: boolean | null
    created_at: Date | null
  }

  export type LoginLogMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    admin_id: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog | null
    ip_address: string | null
    user_agent: string | null
    exitoso: boolean | null
    created_at: Date | null
  }

  export type LoginLogCountAggregateOutputType = {
    id: number
    usuario_id: number
    admin_id: number
    tipo_usuario: number
    ip_address: number
    user_agent: number
    exitoso: number
    created_at: number
    _all: number
  }


  export type LoginLogAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    admin_id?: true
  }

  export type LoginLogSumAggregateInputType = {
    id?: true
    usuario_id?: true
    admin_id?: true
  }

  export type LoginLogMinAggregateInputType = {
    id?: true
    usuario_id?: true
    admin_id?: true
    tipo_usuario?: true
    ip_address?: true
    user_agent?: true
    exitoso?: true
    created_at?: true
  }

  export type LoginLogMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    admin_id?: true
    tipo_usuario?: true
    ip_address?: true
    user_agent?: true
    exitoso?: true
    created_at?: true
  }

  export type LoginLogCountAggregateInputType = {
    id?: true
    usuario_id?: true
    admin_id?: true
    tipo_usuario?: true
    ip_address?: true
    user_agent?: true
    exitoso?: true
    created_at?: true
    _all?: true
  }

  export type LoginLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginLog to aggregate.
     */
    where?: LoginLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginLogs to fetch.
     */
    orderBy?: LoginLogOrderByWithRelationInput | LoginLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginLogs
    **/
    _count?: true | LoginLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginLogMaxAggregateInputType
  }

  export type GetLoginLogAggregateType<T extends LoginLogAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginLog[P]>
      : GetScalarType<T[P], AggregateLoginLog[P]>
  }




  export type LoginLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginLogWhereInput
    orderBy?: LoginLogOrderByWithAggregationInput | LoginLogOrderByWithAggregationInput[]
    by: LoginLogScalarFieldEnum[] | LoginLogScalarFieldEnum
    having?: LoginLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginLogCountAggregateInputType | true
    _avg?: LoginLogAvgAggregateInputType
    _sum?: LoginLogSumAggregateInputType
    _min?: LoginLogMinAggregateInputType
    _max?: LoginLogMaxAggregateInputType
  }

  export type LoginLogGroupByOutputType = {
    id: number
    usuario_id: number | null
    admin_id: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address: string | null
    user_agent: string | null
    exitoso: boolean
    created_at: Date
    _count: LoginLogCountAggregateOutputType | null
    _avg: LoginLogAvgAggregateOutputType | null
    _sum: LoginLogSumAggregateOutputType | null
    _min: LoginLogMinAggregateOutputType | null
    _max: LoginLogMaxAggregateOutputType | null
  }

  type GetLoginLogGroupByPayload<T extends LoginLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginLogGroupByOutputType[P]>
            : GetScalarType<T[P], LoginLogGroupByOutputType[P]>
        }
      >
    >


  export type LoginLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    admin_id?: boolean
    tipo_usuario?: boolean
    ip_address?: boolean
    user_agent?: boolean
    exitoso?: boolean
    created_at?: boolean
    usuario?: boolean | LoginLog$usuarioArgs<ExtArgs>
    admin?: boolean | LoginLog$adminArgs<ExtArgs>
  }, ExtArgs["result"]["loginLog"]>



  export type LoginLogSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    admin_id?: boolean
    tipo_usuario?: boolean
    ip_address?: boolean
    user_agent?: boolean
    exitoso?: boolean
    created_at?: boolean
  }

  export type LoginLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "admin_id" | "tipo_usuario" | "ip_address" | "user_agent" | "exitoso" | "created_at", ExtArgs["result"]["loginLog"]>
  export type LoginLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | LoginLog$usuarioArgs<ExtArgs>
    admin?: boolean | LoginLog$adminArgs<ExtArgs>
  }

  export type $LoginLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginLog"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      admin: Prisma.$AdministradorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number | null
      admin_id: number | null
      tipo_usuario: $Enums.TipoUsuarioLoginLog
      ip_address: string | null
      user_agent: string | null
      exitoso: boolean
      created_at: Date
    }, ExtArgs["result"]["loginLog"]>
    composites: {}
  }

  type LoginLogGetPayload<S extends boolean | null | undefined | LoginLogDefaultArgs> = $Result.GetResult<Prisma.$LoginLogPayload, S>

  type LoginLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginLogCountAggregateInputType | true
    }

  export interface LoginLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginLog'], meta: { name: 'LoginLog' } }
    /**
     * Find zero or one LoginLog that matches the filter.
     * @param {LoginLogFindUniqueArgs} args - Arguments to find a LoginLog
     * @example
     * // Get one LoginLog
     * const loginLog = await prisma.loginLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginLogFindUniqueArgs>(args: SelectSubset<T, LoginLogFindUniqueArgs<ExtArgs>>): Prisma__LoginLogClient<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoginLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginLogFindUniqueOrThrowArgs} args - Arguments to find a LoginLog
     * @example
     * // Get one LoginLog
     * const loginLog = await prisma.loginLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginLogFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginLogClient<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginLogFindFirstArgs} args - Arguments to find a LoginLog
     * @example
     * // Get one LoginLog
     * const loginLog = await prisma.loginLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginLogFindFirstArgs>(args?: SelectSubset<T, LoginLogFindFirstArgs<ExtArgs>>): Prisma__LoginLogClient<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginLogFindFirstOrThrowArgs} args - Arguments to find a LoginLog
     * @example
     * // Get one LoginLog
     * const loginLog = await prisma.loginLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginLogFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginLogClient<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoginLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginLogs
     * const loginLogs = await prisma.loginLog.findMany()
     * 
     * // Get first 10 LoginLogs
     * const loginLogs = await prisma.loginLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginLogWithIdOnly = await prisma.loginLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginLogFindManyArgs>(args?: SelectSubset<T, LoginLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoginLog.
     * @param {LoginLogCreateArgs} args - Arguments to create a LoginLog.
     * @example
     * // Create one LoginLog
     * const LoginLog = await prisma.loginLog.create({
     *   data: {
     *     // ... data to create a LoginLog
     *   }
     * })
     * 
     */
    create<T extends LoginLogCreateArgs>(args: SelectSubset<T, LoginLogCreateArgs<ExtArgs>>): Prisma__LoginLogClient<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoginLogs.
     * @param {LoginLogCreateManyArgs} args - Arguments to create many LoginLogs.
     * @example
     * // Create many LoginLogs
     * const loginLog = await prisma.loginLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginLogCreateManyArgs>(args?: SelectSubset<T, LoginLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LoginLog.
     * @param {LoginLogDeleteArgs} args - Arguments to delete one LoginLog.
     * @example
     * // Delete one LoginLog
     * const LoginLog = await prisma.loginLog.delete({
     *   where: {
     *     // ... filter to delete one LoginLog
     *   }
     * })
     * 
     */
    delete<T extends LoginLogDeleteArgs>(args: SelectSubset<T, LoginLogDeleteArgs<ExtArgs>>): Prisma__LoginLogClient<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoginLog.
     * @param {LoginLogUpdateArgs} args - Arguments to update one LoginLog.
     * @example
     * // Update one LoginLog
     * const loginLog = await prisma.loginLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginLogUpdateArgs>(args: SelectSubset<T, LoginLogUpdateArgs<ExtArgs>>): Prisma__LoginLogClient<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoginLogs.
     * @param {LoginLogDeleteManyArgs} args - Arguments to filter LoginLogs to delete.
     * @example
     * // Delete a few LoginLogs
     * const { count } = await prisma.loginLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginLogDeleteManyArgs>(args?: SelectSubset<T, LoginLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginLogs
     * const loginLog = await prisma.loginLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginLogUpdateManyArgs>(args: SelectSubset<T, LoginLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoginLog.
     * @param {LoginLogUpsertArgs} args - Arguments to update or create a LoginLog.
     * @example
     * // Update or create a LoginLog
     * const loginLog = await prisma.loginLog.upsert({
     *   create: {
     *     // ... data to create a LoginLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginLog we want to update
     *   }
     * })
     */
    upsert<T extends LoginLogUpsertArgs>(args: SelectSubset<T, LoginLogUpsertArgs<ExtArgs>>): Prisma__LoginLogClient<$Result.GetResult<Prisma.$LoginLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoginLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginLogCountArgs} args - Arguments to filter LoginLogs to count.
     * @example
     * // Count the number of LoginLogs
     * const count = await prisma.loginLog.count({
     *   where: {
     *     // ... the filter for the LoginLogs we want to count
     *   }
     * })
    **/
    count<T extends LoginLogCountArgs>(
      args?: Subset<T, LoginLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginLogAggregateArgs>(args: Subset<T, LoginLogAggregateArgs>): Prisma.PrismaPromise<GetLoginLogAggregateType<T>>

    /**
     * Group by LoginLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginLogGroupByArgs} args - Group by arguments.
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
      T extends LoginLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginLogGroupByArgs['orderBy'] }
        : { orderBy?: LoginLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoginLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginLog model
   */
  readonly fields: LoginLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends LoginLog$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, LoginLog$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends LoginLog$adminArgs<ExtArgs> = {}>(args?: Subset<T, LoginLog$adminArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LoginLog model
   */
  interface LoginLogFieldRefs {
    readonly id: FieldRef<"LoginLog", 'Int'>
    readonly usuario_id: FieldRef<"LoginLog", 'Int'>
    readonly admin_id: FieldRef<"LoginLog", 'Int'>
    readonly tipo_usuario: FieldRef<"LoginLog", 'TipoUsuarioLoginLog'>
    readonly ip_address: FieldRef<"LoginLog", 'String'>
    readonly user_agent: FieldRef<"LoginLog", 'String'>
    readonly exitoso: FieldRef<"LoginLog", 'Boolean'>
    readonly created_at: FieldRef<"LoginLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginLog findUnique
   */
  export type LoginLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginLog to fetch.
     */
    where: LoginLogWhereUniqueInput
  }

  /**
   * LoginLog findUniqueOrThrow
   */
  export type LoginLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginLog to fetch.
     */
    where: LoginLogWhereUniqueInput
  }

  /**
   * LoginLog findFirst
   */
  export type LoginLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginLog to fetch.
     */
    where?: LoginLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginLogs to fetch.
     */
    orderBy?: LoginLogOrderByWithRelationInput | LoginLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginLogs.
     */
    cursor?: LoginLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginLogs.
     */
    distinct?: LoginLogScalarFieldEnum | LoginLogScalarFieldEnum[]
  }

  /**
   * LoginLog findFirstOrThrow
   */
  export type LoginLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginLog to fetch.
     */
    where?: LoginLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginLogs to fetch.
     */
    orderBy?: LoginLogOrderByWithRelationInput | LoginLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginLogs.
     */
    cursor?: LoginLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginLogs.
     */
    distinct?: LoginLogScalarFieldEnum | LoginLogScalarFieldEnum[]
  }

  /**
   * LoginLog findMany
   */
  export type LoginLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginLogs to fetch.
     */
    where?: LoginLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginLogs to fetch.
     */
    orderBy?: LoginLogOrderByWithRelationInput | LoginLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginLogs.
     */
    cursor?: LoginLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginLogs.
     */
    skip?: number
    distinct?: LoginLogScalarFieldEnum | LoginLogScalarFieldEnum[]
  }

  /**
   * LoginLog create
   */
  export type LoginLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * The data needed to create a LoginLog.
     */
    data: XOR<LoginLogCreateInput, LoginLogUncheckedCreateInput>
  }

  /**
   * LoginLog createMany
   */
  export type LoginLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginLogs.
     */
    data: LoginLogCreateManyInput | LoginLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginLog update
   */
  export type LoginLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * The data needed to update a LoginLog.
     */
    data: XOR<LoginLogUpdateInput, LoginLogUncheckedUpdateInput>
    /**
     * Choose, which LoginLog to update.
     */
    where: LoginLogWhereUniqueInput
  }

  /**
   * LoginLog updateMany
   */
  export type LoginLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginLogs.
     */
    data: XOR<LoginLogUpdateManyMutationInput, LoginLogUncheckedUpdateManyInput>
    /**
     * Filter which LoginLogs to update
     */
    where?: LoginLogWhereInput
    /**
     * Limit how many LoginLogs to update.
     */
    limit?: number
  }

  /**
   * LoginLog upsert
   */
  export type LoginLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * The filter to search for the LoginLog to update in case it exists.
     */
    where: LoginLogWhereUniqueInput
    /**
     * In case the LoginLog found by the `where` argument doesn't exist, create a new LoginLog with this data.
     */
    create: XOR<LoginLogCreateInput, LoginLogUncheckedCreateInput>
    /**
     * In case the LoginLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginLogUpdateInput, LoginLogUncheckedUpdateInput>
  }

  /**
   * LoginLog delete
   */
  export type LoginLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
    /**
     * Filter which LoginLog to delete.
     */
    where: LoginLogWhereUniqueInput
  }

  /**
   * LoginLog deleteMany
   */
  export type LoginLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginLogs to delete
     */
    where?: LoginLogWhereInput
    /**
     * Limit how many LoginLogs to delete.
     */
    limit?: number
  }

  /**
   * LoginLog.usuario
   */
  export type LoginLog$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * LoginLog.admin
   */
  export type LoginLog$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    where?: AdministradorWhereInput
  }

  /**
   * LoginLog without action
   */
  export type LoginLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginLog
     */
    select?: LoginLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginLog
     */
    omit?: LoginLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginLogInclude<ExtArgs> | null
  }


  /**
   * Model Comprobante
   */

  export type AggregateComprobante = {
    _count: ComprobanteCountAggregateOutputType | null
    _avg: ComprobanteAvgAggregateOutputType | null
    _sum: ComprobanteSumAggregateOutputType | null
    _min: ComprobanteMinAggregateOutputType | null
    _max: ComprobanteMaxAggregateOutputType | null
  }

  export type ComprobanteAvgAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    numero: number | null
    size_bytes: number | null
  }

  export type ComprobanteSumAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    numero: number | null
    size_bytes: number | null
  }

  export type ComprobanteMinAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    tipo: string | null
    serie: string | null
    numero: number | null
    numero_formateado: string | null
    archivo_nombre: string | null
    archivo_ruta: string | null
    mime: string | null
    size_bytes: number | null
    created_at: Date | null
  }

  export type ComprobanteMaxAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    tipo: string | null
    serie: string | null
    numero: number | null
    numero_formateado: string | null
    archivo_nombre: string | null
    archivo_ruta: string | null
    mime: string | null
    size_bytes: number | null
    created_at: Date | null
  }

  export type ComprobanteCountAggregateOutputType = {
    id: number
    pedido_id: number
    tipo: number
    serie: number
    numero: number
    numero_formateado: number
    archivo_nombre: number
    archivo_ruta: number
    mime: number
    size_bytes: number
    created_at: number
    _all: number
  }


  export type ComprobanteAvgAggregateInputType = {
    id?: true
    pedido_id?: true
    numero?: true
    size_bytes?: true
  }

  export type ComprobanteSumAggregateInputType = {
    id?: true
    pedido_id?: true
    numero?: true
    size_bytes?: true
  }

  export type ComprobanteMinAggregateInputType = {
    id?: true
    pedido_id?: true
    tipo?: true
    serie?: true
    numero?: true
    numero_formateado?: true
    archivo_nombre?: true
    archivo_ruta?: true
    mime?: true
    size_bytes?: true
    created_at?: true
  }

  export type ComprobanteMaxAggregateInputType = {
    id?: true
    pedido_id?: true
    tipo?: true
    serie?: true
    numero?: true
    numero_formateado?: true
    archivo_nombre?: true
    archivo_ruta?: true
    mime?: true
    size_bytes?: true
    created_at?: true
  }

  export type ComprobanteCountAggregateInputType = {
    id?: true
    pedido_id?: true
    tipo?: true
    serie?: true
    numero?: true
    numero_formateado?: true
    archivo_nombre?: true
    archivo_ruta?: true
    mime?: true
    size_bytes?: true
    created_at?: true
    _all?: true
  }

  export type ComprobanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comprobante to aggregate.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comprobantes
    **/
    _count?: true | ComprobanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComprobanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComprobanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComprobanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComprobanteMaxAggregateInputType
  }

  export type GetComprobanteAggregateType<T extends ComprobanteAggregateArgs> = {
        [P in keyof T & keyof AggregateComprobante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprobante[P]>
      : GetScalarType<T[P], AggregateComprobante[P]>
  }




  export type ComprobanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprobanteWhereInput
    orderBy?: ComprobanteOrderByWithAggregationInput | ComprobanteOrderByWithAggregationInput[]
    by: ComprobanteScalarFieldEnum[] | ComprobanteScalarFieldEnum
    having?: ComprobanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComprobanteCountAggregateInputType | true
    _avg?: ComprobanteAvgAggregateInputType
    _sum?: ComprobanteSumAggregateInputType
    _min?: ComprobanteMinAggregateInputType
    _max?: ComprobanteMaxAggregateInputType
  }

  export type ComprobanteGroupByOutputType = {
    id: number
    pedido_id: number
    tipo: string
    serie: string
    numero: number
    numero_formateado: string
    archivo_nombre: string
    archivo_ruta: string
    mime: string | null
    size_bytes: number | null
    created_at: Date
    _count: ComprobanteCountAggregateOutputType | null
    _avg: ComprobanteAvgAggregateOutputType | null
    _sum: ComprobanteSumAggregateOutputType | null
    _min: ComprobanteMinAggregateOutputType | null
    _max: ComprobanteMaxAggregateOutputType | null
  }

  type GetComprobanteGroupByPayload<T extends ComprobanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComprobanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComprobanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComprobanteGroupByOutputType[P]>
            : GetScalarType<T[P], ComprobanteGroupByOutputType[P]>
        }
      >
    >


  export type ComprobanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedido_id?: boolean
    tipo?: boolean
    serie?: boolean
    numero?: boolean
    numero_formateado?: boolean
    archivo_nombre?: boolean
    archivo_ruta?: boolean
    mime?: boolean
    size_bytes?: boolean
    created_at?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprobante"]>



  export type ComprobanteSelectScalar = {
    id?: boolean
    pedido_id?: boolean
    tipo?: boolean
    serie?: boolean
    numero?: boolean
    numero_formateado?: boolean
    archivo_nombre?: boolean
    archivo_ruta?: boolean
    mime?: boolean
    size_bytes?: boolean
    created_at?: boolean
  }

  export type ComprobanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedido_id" | "tipo" | "serie" | "numero" | "numero_formateado" | "archivo_nombre" | "archivo_ruta" | "mime" | "size_bytes" | "created_at", ExtArgs["result"]["comprobante"]>
  export type ComprobanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $ComprobantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comprobante"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedido_id: number
      tipo: string
      serie: string
      numero: number
      numero_formateado: string
      archivo_nombre: string
      archivo_ruta: string
      mime: string | null
      size_bytes: number | null
      created_at: Date
    }, ExtArgs["result"]["comprobante"]>
    composites: {}
  }

  type ComprobanteGetPayload<S extends boolean | null | undefined | ComprobanteDefaultArgs> = $Result.GetResult<Prisma.$ComprobantePayload, S>

  type ComprobanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComprobanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComprobanteCountAggregateInputType | true
    }

  export interface ComprobanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comprobante'], meta: { name: 'Comprobante' } }
    /**
     * Find zero or one Comprobante that matches the filter.
     * @param {ComprobanteFindUniqueArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComprobanteFindUniqueArgs>(args: SelectSubset<T, ComprobanteFindUniqueArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comprobante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComprobanteFindUniqueOrThrowArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComprobanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ComprobanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprobante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindFirstArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComprobanteFindFirstArgs>(args?: SelectSubset<T, ComprobanteFindFirstArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprobante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindFirstOrThrowArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComprobanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ComprobanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comprobantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comprobantes
     * const comprobantes = await prisma.comprobante.findMany()
     * 
     * // Get first 10 Comprobantes
     * const comprobantes = await prisma.comprobante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comprobanteWithIdOnly = await prisma.comprobante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComprobanteFindManyArgs>(args?: SelectSubset<T, ComprobanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comprobante.
     * @param {ComprobanteCreateArgs} args - Arguments to create a Comprobante.
     * @example
     * // Create one Comprobante
     * const Comprobante = await prisma.comprobante.create({
     *   data: {
     *     // ... data to create a Comprobante
     *   }
     * })
     * 
     */
    create<T extends ComprobanteCreateArgs>(args: SelectSubset<T, ComprobanteCreateArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comprobantes.
     * @param {ComprobanteCreateManyArgs} args - Arguments to create many Comprobantes.
     * @example
     * // Create many Comprobantes
     * const comprobante = await prisma.comprobante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComprobanteCreateManyArgs>(args?: SelectSubset<T, ComprobanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comprobante.
     * @param {ComprobanteDeleteArgs} args - Arguments to delete one Comprobante.
     * @example
     * // Delete one Comprobante
     * const Comprobante = await prisma.comprobante.delete({
     *   where: {
     *     // ... filter to delete one Comprobante
     *   }
     * })
     * 
     */
    delete<T extends ComprobanteDeleteArgs>(args: SelectSubset<T, ComprobanteDeleteArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comprobante.
     * @param {ComprobanteUpdateArgs} args - Arguments to update one Comprobante.
     * @example
     * // Update one Comprobante
     * const comprobante = await prisma.comprobante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComprobanteUpdateArgs>(args: SelectSubset<T, ComprobanteUpdateArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comprobantes.
     * @param {ComprobanteDeleteManyArgs} args - Arguments to filter Comprobantes to delete.
     * @example
     * // Delete a few Comprobantes
     * const { count } = await prisma.comprobante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComprobanteDeleteManyArgs>(args?: SelectSubset<T, ComprobanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comprobantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comprobantes
     * const comprobante = await prisma.comprobante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComprobanteUpdateManyArgs>(args: SelectSubset<T, ComprobanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comprobante.
     * @param {ComprobanteUpsertArgs} args - Arguments to update or create a Comprobante.
     * @example
     * // Update or create a Comprobante
     * const comprobante = await prisma.comprobante.upsert({
     *   create: {
     *     // ... data to create a Comprobante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comprobante we want to update
     *   }
     * })
     */
    upsert<T extends ComprobanteUpsertArgs>(args: SelectSubset<T, ComprobanteUpsertArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comprobantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteCountArgs} args - Arguments to filter Comprobantes to count.
     * @example
     * // Count the number of Comprobantes
     * const count = await prisma.comprobante.count({
     *   where: {
     *     // ... the filter for the Comprobantes we want to count
     *   }
     * })
    **/
    count<T extends ComprobanteCountArgs>(
      args?: Subset<T, ComprobanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComprobanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comprobante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComprobanteAggregateArgs>(args: Subset<T, ComprobanteAggregateArgs>): Prisma.PrismaPromise<GetComprobanteAggregateType<T>>

    /**
     * Group by Comprobante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteGroupByArgs} args - Group by arguments.
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
      T extends ComprobanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComprobanteGroupByArgs['orderBy'] }
        : { orderBy?: ComprobanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComprobanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComprobanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comprobante model
   */
  readonly fields: ComprobanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comprobante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComprobanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comprobante model
   */
  interface ComprobanteFieldRefs {
    readonly id: FieldRef<"Comprobante", 'Int'>
    readonly pedido_id: FieldRef<"Comprobante", 'Int'>
    readonly tipo: FieldRef<"Comprobante", 'String'>
    readonly serie: FieldRef<"Comprobante", 'String'>
    readonly numero: FieldRef<"Comprobante", 'Int'>
    readonly numero_formateado: FieldRef<"Comprobante", 'String'>
    readonly archivo_nombre: FieldRef<"Comprobante", 'String'>
    readonly archivo_ruta: FieldRef<"Comprobante", 'String'>
    readonly mime: FieldRef<"Comprobante", 'String'>
    readonly size_bytes: FieldRef<"Comprobante", 'Int'>
    readonly created_at: FieldRef<"Comprobante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comprobante findUnique
   */
  export type ComprobanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante findUniqueOrThrow
   */
  export type ComprobanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante findFirst
   */
  export type ComprobanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comprobantes.
     */
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante findFirstOrThrow
   */
  export type ComprobanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comprobantes.
     */
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante findMany
   */
  export type ComprobanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobantes to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante create
   */
  export type ComprobanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Comprobante.
     */
    data: XOR<ComprobanteCreateInput, ComprobanteUncheckedCreateInput>
  }

  /**
   * Comprobante createMany
   */
  export type ComprobanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comprobantes.
     */
    data: ComprobanteCreateManyInput | ComprobanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comprobante update
   */
  export type ComprobanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Comprobante.
     */
    data: XOR<ComprobanteUpdateInput, ComprobanteUncheckedUpdateInput>
    /**
     * Choose, which Comprobante to update.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante updateMany
   */
  export type ComprobanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comprobantes.
     */
    data: XOR<ComprobanteUpdateManyMutationInput, ComprobanteUncheckedUpdateManyInput>
    /**
     * Filter which Comprobantes to update
     */
    where?: ComprobanteWhereInput
    /**
     * Limit how many Comprobantes to update.
     */
    limit?: number
  }

  /**
   * Comprobante upsert
   */
  export type ComprobanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Comprobante to update in case it exists.
     */
    where: ComprobanteWhereUniqueInput
    /**
     * In case the Comprobante found by the `where` argument doesn't exist, create a new Comprobante with this data.
     */
    create: XOR<ComprobanteCreateInput, ComprobanteUncheckedCreateInput>
    /**
     * In case the Comprobante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComprobanteUpdateInput, ComprobanteUncheckedUpdateInput>
  }

  /**
   * Comprobante delete
   */
  export type ComprobanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter which Comprobante to delete.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante deleteMany
   */
  export type ComprobanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comprobantes to delete
     */
    where?: ComprobanteWhereInput
    /**
     * Limit how many Comprobantes to delete.
     */
    limit?: number
  }

  /**
   * Comprobante without action
   */
  export type ComprobanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
  }


  /**
   * Model ComprobanteSerie
   */

  export type AggregateComprobanteSerie = {
    _count: ComprobanteSerieCountAggregateOutputType | null
    _avg: ComprobanteSerieAvgAggregateOutputType | null
    _sum: ComprobanteSerieSumAggregateOutputType | null
    _min: ComprobanteSerieMinAggregateOutputType | null
    _max: ComprobanteSerieMaxAggregateOutputType | null
  }

  export type ComprobanteSerieAvgAggregateOutputType = {
    id: number | null
    correlativo: number | null
  }

  export type ComprobanteSerieSumAggregateOutputType = {
    id: number | null
    correlativo: number | null
  }

  export type ComprobanteSerieMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    serie: string | null
    correlativo: number | null
  }

  export type ComprobanteSerieMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    serie: string | null
    correlativo: number | null
  }

  export type ComprobanteSerieCountAggregateOutputType = {
    id: number
    tipo: number
    serie: number
    correlativo: number
    _all: number
  }


  export type ComprobanteSerieAvgAggregateInputType = {
    id?: true
    correlativo?: true
  }

  export type ComprobanteSerieSumAggregateInputType = {
    id?: true
    correlativo?: true
  }

  export type ComprobanteSerieMinAggregateInputType = {
    id?: true
    tipo?: true
    serie?: true
    correlativo?: true
  }

  export type ComprobanteSerieMaxAggregateInputType = {
    id?: true
    tipo?: true
    serie?: true
    correlativo?: true
  }

  export type ComprobanteSerieCountAggregateInputType = {
    id?: true
    tipo?: true
    serie?: true
    correlativo?: true
    _all?: true
  }

  export type ComprobanteSerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComprobanteSerie to aggregate.
     */
    where?: ComprobanteSerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComprobanteSeries to fetch.
     */
    orderBy?: ComprobanteSerieOrderByWithRelationInput | ComprobanteSerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComprobanteSerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComprobanteSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComprobanteSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComprobanteSeries
    **/
    _count?: true | ComprobanteSerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComprobanteSerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComprobanteSerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComprobanteSerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComprobanteSerieMaxAggregateInputType
  }

  export type GetComprobanteSerieAggregateType<T extends ComprobanteSerieAggregateArgs> = {
        [P in keyof T & keyof AggregateComprobanteSerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprobanteSerie[P]>
      : GetScalarType<T[P], AggregateComprobanteSerie[P]>
  }




  export type ComprobanteSerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprobanteSerieWhereInput
    orderBy?: ComprobanteSerieOrderByWithAggregationInput | ComprobanteSerieOrderByWithAggregationInput[]
    by: ComprobanteSerieScalarFieldEnum[] | ComprobanteSerieScalarFieldEnum
    having?: ComprobanteSerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComprobanteSerieCountAggregateInputType | true
    _avg?: ComprobanteSerieAvgAggregateInputType
    _sum?: ComprobanteSerieSumAggregateInputType
    _min?: ComprobanteSerieMinAggregateInputType
    _max?: ComprobanteSerieMaxAggregateInputType
  }

  export type ComprobanteSerieGroupByOutputType = {
    id: number
    tipo: string
    serie: string
    correlativo: number
    _count: ComprobanteSerieCountAggregateOutputType | null
    _avg: ComprobanteSerieAvgAggregateOutputType | null
    _sum: ComprobanteSerieSumAggregateOutputType | null
    _min: ComprobanteSerieMinAggregateOutputType | null
    _max: ComprobanteSerieMaxAggregateOutputType | null
  }

  type GetComprobanteSerieGroupByPayload<T extends ComprobanteSerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComprobanteSerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComprobanteSerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComprobanteSerieGroupByOutputType[P]>
            : GetScalarType<T[P], ComprobanteSerieGroupByOutputType[P]>
        }
      >
    >


  export type ComprobanteSerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    serie?: boolean
    correlativo?: boolean
  }, ExtArgs["result"]["comprobanteSerie"]>



  export type ComprobanteSerieSelectScalar = {
    id?: boolean
    tipo?: boolean
    serie?: boolean
    correlativo?: boolean
  }

  export type ComprobanteSerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "serie" | "correlativo", ExtArgs["result"]["comprobanteSerie"]>

  export type $ComprobanteSeriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComprobanteSerie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      serie: string
      correlativo: number
    }, ExtArgs["result"]["comprobanteSerie"]>
    composites: {}
  }

  type ComprobanteSerieGetPayload<S extends boolean | null | undefined | ComprobanteSerieDefaultArgs> = $Result.GetResult<Prisma.$ComprobanteSeriePayload, S>

  type ComprobanteSerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComprobanteSerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComprobanteSerieCountAggregateInputType | true
    }

  export interface ComprobanteSerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComprobanteSerie'], meta: { name: 'ComprobanteSerie' } }
    /**
     * Find zero or one ComprobanteSerie that matches the filter.
     * @param {ComprobanteSerieFindUniqueArgs} args - Arguments to find a ComprobanteSerie
     * @example
     * // Get one ComprobanteSerie
     * const comprobanteSerie = await prisma.comprobanteSerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComprobanteSerieFindUniqueArgs>(args: SelectSubset<T, ComprobanteSerieFindUniqueArgs<ExtArgs>>): Prisma__ComprobanteSerieClient<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComprobanteSerie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComprobanteSerieFindUniqueOrThrowArgs} args - Arguments to find a ComprobanteSerie
     * @example
     * // Get one ComprobanteSerie
     * const comprobanteSerie = await prisma.comprobanteSerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComprobanteSerieFindUniqueOrThrowArgs>(args: SelectSubset<T, ComprobanteSerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComprobanteSerieClient<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComprobanteSerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteSerieFindFirstArgs} args - Arguments to find a ComprobanteSerie
     * @example
     * // Get one ComprobanteSerie
     * const comprobanteSerie = await prisma.comprobanteSerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComprobanteSerieFindFirstArgs>(args?: SelectSubset<T, ComprobanteSerieFindFirstArgs<ExtArgs>>): Prisma__ComprobanteSerieClient<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComprobanteSerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteSerieFindFirstOrThrowArgs} args - Arguments to find a ComprobanteSerie
     * @example
     * // Get one ComprobanteSerie
     * const comprobanteSerie = await prisma.comprobanteSerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComprobanteSerieFindFirstOrThrowArgs>(args?: SelectSubset<T, ComprobanteSerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComprobanteSerieClient<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComprobanteSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteSerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComprobanteSeries
     * const comprobanteSeries = await prisma.comprobanteSerie.findMany()
     * 
     * // Get first 10 ComprobanteSeries
     * const comprobanteSeries = await prisma.comprobanteSerie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comprobanteSerieWithIdOnly = await prisma.comprobanteSerie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComprobanteSerieFindManyArgs>(args?: SelectSubset<T, ComprobanteSerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComprobanteSerie.
     * @param {ComprobanteSerieCreateArgs} args - Arguments to create a ComprobanteSerie.
     * @example
     * // Create one ComprobanteSerie
     * const ComprobanteSerie = await prisma.comprobanteSerie.create({
     *   data: {
     *     // ... data to create a ComprobanteSerie
     *   }
     * })
     * 
     */
    create<T extends ComprobanteSerieCreateArgs>(args: SelectSubset<T, ComprobanteSerieCreateArgs<ExtArgs>>): Prisma__ComprobanteSerieClient<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComprobanteSeries.
     * @param {ComprobanteSerieCreateManyArgs} args - Arguments to create many ComprobanteSeries.
     * @example
     * // Create many ComprobanteSeries
     * const comprobanteSerie = await prisma.comprobanteSerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComprobanteSerieCreateManyArgs>(args?: SelectSubset<T, ComprobanteSerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ComprobanteSerie.
     * @param {ComprobanteSerieDeleteArgs} args - Arguments to delete one ComprobanteSerie.
     * @example
     * // Delete one ComprobanteSerie
     * const ComprobanteSerie = await prisma.comprobanteSerie.delete({
     *   where: {
     *     // ... filter to delete one ComprobanteSerie
     *   }
     * })
     * 
     */
    delete<T extends ComprobanteSerieDeleteArgs>(args: SelectSubset<T, ComprobanteSerieDeleteArgs<ExtArgs>>): Prisma__ComprobanteSerieClient<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComprobanteSerie.
     * @param {ComprobanteSerieUpdateArgs} args - Arguments to update one ComprobanteSerie.
     * @example
     * // Update one ComprobanteSerie
     * const comprobanteSerie = await prisma.comprobanteSerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComprobanteSerieUpdateArgs>(args: SelectSubset<T, ComprobanteSerieUpdateArgs<ExtArgs>>): Prisma__ComprobanteSerieClient<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComprobanteSeries.
     * @param {ComprobanteSerieDeleteManyArgs} args - Arguments to filter ComprobanteSeries to delete.
     * @example
     * // Delete a few ComprobanteSeries
     * const { count } = await prisma.comprobanteSerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComprobanteSerieDeleteManyArgs>(args?: SelectSubset<T, ComprobanteSerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComprobanteSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteSerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComprobanteSeries
     * const comprobanteSerie = await prisma.comprobanteSerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComprobanteSerieUpdateManyArgs>(args: SelectSubset<T, ComprobanteSerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ComprobanteSerie.
     * @param {ComprobanteSerieUpsertArgs} args - Arguments to update or create a ComprobanteSerie.
     * @example
     * // Update or create a ComprobanteSerie
     * const comprobanteSerie = await prisma.comprobanteSerie.upsert({
     *   create: {
     *     // ... data to create a ComprobanteSerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComprobanteSerie we want to update
     *   }
     * })
     */
    upsert<T extends ComprobanteSerieUpsertArgs>(args: SelectSubset<T, ComprobanteSerieUpsertArgs<ExtArgs>>): Prisma__ComprobanteSerieClient<$Result.GetResult<Prisma.$ComprobanteSeriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComprobanteSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteSerieCountArgs} args - Arguments to filter ComprobanteSeries to count.
     * @example
     * // Count the number of ComprobanteSeries
     * const count = await prisma.comprobanteSerie.count({
     *   where: {
     *     // ... the filter for the ComprobanteSeries we want to count
     *   }
     * })
    **/
    count<T extends ComprobanteSerieCountArgs>(
      args?: Subset<T, ComprobanteSerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComprobanteSerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComprobanteSerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteSerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComprobanteSerieAggregateArgs>(args: Subset<T, ComprobanteSerieAggregateArgs>): Prisma.PrismaPromise<GetComprobanteSerieAggregateType<T>>

    /**
     * Group by ComprobanteSerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteSerieGroupByArgs} args - Group by arguments.
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
      T extends ComprobanteSerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComprobanteSerieGroupByArgs['orderBy'] }
        : { orderBy?: ComprobanteSerieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComprobanteSerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComprobanteSerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComprobanteSerie model
   */
  readonly fields: ComprobanteSerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComprobanteSerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComprobanteSerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ComprobanteSerie model
   */
  interface ComprobanteSerieFieldRefs {
    readonly id: FieldRef<"ComprobanteSerie", 'Int'>
    readonly tipo: FieldRef<"ComprobanteSerie", 'String'>
    readonly serie: FieldRef<"ComprobanteSerie", 'String'>
    readonly correlativo: FieldRef<"ComprobanteSerie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ComprobanteSerie findUnique
   */
  export type ComprobanteSerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * Filter, which ComprobanteSerie to fetch.
     */
    where: ComprobanteSerieWhereUniqueInput
  }

  /**
   * ComprobanteSerie findUniqueOrThrow
   */
  export type ComprobanteSerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * Filter, which ComprobanteSerie to fetch.
     */
    where: ComprobanteSerieWhereUniqueInput
  }

  /**
   * ComprobanteSerie findFirst
   */
  export type ComprobanteSerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * Filter, which ComprobanteSerie to fetch.
     */
    where?: ComprobanteSerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComprobanteSeries to fetch.
     */
    orderBy?: ComprobanteSerieOrderByWithRelationInput | ComprobanteSerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComprobanteSeries.
     */
    cursor?: ComprobanteSerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComprobanteSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComprobanteSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComprobanteSeries.
     */
    distinct?: ComprobanteSerieScalarFieldEnum | ComprobanteSerieScalarFieldEnum[]
  }

  /**
   * ComprobanteSerie findFirstOrThrow
   */
  export type ComprobanteSerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * Filter, which ComprobanteSerie to fetch.
     */
    where?: ComprobanteSerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComprobanteSeries to fetch.
     */
    orderBy?: ComprobanteSerieOrderByWithRelationInput | ComprobanteSerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComprobanteSeries.
     */
    cursor?: ComprobanteSerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComprobanteSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComprobanteSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComprobanteSeries.
     */
    distinct?: ComprobanteSerieScalarFieldEnum | ComprobanteSerieScalarFieldEnum[]
  }

  /**
   * ComprobanteSerie findMany
   */
  export type ComprobanteSerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * Filter, which ComprobanteSeries to fetch.
     */
    where?: ComprobanteSerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComprobanteSeries to fetch.
     */
    orderBy?: ComprobanteSerieOrderByWithRelationInput | ComprobanteSerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComprobanteSeries.
     */
    cursor?: ComprobanteSerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComprobanteSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComprobanteSeries.
     */
    skip?: number
    distinct?: ComprobanteSerieScalarFieldEnum | ComprobanteSerieScalarFieldEnum[]
  }

  /**
   * ComprobanteSerie create
   */
  export type ComprobanteSerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * The data needed to create a ComprobanteSerie.
     */
    data: XOR<ComprobanteSerieCreateInput, ComprobanteSerieUncheckedCreateInput>
  }

  /**
   * ComprobanteSerie createMany
   */
  export type ComprobanteSerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComprobanteSeries.
     */
    data: ComprobanteSerieCreateManyInput | ComprobanteSerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComprobanteSerie update
   */
  export type ComprobanteSerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * The data needed to update a ComprobanteSerie.
     */
    data: XOR<ComprobanteSerieUpdateInput, ComprobanteSerieUncheckedUpdateInput>
    /**
     * Choose, which ComprobanteSerie to update.
     */
    where: ComprobanteSerieWhereUniqueInput
  }

  /**
   * ComprobanteSerie updateMany
   */
  export type ComprobanteSerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComprobanteSeries.
     */
    data: XOR<ComprobanteSerieUpdateManyMutationInput, ComprobanteSerieUncheckedUpdateManyInput>
    /**
     * Filter which ComprobanteSeries to update
     */
    where?: ComprobanteSerieWhereInput
    /**
     * Limit how many ComprobanteSeries to update.
     */
    limit?: number
  }

  /**
   * ComprobanteSerie upsert
   */
  export type ComprobanteSerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * The filter to search for the ComprobanteSerie to update in case it exists.
     */
    where: ComprobanteSerieWhereUniqueInput
    /**
     * In case the ComprobanteSerie found by the `where` argument doesn't exist, create a new ComprobanteSerie with this data.
     */
    create: XOR<ComprobanteSerieCreateInput, ComprobanteSerieUncheckedCreateInput>
    /**
     * In case the ComprobanteSerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComprobanteSerieUpdateInput, ComprobanteSerieUncheckedUpdateInput>
  }

  /**
   * ComprobanteSerie delete
   */
  export type ComprobanteSerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
    /**
     * Filter which ComprobanteSerie to delete.
     */
    where: ComprobanteSerieWhereUniqueInput
  }

  /**
   * ComprobanteSerie deleteMany
   */
  export type ComprobanteSerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComprobanteSeries to delete
     */
    where?: ComprobanteSerieWhereInput
    /**
     * Limit how many ComprobanteSeries to delete.
     */
    limit?: number
  }

  /**
   * ComprobanteSerie without action
   */
  export type ComprobanteSerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteSerie
     */
    select?: ComprobanteSerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprobanteSerie
     */
    omit?: ComprobanteSerieOmit<ExtArgs> | null
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


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen: 'imagen',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    categoria_id: 'categoria_id',
    imagen: 'imagen',
    stock: 'stock',
    destacado: 'destacado',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    password: 'password',
    telefono: 'telefono',
    direccion: 'direccion',
    distrito: 'distrito',
    numero_casa: 'numero_casa',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rol: 'rol',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    total: 'total',
    estado: 'estado',
    fecha_entrega: 'fecha_entrega',
    direccion_entrega: 'direccion_entrega',
    distrito_entrega: 'distrito_entrega',
    numero_casa_entrega: 'numero_casa_entrega',
    direccion_id: 'direccion_id',
    telefono_contacto: 'telefono_contacto',
    notas: 'notas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PedidoDetalleScalarFieldEnum: {
    id: 'id',
    pedido_id: 'pedido_id',
    producto_id: 'producto_id',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario',
    subtotal: 'subtotal'
  };

  export type PedidoDetalleScalarFieldEnum = (typeof PedidoDetalleScalarFieldEnum)[keyof typeof PedidoDetalleScalarFieldEnum]


  export const LoginLogScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    admin_id: 'admin_id',
    tipo_usuario: 'tipo_usuario',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    exitoso: 'exitoso',
    created_at: 'created_at'
  };

  export type LoginLogScalarFieldEnum = (typeof LoginLogScalarFieldEnum)[keyof typeof LoginLogScalarFieldEnum]


  export const ComprobanteScalarFieldEnum: {
    id: 'id',
    pedido_id: 'pedido_id',
    tipo: 'tipo',
    serie: 'serie',
    numero: 'numero',
    numero_formateado: 'numero_formateado',
    archivo_nombre: 'archivo_nombre',
    archivo_ruta: 'archivo_ruta',
    mime: 'mime',
    size_bytes: 'size_bytes',
    created_at: 'created_at'
  };

  export type ComprobanteScalarFieldEnum = (typeof ComprobanteScalarFieldEnum)[keyof typeof ComprobanteScalarFieldEnum]


  export const ComprobanteSerieScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    serie: 'serie',
    correlativo: 'correlativo'
  };

  export type ComprobanteSerieScalarFieldEnum = (typeof ComprobanteSerieScalarFieldEnum)[keyof typeof ComprobanteSerieScalarFieldEnum]


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


  export const CategoriaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen: 'imagen'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const ProductoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen: 'imagen'
  };

  export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    password: 'password',
    telefono: 'telefono',
    direccion: 'direccion',
    distrito: 'distrito',
    numero_casa: 'numero_casa'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const AdministradorOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    email: 'email',
    password: 'password'
  };

  export type AdministradorOrderByRelevanceFieldEnum = (typeof AdministradorOrderByRelevanceFieldEnum)[keyof typeof AdministradorOrderByRelevanceFieldEnum]


  export const PedidoOrderByRelevanceFieldEnum: {
    direccion_entrega: 'direccion_entrega',
    distrito_entrega: 'distrito_entrega',
    numero_casa_entrega: 'numero_casa_entrega',
    telefono_contacto: 'telefono_contacto',
    notas: 'notas'
  };

  export type PedidoOrderByRelevanceFieldEnum = (typeof PedidoOrderByRelevanceFieldEnum)[keyof typeof PedidoOrderByRelevanceFieldEnum]


  export const LoginLogOrderByRelevanceFieldEnum: {
    ip_address: 'ip_address',
    user_agent: 'user_agent'
  };

  export type LoginLogOrderByRelevanceFieldEnum = (typeof LoginLogOrderByRelevanceFieldEnum)[keyof typeof LoginLogOrderByRelevanceFieldEnum]


  export const ComprobanteOrderByRelevanceFieldEnum: {
    tipo: 'tipo',
    serie: 'serie',
    numero_formateado: 'numero_formateado',
    archivo_nombre: 'archivo_nombre',
    archivo_ruta: 'archivo_ruta',
    mime: 'mime'
  };

  export type ComprobanteOrderByRelevanceFieldEnum = (typeof ComprobanteOrderByRelevanceFieldEnum)[keyof typeof ComprobanteOrderByRelevanceFieldEnum]


  export const ComprobanteSerieOrderByRelevanceFieldEnum: {
    tipo: 'tipo',
    serie: 'serie'
  };

  export type ComprobanteSerieOrderByRelevanceFieldEnum = (typeof ComprobanteSerieOrderByRelevanceFieldEnum)[keyof typeof ComprobanteSerieOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'AdminRol'
   */
  export type EnumAdminRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRol'>
    


  /**
   * Reference to a field of type 'PedidoEstado'
   */
  export type EnumPedidoEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PedidoEstado'>
    


  /**
   * Reference to a field of type 'TipoUsuarioLoginLog'
   */
  export type EnumTipoUsuarioLoginLogFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuarioLoginLog'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    imagen?: StringNullableFilter<"Categoria"> | string | null
    activo?: BoolFilter<"Categoria"> | boolean
    created_at?: DateTimeFilter<"Categoria"> | Date | string
    updated_at?: DateTimeFilter<"Categoria"> | Date | string
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    imagen?: StringNullableFilter<"Categoria"> | string | null
    activo?: BoolFilter<"Categoria"> | boolean
    created_at?: DateTimeFilter<"Categoria"> | Date | string
    updated_at?: DateTimeFilter<"Categoria"> | Date | string
    productos?: ProductoListRelationFilter
  }, "id" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
    imagen?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
    activo?: BoolWithAggregatesFilter<"Categoria"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    categoria_id?: IntNullableFilter<"Producto"> | number | null
    imagen?: StringNullableFilter<"Producto"> | string | null
    stock?: IntFilter<"Producto"> | number
    destacado?: BoolFilter<"Producto"> | boolean
    activo?: BoolFilter<"Producto"> | boolean
    created_at?: DateTimeFilter<"Producto"> | Date | string
    updated_at?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    detalles?: PedidoDetalleListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    categoria_id?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    stock?: SortOrder
    destacado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    detalles?: PedidoDetalleOrderByRelationAggregateInput
    _relevance?: ProductoOrderByRelevanceInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    categoria_id?: IntNullableFilter<"Producto"> | number | null
    imagen?: StringNullableFilter<"Producto"> | string | null
    stock?: IntFilter<"Producto"> | number
    destacado?: BoolFilter<"Producto"> | boolean
    activo?: BoolFilter<"Producto"> | boolean
    created_at?: DateTimeFilter<"Producto"> | Date | string
    updated_at?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    detalles?: PedidoDetalleListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    categoria_id?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    stock?: SortOrder
    destacado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precio?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    categoria_id?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    imagen?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    stock?: IntWithAggregatesFilter<"Producto"> | number
    destacado?: BoolWithAggregatesFilter<"Producto"> | boolean
    activo?: BoolWithAggregatesFilter<"Producto"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    direccion?: StringNullableFilter<"Usuario"> | string | null
    distrito?: StringNullableFilter<"Usuario"> | string | null
    numero_casa?: StringNullableFilter<"Usuario"> | string | null
    activo?: BoolFilter<"Usuario"> | boolean
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    pedidos?: PedidoListRelationFilter
    loginLogs?: LoginLogListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    distrito?: SortOrderInput | SortOrder
    numero_casa?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
    loginLogs?: LoginLogOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    direccion?: StringNullableFilter<"Usuario"> | string | null
    distrito?: StringNullableFilter<"Usuario"> | string | null
    numero_casa?: StringNullableFilter<"Usuario"> | string | null
    activo?: BoolFilter<"Usuario"> | boolean
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    pedidos?: PedidoListRelationFilter
    loginLogs?: LoginLogListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    distrito?: SortOrderInput | SortOrder
    numero_casa?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    distrito?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    numero_casa?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id?: IntFilter<"Administrador"> | number
    nombre?: StringFilter<"Administrador"> | string
    email?: StringFilter<"Administrador"> | string
    password?: StringFilter<"Administrador"> | string
    rol?: EnumAdminRolFilter<"Administrador"> | $Enums.AdminRol
    activo?: BoolFilter<"Administrador"> | boolean
    created_at?: DateTimeFilter<"Administrador"> | Date | string
    updated_at?: DateTimeFilter<"Administrador"> | Date | string
    loginLogs?: LoginLogListRelationFilter
  }

  export type AdministradorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    loginLogs?: LoginLogOrderByRelationAggregateInput
    _relevance?: AdministradorOrderByRelevanceInput
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    nombre?: StringFilter<"Administrador"> | string
    password?: StringFilter<"Administrador"> | string
    rol?: EnumAdminRolFilter<"Administrador"> | $Enums.AdminRol
    activo?: BoolFilter<"Administrador"> | boolean
    created_at?: DateTimeFilter<"Administrador"> | Date | string
    updated_at?: DateTimeFilter<"Administrador"> | Date | string
    loginLogs?: LoginLogListRelationFilter
  }, "id" | "email">

  export type AdministradorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Administrador"> | number
    nombre?: StringWithAggregatesFilter<"Administrador"> | string
    email?: StringWithAggregatesFilter<"Administrador"> | string
    password?: StringWithAggregatesFilter<"Administrador"> | string
    rol?: EnumAdminRolWithAggregatesFilter<"Administrador"> | $Enums.AdminRol
    activo?: BoolWithAggregatesFilter<"Administrador"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    usuario_id?: IntNullableFilter<"Pedido"> | number | null
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFilter<"Pedido"> | $Enums.PedidoEstado
    fecha_entrega?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    direccion_entrega?: StringNullableFilter<"Pedido"> | string | null
    distrito_entrega?: StringNullableFilter<"Pedido"> | string | null
    numero_casa_entrega?: StringNullableFilter<"Pedido"> | string | null
    direccion_id?: IntNullableFilter<"Pedido"> | number | null
    telefono_contacto?: StringNullableFilter<"Pedido"> | string | null
    notas?: StringNullableFilter<"Pedido"> | string | null
    created_at?: DateTimeFilter<"Pedido"> | Date | string
    updated_at?: DateTimeFilter<"Pedido"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    detalles?: PedidoDetalleListRelationFilter
    comprobantes?: ComprobanteListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha_entrega?: SortOrderInput | SortOrder
    direccion_entrega?: SortOrderInput | SortOrder
    distrito_entrega?: SortOrderInput | SortOrder
    numero_casa_entrega?: SortOrderInput | SortOrder
    direccion_id?: SortOrderInput | SortOrder
    telefono_contacto?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    detalles?: PedidoDetalleOrderByRelationAggregateInput
    comprobantes?: ComprobanteOrderByRelationAggregateInput
    _relevance?: PedidoOrderByRelevanceInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    usuario_id?: IntNullableFilter<"Pedido"> | number | null
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFilter<"Pedido"> | $Enums.PedidoEstado
    fecha_entrega?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    direccion_entrega?: StringNullableFilter<"Pedido"> | string | null
    distrito_entrega?: StringNullableFilter<"Pedido"> | string | null
    numero_casa_entrega?: StringNullableFilter<"Pedido"> | string | null
    direccion_id?: IntNullableFilter<"Pedido"> | number | null
    telefono_contacto?: StringNullableFilter<"Pedido"> | string | null
    notas?: StringNullableFilter<"Pedido"> | string | null
    created_at?: DateTimeFilter<"Pedido"> | Date | string
    updated_at?: DateTimeFilter<"Pedido"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    detalles?: PedidoDetalleListRelationFilter
    comprobantes?: ComprobanteListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha_entrega?: SortOrderInput | SortOrder
    direccion_entrega?: SortOrderInput | SortOrder
    distrito_entrega?: SortOrderInput | SortOrder
    numero_casa_entrega?: SortOrderInput | SortOrder
    direccion_id?: SortOrderInput | SortOrder
    telefono_contacto?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    usuario_id?: IntNullableWithAggregatesFilter<"Pedido"> | number | null
    total?: DecimalWithAggregatesFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoWithAggregatesFilter<"Pedido"> | $Enums.PedidoEstado
    fecha_entrega?: DateTimeNullableWithAggregatesFilter<"Pedido"> | Date | string | null
    direccion_entrega?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    distrito_entrega?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    numero_casa_entrega?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    direccion_id?: IntNullableWithAggregatesFilter<"Pedido"> | number | null
    telefono_contacto?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    notas?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type PedidoDetalleWhereInput = {
    AND?: PedidoDetalleWhereInput | PedidoDetalleWhereInput[]
    OR?: PedidoDetalleWhereInput[]
    NOT?: PedidoDetalleWhereInput | PedidoDetalleWhereInput[]
    id?: IntFilter<"PedidoDetalle"> | number
    pedido_id?: IntFilter<"PedidoDetalle"> | number
    producto_id?: IntNullableFilter<"PedidoDetalle"> | number | null
    cantidad?: IntFilter<"PedidoDetalle"> | number
    precio_unitario?: DecimalFilter<"PedidoDetalle"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"PedidoDetalle"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoNullableScalarRelationFilter, ProductoWhereInput> | null
  }

  export type PedidoDetalleOrderByWithRelationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type PedidoDetalleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoDetalleWhereInput | PedidoDetalleWhereInput[]
    OR?: PedidoDetalleWhereInput[]
    NOT?: PedidoDetalleWhereInput | PedidoDetalleWhereInput[]
    pedido_id?: IntFilter<"PedidoDetalle"> | number
    producto_id?: IntNullableFilter<"PedidoDetalle"> | number | null
    cantidad?: IntFilter<"PedidoDetalle"> | number
    precio_unitario?: DecimalFilter<"PedidoDetalle"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"PedidoDetalle"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoNullableScalarRelationFilter, ProductoWhereInput> | null
  }, "id">

  export type PedidoDetalleOrderByWithAggregationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    _count?: PedidoDetalleCountOrderByAggregateInput
    _avg?: PedidoDetalleAvgOrderByAggregateInput
    _max?: PedidoDetalleMaxOrderByAggregateInput
    _min?: PedidoDetalleMinOrderByAggregateInput
    _sum?: PedidoDetalleSumOrderByAggregateInput
  }

  export type PedidoDetalleScalarWhereWithAggregatesInput = {
    AND?: PedidoDetalleScalarWhereWithAggregatesInput | PedidoDetalleScalarWhereWithAggregatesInput[]
    OR?: PedidoDetalleScalarWhereWithAggregatesInput[]
    NOT?: PedidoDetalleScalarWhereWithAggregatesInput | PedidoDetalleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidoDetalle"> | number
    pedido_id?: IntWithAggregatesFilter<"PedidoDetalle"> | number
    producto_id?: IntNullableWithAggregatesFilter<"PedidoDetalle"> | number | null
    cantidad?: IntWithAggregatesFilter<"PedidoDetalle"> | number
    precio_unitario?: DecimalWithAggregatesFilter<"PedidoDetalle"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"PedidoDetalle"> | Decimal | DecimalJsLike | number | string
  }

  export type LoginLogWhereInput = {
    AND?: LoginLogWhereInput | LoginLogWhereInput[]
    OR?: LoginLogWhereInput[]
    NOT?: LoginLogWhereInput | LoginLogWhereInput[]
    id?: IntFilter<"LoginLog"> | number
    usuario_id?: IntNullableFilter<"LoginLog"> | number | null
    admin_id?: IntNullableFilter<"LoginLog"> | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFilter<"LoginLog"> | $Enums.TipoUsuarioLoginLog
    ip_address?: StringNullableFilter<"LoginLog"> | string | null
    user_agent?: StringNullableFilter<"LoginLog"> | string | null
    exitoso?: BoolFilter<"LoginLog"> | boolean
    created_at?: DateTimeFilter<"LoginLog"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    admin?: XOR<AdministradorNullableScalarRelationFilter, AdministradorWhereInput> | null
  }

  export type LoginLogOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    admin_id?: SortOrderInput | SortOrder
    tipo_usuario?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    exitoso?: SortOrder
    created_at?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    admin?: AdministradorOrderByWithRelationInput
    _relevance?: LoginLogOrderByRelevanceInput
  }

  export type LoginLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LoginLogWhereInput | LoginLogWhereInput[]
    OR?: LoginLogWhereInput[]
    NOT?: LoginLogWhereInput | LoginLogWhereInput[]
    usuario_id?: IntNullableFilter<"LoginLog"> | number | null
    admin_id?: IntNullableFilter<"LoginLog"> | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFilter<"LoginLog"> | $Enums.TipoUsuarioLoginLog
    ip_address?: StringNullableFilter<"LoginLog"> | string | null
    user_agent?: StringNullableFilter<"LoginLog"> | string | null
    exitoso?: BoolFilter<"LoginLog"> | boolean
    created_at?: DateTimeFilter<"LoginLog"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    admin?: XOR<AdministradorNullableScalarRelationFilter, AdministradorWhereInput> | null
  }, "id">

  export type LoginLogOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    admin_id?: SortOrderInput | SortOrder
    tipo_usuario?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    exitoso?: SortOrder
    created_at?: SortOrder
    _count?: LoginLogCountOrderByAggregateInput
    _avg?: LoginLogAvgOrderByAggregateInput
    _max?: LoginLogMaxOrderByAggregateInput
    _min?: LoginLogMinOrderByAggregateInput
    _sum?: LoginLogSumOrderByAggregateInput
  }

  export type LoginLogScalarWhereWithAggregatesInput = {
    AND?: LoginLogScalarWhereWithAggregatesInput | LoginLogScalarWhereWithAggregatesInput[]
    OR?: LoginLogScalarWhereWithAggregatesInput[]
    NOT?: LoginLogScalarWhereWithAggregatesInput | LoginLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LoginLog"> | number
    usuario_id?: IntNullableWithAggregatesFilter<"LoginLog"> | number | null
    admin_id?: IntNullableWithAggregatesFilter<"LoginLog"> | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogWithAggregatesFilter<"LoginLog"> | $Enums.TipoUsuarioLoginLog
    ip_address?: StringNullableWithAggregatesFilter<"LoginLog"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"LoginLog"> | string | null
    exitoso?: BoolWithAggregatesFilter<"LoginLog"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"LoginLog"> | Date | string
  }

  export type ComprobanteWhereInput = {
    AND?: ComprobanteWhereInput | ComprobanteWhereInput[]
    OR?: ComprobanteWhereInput[]
    NOT?: ComprobanteWhereInput | ComprobanteWhereInput[]
    id?: IntFilter<"Comprobante"> | number
    pedido_id?: IntFilter<"Comprobante"> | number
    tipo?: StringFilter<"Comprobante"> | string
    serie?: StringFilter<"Comprobante"> | string
    numero?: IntFilter<"Comprobante"> | number
    numero_formateado?: StringFilter<"Comprobante"> | string
    archivo_nombre?: StringFilter<"Comprobante"> | string
    archivo_ruta?: StringFilter<"Comprobante"> | string
    mime?: StringNullableFilter<"Comprobante"> | string | null
    size_bytes?: IntNullableFilter<"Comprobante"> | number | null
    created_at?: DateTimeFilter<"Comprobante"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type ComprobanteOrderByWithRelationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    numero?: SortOrder
    numero_formateado?: SortOrder
    archivo_nombre?: SortOrder
    archivo_ruta?: SortOrder
    mime?: SortOrderInput | SortOrder
    size_bytes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    _relevance?: ComprobanteOrderByRelevanceInput
  }

  export type ComprobanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uk_tipo_serie_num?: ComprobanteUk_tipo_serie_numCompoundUniqueInput
    AND?: ComprobanteWhereInput | ComprobanteWhereInput[]
    OR?: ComprobanteWhereInput[]
    NOT?: ComprobanteWhereInput | ComprobanteWhereInput[]
    pedido_id?: IntFilter<"Comprobante"> | number
    tipo?: StringFilter<"Comprobante"> | string
    serie?: StringFilter<"Comprobante"> | string
    numero?: IntFilter<"Comprobante"> | number
    numero_formateado?: StringFilter<"Comprobante"> | string
    archivo_nombre?: StringFilter<"Comprobante"> | string
    archivo_ruta?: StringFilter<"Comprobante"> | string
    mime?: StringNullableFilter<"Comprobante"> | string | null
    size_bytes?: IntNullableFilter<"Comprobante"> | number | null
    created_at?: DateTimeFilter<"Comprobante"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id" | "uk_tipo_serie_num">

  export type ComprobanteOrderByWithAggregationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    numero?: SortOrder
    numero_formateado?: SortOrder
    archivo_nombre?: SortOrder
    archivo_ruta?: SortOrder
    mime?: SortOrderInput | SortOrder
    size_bytes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ComprobanteCountOrderByAggregateInput
    _avg?: ComprobanteAvgOrderByAggregateInput
    _max?: ComprobanteMaxOrderByAggregateInput
    _min?: ComprobanteMinOrderByAggregateInput
    _sum?: ComprobanteSumOrderByAggregateInput
  }

  export type ComprobanteScalarWhereWithAggregatesInput = {
    AND?: ComprobanteScalarWhereWithAggregatesInput | ComprobanteScalarWhereWithAggregatesInput[]
    OR?: ComprobanteScalarWhereWithAggregatesInput[]
    NOT?: ComprobanteScalarWhereWithAggregatesInput | ComprobanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comprobante"> | number
    pedido_id?: IntWithAggregatesFilter<"Comprobante"> | number
    tipo?: StringWithAggregatesFilter<"Comprobante"> | string
    serie?: StringWithAggregatesFilter<"Comprobante"> | string
    numero?: IntWithAggregatesFilter<"Comprobante"> | number
    numero_formateado?: StringWithAggregatesFilter<"Comprobante"> | string
    archivo_nombre?: StringWithAggregatesFilter<"Comprobante"> | string
    archivo_ruta?: StringWithAggregatesFilter<"Comprobante"> | string
    mime?: StringNullableWithAggregatesFilter<"Comprobante"> | string | null
    size_bytes?: IntNullableWithAggregatesFilter<"Comprobante"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Comprobante"> | Date | string
  }

  export type ComprobanteSerieWhereInput = {
    AND?: ComprobanteSerieWhereInput | ComprobanteSerieWhereInput[]
    OR?: ComprobanteSerieWhereInput[]
    NOT?: ComprobanteSerieWhereInput | ComprobanteSerieWhereInput[]
    id?: IntFilter<"ComprobanteSerie"> | number
    tipo?: StringFilter<"ComprobanteSerie"> | string
    serie?: StringFilter<"ComprobanteSerie"> | string
    correlativo?: IntFilter<"ComprobanteSerie"> | number
  }

  export type ComprobanteSerieOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    correlativo?: SortOrder
    _relevance?: ComprobanteSerieOrderByRelevanceInput
  }

  export type ComprobanteSerieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uk_tipo_serie?: ComprobanteSerieUk_tipo_serieCompoundUniqueInput
    AND?: ComprobanteSerieWhereInput | ComprobanteSerieWhereInput[]
    OR?: ComprobanteSerieWhereInput[]
    NOT?: ComprobanteSerieWhereInput | ComprobanteSerieWhereInput[]
    tipo?: StringFilter<"ComprobanteSerie"> | string
    serie?: StringFilter<"ComprobanteSerie"> | string
    correlativo?: IntFilter<"ComprobanteSerie"> | number
  }, "id" | "uk_tipo_serie">

  export type ComprobanteSerieOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    correlativo?: SortOrder
    _count?: ComprobanteSerieCountOrderByAggregateInput
    _avg?: ComprobanteSerieAvgOrderByAggregateInput
    _max?: ComprobanteSerieMaxOrderByAggregateInput
    _min?: ComprobanteSerieMinOrderByAggregateInput
    _sum?: ComprobanteSerieSumOrderByAggregateInput
  }

  export type ComprobanteSerieScalarWhereWithAggregatesInput = {
    AND?: ComprobanteSerieScalarWhereWithAggregatesInput | ComprobanteSerieScalarWhereWithAggregatesInput[]
    OR?: ComprobanteSerieScalarWhereWithAggregatesInput[]
    NOT?: ComprobanteSerieScalarWhereWithAggregatesInput | ComprobanteSerieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ComprobanteSerie"> | number
    tipo?: StringWithAggregatesFilter<"ComprobanteSerie"> | string
    serie?: StringWithAggregatesFilter<"ComprobanteSerie"> | string
    correlativo?: IntWithAggregatesFilter<"ComprobanteSerie"> | number
  }

  export type CategoriaCreateInput = {
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    stock?: number
    destacado?: boolean
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutProductosInput
    detalles?: PedidoDetalleCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    categoria_id?: number | null
    imagen?: string | null
    stock?: number
    destacado?: boolean
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    detalles?: PedidoDetalleUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutProductosNestedInput
    detalles?: PedidoDetalleUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: PedidoDetalleUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    categoria_id?: number | null
    imagen?: string | null
    stock?: number
    destacado?: boolean
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    email: string
    password: string
    telefono?: string | null
    direccion?: string | null
    distrito?: string | null
    numero_casa?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
    loginLogs?: LoginLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    telefono?: string | null
    direccion?: string | null
    distrito?: string | null
    numero_casa?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
    loginLogs?: LoginLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
    loginLogs?: LoginLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
    loginLogs?: LoginLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    telefono?: string | null
    direccion?: string | null
    distrito?: string | null
    numero_casa?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateInput = {
    nombre: string
    email: string
    password: string
    rol?: $Enums.AdminRol
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    loginLogs?: LoginLogCreateNestedManyWithoutAdminInput
  }

  export type AdministradorUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: $Enums.AdminRol
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    loginLogs?: LoginLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdministradorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumAdminRolFieldUpdateOperationsInput | $Enums.AdminRol
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loginLogs?: LoginLogUpdateManyWithoutAdminNestedInput
  }

  export type AdministradorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumAdminRolFieldUpdateOperationsInput | $Enums.AdminRol
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loginLogs?: LoginLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdministradorCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: $Enums.AdminRol
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdministradorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumAdminRolFieldUpdateOperationsInput | $Enums.AdminRol
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumAdminRolFieldUpdateOperationsInput | $Enums.AdminRol
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateInput = {
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutPedidosInput
    detalles?: PedidoDetalleCreateNestedManyWithoutPedidoInput
    comprobantes?: ComprobanteCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    usuario_id?: number | null
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detalles?: PedidoDetalleUncheckedCreateNestedManyWithoutPedidoInput
    comprobantes?: ComprobanteUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutPedidosNestedInput
    detalles?: PedidoDetalleUpdateManyWithoutPedidoNestedInput
    comprobantes?: ComprobanteUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: PedidoDetalleUncheckedUpdateManyWithoutPedidoNestedInput
    comprobantes?: ComprobanteUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    usuario_id?: number | null
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoDetalleCreateInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutDetallesInput
    producto?: ProductoCreateNestedOneWithoutDetallesInput
  }

  export type PedidoDetalleUncheckedCreateInput = {
    id?: number
    pedido_id: number
    producto_id?: number | null
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutDetallesNestedInput
    producto?: ProductoUpdateOneWithoutDetallesNestedInput
  }

  export type PedidoDetalleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleCreateManyInput = {
    id?: number
    pedido_id: number
    producto_id?: number | null
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LoginLogCreateInput = {
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutLoginLogsInput
    admin?: AdministradorCreateNestedOneWithoutLoginLogsInput
  }

  export type LoginLogUncheckedCreateInput = {
    id?: number
    usuario_id?: number | null
    admin_id?: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
  }

  export type LoginLogUpdateInput = {
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutLoginLogsNestedInput
    admin?: AdministradorUpdateOneWithoutLoginLogsNestedInput
  }

  export type LoginLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginLogCreateManyInput = {
    id?: number
    usuario_id?: number | null
    admin_id?: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
  }

  export type LoginLogUpdateManyMutationInput = {
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteCreateInput = {
    tipo: string
    serie: string
    numero: number
    numero_formateado: string
    archivo_nombre: string
    archivo_ruta: string
    mime?: string | null
    size_bytes?: number | null
    created_at?: Date | string
    pedido: PedidoCreateNestedOneWithoutComprobantesInput
  }

  export type ComprobanteUncheckedCreateInput = {
    id?: number
    pedido_id: number
    tipo: string
    serie: string
    numero: number
    numero_formateado: string
    archivo_nombre: string
    archivo_ruta: string
    mime?: string | null
    size_bytes?: number | null
    created_at?: Date | string
  }

  export type ComprobanteUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    numero_formateado?: StringFieldUpdateOperationsInput | string
    archivo_nombre?: StringFieldUpdateOperationsInput | string
    archivo_ruta?: StringFieldUpdateOperationsInput | string
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: PedidoUpdateOneRequiredWithoutComprobantesNestedInput
  }

  export type ComprobanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    numero_formateado?: StringFieldUpdateOperationsInput | string
    archivo_nombre?: StringFieldUpdateOperationsInput | string
    archivo_ruta?: StringFieldUpdateOperationsInput | string
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteCreateManyInput = {
    id?: number
    pedido_id: number
    tipo: string
    serie: string
    numero: number
    numero_formateado: string
    archivo_nombre: string
    archivo_ruta: string
    mime?: string | null
    size_bytes?: number | null
    created_at?: Date | string
  }

  export type ComprobanteUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    numero_formateado?: StringFieldUpdateOperationsInput | string
    archivo_nombre?: StringFieldUpdateOperationsInput | string
    archivo_ruta?: StringFieldUpdateOperationsInput | string
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    numero_formateado?: StringFieldUpdateOperationsInput | string
    archivo_nombre?: StringFieldUpdateOperationsInput | string
    archivo_ruta?: StringFieldUpdateOperationsInput | string
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteSerieCreateInput = {
    tipo: string
    serie: string
    correlativo?: number
  }

  export type ComprobanteSerieUncheckedCreateInput = {
    id?: number
    tipo: string
    serie: string
    correlativo?: number
  }

  export type ComprobanteSerieUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
  }

  export type ComprobanteSerieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
  }

  export type ComprobanteSerieCreateManyInput = {
    id?: number
    tipo: string
    serie: string
    correlativo?: number
  }

  export type ComprobanteSerieUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
  }

  export type ComprobanteSerieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    correlativo?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type PedidoDetalleListRelationFilter = {
    every?: PedidoDetalleWhereInput
    some?: PedidoDetalleWhereInput
    none?: PedidoDetalleWhereInput
  }

  export type PedidoDetalleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoOrderByRelevanceInput = {
    fields: ProductoOrderByRelevanceFieldEnum | ProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoria_id?: SortOrder
    imagen?: SortOrder
    stock?: SortOrder
    destacado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    categoria_id?: SortOrder
    stock?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoria_id?: SortOrder
    imagen?: SortOrder
    stock?: SortOrder
    destacado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoria_id?: SortOrder
    imagen?: SortOrder
    stock?: SortOrder
    destacado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    categoria_id?: SortOrder
    stock?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type LoginLogListRelationFilter = {
    every?: LoginLogWhereInput
    some?: LoginLogWhereInput
    none?: LoginLogWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    distrito?: SortOrder
    numero_casa?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    distrito?: SortOrder
    numero_casa?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    distrito?: SortOrder
    numero_casa?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAdminRolFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRol | EnumAdminRolFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRol[]
    notIn?: $Enums.AdminRol[]
    not?: NestedEnumAdminRolFilter<$PrismaModel> | $Enums.AdminRol
  }

  export type AdministradorOrderByRelevanceInput = {
    fields: AdministradorOrderByRelevanceFieldEnum | AdministradorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdministradorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAdminRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRol | EnumAdminRolFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRol[]
    notIn?: $Enums.AdminRol[]
    not?: NestedEnumAdminRolWithAggregatesFilter<$PrismaModel> | $Enums.AdminRol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRolFilter<$PrismaModel>
    _max?: NestedEnumAdminRolFilter<$PrismaModel>
  }

  export type EnumPedidoEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.PedidoEstado | EnumPedidoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.PedidoEstado[]
    notIn?: $Enums.PedidoEstado[]
    not?: NestedEnumPedidoEstadoFilter<$PrismaModel> | $Enums.PedidoEstado
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ComprobanteListRelationFilter = {
    every?: ComprobanteWhereInput
    some?: ComprobanteWhereInput
    none?: ComprobanteWhereInput
  }

  export type ComprobanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelevanceInput = {
    fields: PedidoOrderByRelevanceFieldEnum | PedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha_entrega?: SortOrder
    direccion_entrega?: SortOrder
    distrito_entrega?: SortOrder
    numero_casa_entrega?: SortOrder
    direccion_id?: SortOrder
    telefono_contacto?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    total?: SortOrder
    direccion_id?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha_entrega?: SortOrder
    direccion_entrega?: SortOrder
    distrito_entrega?: SortOrder
    numero_casa_entrega?: SortOrder
    direccion_id?: SortOrder
    telefono_contacto?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    fecha_entrega?: SortOrder
    direccion_entrega?: SortOrder
    distrito_entrega?: SortOrder
    numero_casa_entrega?: SortOrder
    direccion_id?: SortOrder
    telefono_contacto?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    total?: SortOrder
    direccion_id?: SortOrder
  }

  export type EnumPedidoEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PedidoEstado | EnumPedidoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.PedidoEstado[]
    notIn?: $Enums.PedidoEstado[]
    not?: NestedEnumPedidoEstadoWithAggregatesFilter<$PrismaModel> | $Enums.PedidoEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPedidoEstadoFilter<$PrismaModel>
    _max?: NestedEnumPedidoEstadoFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProductoNullableScalarRelationFilter = {
    is?: ProductoWhereInput | null
    isNot?: ProductoWhereInput | null
  }

  export type PedidoDetalleCountOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type PedidoDetalleAvgOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type PedidoDetalleMaxOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type PedidoDetalleMinOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type PedidoDetalleSumOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumTipoUsuarioLoginLogFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuarioLoginLog | EnumTipoUsuarioLoginLogFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuarioLoginLog[]
    notIn?: $Enums.TipoUsuarioLoginLog[]
    not?: NestedEnumTipoUsuarioLoginLogFilter<$PrismaModel> | $Enums.TipoUsuarioLoginLog
  }

  export type AdministradorNullableScalarRelationFilter = {
    is?: AdministradorWhereInput | null
    isNot?: AdministradorWhereInput | null
  }

  export type LoginLogOrderByRelevanceInput = {
    fields: LoginLogOrderByRelevanceFieldEnum | LoginLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoginLogCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    admin_id?: SortOrder
    tipo_usuario?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    exitoso?: SortOrder
    created_at?: SortOrder
  }

  export type LoginLogAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    admin_id?: SortOrder
  }

  export type LoginLogMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    admin_id?: SortOrder
    tipo_usuario?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    exitoso?: SortOrder
    created_at?: SortOrder
  }

  export type LoginLogMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    admin_id?: SortOrder
    tipo_usuario?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    exitoso?: SortOrder
    created_at?: SortOrder
  }

  export type LoginLogSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    admin_id?: SortOrder
  }

  export type EnumTipoUsuarioLoginLogWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuarioLoginLog | EnumTipoUsuarioLoginLogFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuarioLoginLog[]
    notIn?: $Enums.TipoUsuarioLoginLog[]
    not?: NestedEnumTipoUsuarioLoginLogWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuarioLoginLog
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioLoginLogFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioLoginLogFilter<$PrismaModel>
  }

  export type ComprobanteOrderByRelevanceInput = {
    fields: ComprobanteOrderByRelevanceFieldEnum | ComprobanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComprobanteUk_tipo_serie_numCompoundUniqueInput = {
    tipo: string
    serie: string
    numero: number
  }

  export type ComprobanteCountOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    numero?: SortOrder
    numero_formateado?: SortOrder
    archivo_nombre?: SortOrder
    archivo_ruta?: SortOrder
    mime?: SortOrder
    size_bytes?: SortOrder
    created_at?: SortOrder
  }

  export type ComprobanteAvgOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    numero?: SortOrder
    size_bytes?: SortOrder
  }

  export type ComprobanteMaxOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    numero?: SortOrder
    numero_formateado?: SortOrder
    archivo_nombre?: SortOrder
    archivo_ruta?: SortOrder
    mime?: SortOrder
    size_bytes?: SortOrder
    created_at?: SortOrder
  }

  export type ComprobanteMinOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    numero?: SortOrder
    numero_formateado?: SortOrder
    archivo_nombre?: SortOrder
    archivo_ruta?: SortOrder
    mime?: SortOrder
    size_bytes?: SortOrder
    created_at?: SortOrder
  }

  export type ComprobanteSumOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    numero?: SortOrder
    size_bytes?: SortOrder
  }

  export type ComprobanteSerieOrderByRelevanceInput = {
    fields: ComprobanteSerieOrderByRelevanceFieldEnum | ComprobanteSerieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComprobanteSerieUk_tipo_serieCompoundUniqueInput = {
    tipo: string
    serie: string
  }

  export type ComprobanteSerieCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    correlativo?: SortOrder
  }

  export type ComprobanteSerieAvgOrderByAggregateInput = {
    id?: SortOrder
    correlativo?: SortOrder
  }

  export type ComprobanteSerieMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    correlativo?: SortOrder
  }

  export type ComprobanteSerieMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    serie?: SortOrder
    correlativo?: SortOrder
  }

  export type ComprobanteSerieSumOrderByAggregateInput = {
    id?: SortOrder
    correlativo?: SortOrder
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type PedidoDetalleCreateNestedManyWithoutProductoInput = {
    create?: XOR<PedidoDetalleCreateWithoutProductoInput, PedidoDetalleUncheckedCreateWithoutProductoInput> | PedidoDetalleCreateWithoutProductoInput[] | PedidoDetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoDetalleCreateOrConnectWithoutProductoInput | PedidoDetalleCreateOrConnectWithoutProductoInput[]
    createMany?: PedidoDetalleCreateManyProductoInputEnvelope
    connect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
  }

  export type PedidoDetalleUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<PedidoDetalleCreateWithoutProductoInput, PedidoDetalleUncheckedCreateWithoutProductoInput> | PedidoDetalleCreateWithoutProductoInput[] | PedidoDetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoDetalleCreateOrConnectWithoutProductoInput | PedidoDetalleCreateOrConnectWithoutProductoInput[]
    createMany?: PedidoDetalleCreateManyProductoInputEnvelope
    connect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoriaUpdateOneWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type PedidoDetalleUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PedidoDetalleCreateWithoutProductoInput, PedidoDetalleUncheckedCreateWithoutProductoInput> | PedidoDetalleCreateWithoutProductoInput[] | PedidoDetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoDetalleCreateOrConnectWithoutProductoInput | PedidoDetalleCreateOrConnectWithoutProductoInput[]
    upsert?: PedidoDetalleUpsertWithWhereUniqueWithoutProductoInput | PedidoDetalleUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PedidoDetalleCreateManyProductoInputEnvelope
    set?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    disconnect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    delete?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    connect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    update?: PedidoDetalleUpdateWithWhereUniqueWithoutProductoInput | PedidoDetalleUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PedidoDetalleUpdateManyWithWhereWithoutProductoInput | PedidoDetalleUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PedidoDetalleScalarWhereInput | PedidoDetalleScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoDetalleUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PedidoDetalleCreateWithoutProductoInput, PedidoDetalleUncheckedCreateWithoutProductoInput> | PedidoDetalleCreateWithoutProductoInput[] | PedidoDetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoDetalleCreateOrConnectWithoutProductoInput | PedidoDetalleCreateOrConnectWithoutProductoInput[]
    upsert?: PedidoDetalleUpsertWithWhereUniqueWithoutProductoInput | PedidoDetalleUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PedidoDetalleCreateManyProductoInputEnvelope
    set?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    disconnect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    delete?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    connect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    update?: PedidoDetalleUpdateWithWhereUniqueWithoutProductoInput | PedidoDetalleUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PedidoDetalleUpdateManyWithWhereWithoutProductoInput | PedidoDetalleUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PedidoDetalleScalarWhereInput | PedidoDetalleScalarWhereInput[]
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type LoginLogCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LoginLogCreateWithoutUsuarioInput, LoginLogUncheckedCreateWithoutUsuarioInput> | LoginLogCreateWithoutUsuarioInput[] | LoginLogUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LoginLogCreateOrConnectWithoutUsuarioInput | LoginLogCreateOrConnectWithoutUsuarioInput[]
    createMany?: LoginLogCreateManyUsuarioInputEnvelope
    connect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type LoginLogUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LoginLogCreateWithoutUsuarioInput, LoginLogUncheckedCreateWithoutUsuarioInput> | LoginLogCreateWithoutUsuarioInput[] | LoginLogUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LoginLogCreateOrConnectWithoutUsuarioInput | LoginLogCreateOrConnectWithoutUsuarioInput[]
    createMany?: LoginLogCreateManyUsuarioInputEnvelope
    connect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type LoginLogUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LoginLogCreateWithoutUsuarioInput, LoginLogUncheckedCreateWithoutUsuarioInput> | LoginLogCreateWithoutUsuarioInput[] | LoginLogUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LoginLogCreateOrConnectWithoutUsuarioInput | LoginLogCreateOrConnectWithoutUsuarioInput[]
    upsert?: LoginLogUpsertWithWhereUniqueWithoutUsuarioInput | LoginLogUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LoginLogCreateManyUsuarioInputEnvelope
    set?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    disconnect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    delete?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    connect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    update?: LoginLogUpdateWithWhereUniqueWithoutUsuarioInput | LoginLogUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LoginLogUpdateManyWithWhereWithoutUsuarioInput | LoginLogUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LoginLogScalarWhereInput | LoginLogScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type LoginLogUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LoginLogCreateWithoutUsuarioInput, LoginLogUncheckedCreateWithoutUsuarioInput> | LoginLogCreateWithoutUsuarioInput[] | LoginLogUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LoginLogCreateOrConnectWithoutUsuarioInput | LoginLogCreateOrConnectWithoutUsuarioInput[]
    upsert?: LoginLogUpsertWithWhereUniqueWithoutUsuarioInput | LoginLogUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LoginLogCreateManyUsuarioInputEnvelope
    set?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    disconnect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    delete?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    connect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    update?: LoginLogUpdateWithWhereUniqueWithoutUsuarioInput | LoginLogUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LoginLogUpdateManyWithWhereWithoutUsuarioInput | LoginLogUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LoginLogScalarWhereInput | LoginLogScalarWhereInput[]
  }

  export type LoginLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<LoginLogCreateWithoutAdminInput, LoginLogUncheckedCreateWithoutAdminInput> | LoginLogCreateWithoutAdminInput[] | LoginLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LoginLogCreateOrConnectWithoutAdminInput | LoginLogCreateOrConnectWithoutAdminInput[]
    createMany?: LoginLogCreateManyAdminInputEnvelope
    connect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
  }

  export type LoginLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<LoginLogCreateWithoutAdminInput, LoginLogUncheckedCreateWithoutAdminInput> | LoginLogCreateWithoutAdminInput[] | LoginLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LoginLogCreateOrConnectWithoutAdminInput | LoginLogCreateOrConnectWithoutAdminInput[]
    createMany?: LoginLogCreateManyAdminInputEnvelope
    connect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
  }

  export type EnumAdminRolFieldUpdateOperationsInput = {
    set?: $Enums.AdminRol
  }

  export type LoginLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<LoginLogCreateWithoutAdminInput, LoginLogUncheckedCreateWithoutAdminInput> | LoginLogCreateWithoutAdminInput[] | LoginLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LoginLogCreateOrConnectWithoutAdminInput | LoginLogCreateOrConnectWithoutAdminInput[]
    upsert?: LoginLogUpsertWithWhereUniqueWithoutAdminInput | LoginLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: LoginLogCreateManyAdminInputEnvelope
    set?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    disconnect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    delete?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    connect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    update?: LoginLogUpdateWithWhereUniqueWithoutAdminInput | LoginLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: LoginLogUpdateManyWithWhereWithoutAdminInput | LoginLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: LoginLogScalarWhereInput | LoginLogScalarWhereInput[]
  }

  export type LoginLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<LoginLogCreateWithoutAdminInput, LoginLogUncheckedCreateWithoutAdminInput> | LoginLogCreateWithoutAdminInput[] | LoginLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LoginLogCreateOrConnectWithoutAdminInput | LoginLogCreateOrConnectWithoutAdminInput[]
    upsert?: LoginLogUpsertWithWhereUniqueWithoutAdminInput | LoginLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: LoginLogCreateManyAdminInputEnvelope
    set?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    disconnect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    delete?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    connect?: LoginLogWhereUniqueInput | LoginLogWhereUniqueInput[]
    update?: LoginLogUpdateWithWhereUniqueWithoutAdminInput | LoginLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: LoginLogUpdateManyWithWhereWithoutAdminInput | LoginLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: LoginLogScalarWhereInput | LoginLogScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PedidoDetalleCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoDetalleCreateWithoutPedidoInput, PedidoDetalleUncheckedCreateWithoutPedidoInput> | PedidoDetalleCreateWithoutPedidoInput[] | PedidoDetalleUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoDetalleCreateOrConnectWithoutPedidoInput | PedidoDetalleCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoDetalleCreateManyPedidoInputEnvelope
    connect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
  }

  export type ComprobanteCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput> | ComprobanteCreateWithoutPedidoInput[] | ComprobanteUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutPedidoInput | ComprobanteCreateOrConnectWithoutPedidoInput[]
    createMany?: ComprobanteCreateManyPedidoInputEnvelope
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
  }

  export type PedidoDetalleUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoDetalleCreateWithoutPedidoInput, PedidoDetalleUncheckedCreateWithoutPedidoInput> | PedidoDetalleCreateWithoutPedidoInput[] | PedidoDetalleUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoDetalleCreateOrConnectWithoutPedidoInput | PedidoDetalleCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoDetalleCreateManyPedidoInputEnvelope
    connect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
  }

  export type ComprobanteUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput> | ComprobanteCreateWithoutPedidoInput[] | ComprobanteUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutPedidoInput | ComprobanteCreateOrConnectWithoutPedidoInput[]
    createMany?: ComprobanteCreateManyPedidoInputEnvelope
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
  }

  export type EnumPedidoEstadoFieldUpdateOperationsInput = {
    set?: $Enums.PedidoEstado
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type PedidoDetalleUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoDetalleCreateWithoutPedidoInput, PedidoDetalleUncheckedCreateWithoutPedidoInput> | PedidoDetalleCreateWithoutPedidoInput[] | PedidoDetalleUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoDetalleCreateOrConnectWithoutPedidoInput | PedidoDetalleCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoDetalleUpsertWithWhereUniqueWithoutPedidoInput | PedidoDetalleUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoDetalleCreateManyPedidoInputEnvelope
    set?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    disconnect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    delete?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    connect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    update?: PedidoDetalleUpdateWithWhereUniqueWithoutPedidoInput | PedidoDetalleUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoDetalleUpdateManyWithWhereWithoutPedidoInput | PedidoDetalleUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoDetalleScalarWhereInput | PedidoDetalleScalarWhereInput[]
  }

  export type ComprobanteUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput> | ComprobanteCreateWithoutPedidoInput[] | ComprobanteUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutPedidoInput | ComprobanteCreateOrConnectWithoutPedidoInput[]
    upsert?: ComprobanteUpsertWithWhereUniqueWithoutPedidoInput | ComprobanteUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ComprobanteCreateManyPedidoInputEnvelope
    set?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    disconnect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    delete?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    update?: ComprobanteUpdateWithWhereUniqueWithoutPedidoInput | ComprobanteUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ComprobanteUpdateManyWithWhereWithoutPedidoInput | ComprobanteUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
  }

  export type PedidoDetalleUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoDetalleCreateWithoutPedidoInput, PedidoDetalleUncheckedCreateWithoutPedidoInput> | PedidoDetalleCreateWithoutPedidoInput[] | PedidoDetalleUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoDetalleCreateOrConnectWithoutPedidoInput | PedidoDetalleCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoDetalleUpsertWithWhereUniqueWithoutPedidoInput | PedidoDetalleUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoDetalleCreateManyPedidoInputEnvelope
    set?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    disconnect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    delete?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    connect?: PedidoDetalleWhereUniqueInput | PedidoDetalleWhereUniqueInput[]
    update?: PedidoDetalleUpdateWithWhereUniqueWithoutPedidoInput | PedidoDetalleUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoDetalleUpdateManyWithWhereWithoutPedidoInput | PedidoDetalleUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoDetalleScalarWhereInput | PedidoDetalleScalarWhereInput[]
  }

  export type ComprobanteUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput> | ComprobanteCreateWithoutPedidoInput[] | ComprobanteUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutPedidoInput | ComprobanteCreateOrConnectWithoutPedidoInput[]
    upsert?: ComprobanteUpsertWithWhereUniqueWithoutPedidoInput | ComprobanteUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ComprobanteCreateManyPedidoInputEnvelope
    set?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    disconnect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    delete?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    update?: ComprobanteUpdateWithWhereUniqueWithoutPedidoInput | ComprobanteUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ComprobanteUpdateManyWithWhereWithoutPedidoInput | ComprobanteUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutDetallesInput = {
    create?: XOR<PedidoCreateWithoutDetallesInput, PedidoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutDetallesInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutDetallesInput = {
    create?: XOR<ProductoCreateWithoutDetallesInput, ProductoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesInput
    connect?: ProductoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<PedidoCreateWithoutDetallesInput, PedidoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutDetallesInput
    upsert?: PedidoUpsertWithoutDetallesInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutDetallesInput, PedidoUpdateWithoutDetallesInput>, PedidoUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateOneWithoutDetallesNestedInput = {
    create?: XOR<ProductoCreateWithoutDetallesInput, ProductoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesInput
    upsert?: ProductoUpsertWithoutDetallesInput
    disconnect?: ProductoWhereInput | boolean
    delete?: ProductoWhereInput | boolean
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetallesInput, ProductoUpdateWithoutDetallesInput>, ProductoUncheckedUpdateWithoutDetallesInput>
  }

  export type UsuarioCreateNestedOneWithoutLoginLogsInput = {
    create?: XOR<UsuarioCreateWithoutLoginLogsInput, UsuarioUncheckedCreateWithoutLoginLogsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLoginLogsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AdministradorCreateNestedOneWithoutLoginLogsInput = {
    create?: XOR<AdministradorCreateWithoutLoginLogsInput, AdministradorUncheckedCreateWithoutLoginLogsInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutLoginLogsInput
    connect?: AdministradorWhereUniqueInput
  }

  export type EnumTipoUsuarioLoginLogFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuarioLoginLog
  }

  export type UsuarioUpdateOneWithoutLoginLogsNestedInput = {
    create?: XOR<UsuarioCreateWithoutLoginLogsInput, UsuarioUncheckedCreateWithoutLoginLogsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLoginLogsInput
    upsert?: UsuarioUpsertWithoutLoginLogsInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLoginLogsInput, UsuarioUpdateWithoutLoginLogsInput>, UsuarioUncheckedUpdateWithoutLoginLogsInput>
  }

  export type AdministradorUpdateOneWithoutLoginLogsNestedInput = {
    create?: XOR<AdministradorCreateWithoutLoginLogsInput, AdministradorUncheckedCreateWithoutLoginLogsInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutLoginLogsInput
    upsert?: AdministradorUpsertWithoutLoginLogsInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutLoginLogsInput, AdministradorUpdateWithoutLoginLogsInput>, AdministradorUncheckedUpdateWithoutLoginLogsInput>
  }

  export type PedidoCreateNestedOneWithoutComprobantesInput = {
    create?: XOR<PedidoCreateWithoutComprobantesInput, PedidoUncheckedCreateWithoutComprobantesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutComprobantesInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutComprobantesNestedInput = {
    create?: XOR<PedidoCreateWithoutComprobantesInput, PedidoUncheckedCreateWithoutComprobantesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutComprobantesInput
    upsert?: PedidoUpsertWithoutComprobantesInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutComprobantesInput, PedidoUpdateWithoutComprobantesInput>, PedidoUncheckedUpdateWithoutComprobantesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumAdminRolFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRol | EnumAdminRolFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRol[]
    notIn?: $Enums.AdminRol[]
    not?: NestedEnumAdminRolFilter<$PrismaModel> | $Enums.AdminRol
  }

  export type NestedEnumAdminRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRol | EnumAdminRolFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRol[]
    notIn?: $Enums.AdminRol[]
    not?: NestedEnumAdminRolWithAggregatesFilter<$PrismaModel> | $Enums.AdminRol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRolFilter<$PrismaModel>
    _max?: NestedEnumAdminRolFilter<$PrismaModel>
  }

  export type NestedEnumPedidoEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.PedidoEstado | EnumPedidoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.PedidoEstado[]
    notIn?: $Enums.PedidoEstado[]
    not?: NestedEnumPedidoEstadoFilter<$PrismaModel> | $Enums.PedidoEstado
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPedidoEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PedidoEstado | EnumPedidoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.PedidoEstado[]
    notIn?: $Enums.PedidoEstado[]
    not?: NestedEnumPedidoEstadoWithAggregatesFilter<$PrismaModel> | $Enums.PedidoEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPedidoEstadoFilter<$PrismaModel>
    _max?: NestedEnumPedidoEstadoFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoUsuarioLoginLogFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuarioLoginLog | EnumTipoUsuarioLoginLogFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuarioLoginLog[]
    notIn?: $Enums.TipoUsuarioLoginLog[]
    not?: NestedEnumTipoUsuarioLoginLogFilter<$PrismaModel> | $Enums.TipoUsuarioLoginLog
  }

  export type NestedEnumTipoUsuarioLoginLogWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuarioLoginLog | EnumTipoUsuarioLoginLogFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuarioLoginLog[]
    notIn?: $Enums.TipoUsuarioLoginLog[]
    not?: NestedEnumTipoUsuarioLoginLogWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuarioLoginLog
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioLoginLogFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioLoginLogFilter<$PrismaModel>
  }

  export type ProductoCreateWithoutCategoriaInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    stock?: number
    destacado?: boolean
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    detalles?: PedidoDetalleCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    stock?: number
    destacado?: boolean
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    detalles?: PedidoDetalleUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    categoria_id?: IntNullableFilter<"Producto"> | number | null
    imagen?: StringNullableFilter<"Producto"> | string | null
    stock?: IntFilter<"Producto"> | number
    destacado?: BoolFilter<"Producto"> | boolean
    activo?: BoolFilter<"Producto"> | boolean
    created_at?: DateTimeFilter<"Producto"> | Date | string
    updated_at?: DateTimeFilter<"Producto"> | Date | string
  }

  export type CategoriaCreateWithoutProductosInput = {
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type PedidoDetalleCreateWithoutProductoInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutDetallesInput
  }

  export type PedidoDetalleUncheckedCreateWithoutProductoInput = {
    id?: number
    pedido_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleCreateOrConnectWithoutProductoInput = {
    where: PedidoDetalleWhereUniqueInput
    create: XOR<PedidoDetalleCreateWithoutProductoInput, PedidoDetalleUncheckedCreateWithoutProductoInput>
  }

  export type PedidoDetalleCreateManyProductoInputEnvelope = {
    data: PedidoDetalleCreateManyProductoInput | PedidoDetalleCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoDetalleUpsertWithWhereUniqueWithoutProductoInput = {
    where: PedidoDetalleWhereUniqueInput
    update: XOR<PedidoDetalleUpdateWithoutProductoInput, PedidoDetalleUncheckedUpdateWithoutProductoInput>
    create: XOR<PedidoDetalleCreateWithoutProductoInput, PedidoDetalleUncheckedCreateWithoutProductoInput>
  }

  export type PedidoDetalleUpdateWithWhereUniqueWithoutProductoInput = {
    where: PedidoDetalleWhereUniqueInput
    data: XOR<PedidoDetalleUpdateWithoutProductoInput, PedidoDetalleUncheckedUpdateWithoutProductoInput>
  }

  export type PedidoDetalleUpdateManyWithWhereWithoutProductoInput = {
    where: PedidoDetalleScalarWhereInput
    data: XOR<PedidoDetalleUpdateManyMutationInput, PedidoDetalleUncheckedUpdateManyWithoutProductoInput>
  }

  export type PedidoDetalleScalarWhereInput = {
    AND?: PedidoDetalleScalarWhereInput | PedidoDetalleScalarWhereInput[]
    OR?: PedidoDetalleScalarWhereInput[]
    NOT?: PedidoDetalleScalarWhereInput | PedidoDetalleScalarWhereInput[]
    id?: IntFilter<"PedidoDetalle"> | number
    pedido_id?: IntFilter<"PedidoDetalle"> | number
    producto_id?: IntNullableFilter<"PedidoDetalle"> | number | null
    cantidad?: IntFilter<"PedidoDetalle"> | number
    precio_unitario?: DecimalFilter<"PedidoDetalle"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"PedidoDetalle"> | Decimal | DecimalJsLike | number | string
  }

  export type PedidoCreateWithoutUsuarioInput = {
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detalles?: PedidoDetalleCreateNestedManyWithoutPedidoInput
    comprobantes?: ComprobanteCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detalles?: PedidoDetalleUncheckedCreateNestedManyWithoutPedidoInput
    comprobantes?: ComprobanteUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type LoginLogCreateWithoutUsuarioInput = {
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
    admin?: AdministradorCreateNestedOneWithoutLoginLogsInput
  }

  export type LoginLogUncheckedCreateWithoutUsuarioInput = {
    id?: number
    admin_id?: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
  }

  export type LoginLogCreateOrConnectWithoutUsuarioInput = {
    where: LoginLogWhereUniqueInput
    create: XOR<LoginLogCreateWithoutUsuarioInput, LoginLogUncheckedCreateWithoutUsuarioInput>
  }

  export type LoginLogCreateManyUsuarioInputEnvelope = {
    data: LoginLogCreateManyUsuarioInput | LoginLogCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    usuario_id?: IntNullableFilter<"Pedido"> | number | null
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFilter<"Pedido"> | $Enums.PedidoEstado
    fecha_entrega?: DateTimeNullableFilter<"Pedido"> | Date | string | null
    direccion_entrega?: StringNullableFilter<"Pedido"> | string | null
    distrito_entrega?: StringNullableFilter<"Pedido"> | string | null
    numero_casa_entrega?: StringNullableFilter<"Pedido"> | string | null
    direccion_id?: IntNullableFilter<"Pedido"> | number | null
    telefono_contacto?: StringNullableFilter<"Pedido"> | string | null
    notas?: StringNullableFilter<"Pedido"> | string | null
    created_at?: DateTimeFilter<"Pedido"> | Date | string
    updated_at?: DateTimeFilter<"Pedido"> | Date | string
  }

  export type LoginLogUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LoginLogWhereUniqueInput
    update: XOR<LoginLogUpdateWithoutUsuarioInput, LoginLogUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LoginLogCreateWithoutUsuarioInput, LoginLogUncheckedCreateWithoutUsuarioInput>
  }

  export type LoginLogUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LoginLogWhereUniqueInput
    data: XOR<LoginLogUpdateWithoutUsuarioInput, LoginLogUncheckedUpdateWithoutUsuarioInput>
  }

  export type LoginLogUpdateManyWithWhereWithoutUsuarioInput = {
    where: LoginLogScalarWhereInput
    data: XOR<LoginLogUpdateManyMutationInput, LoginLogUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LoginLogScalarWhereInput = {
    AND?: LoginLogScalarWhereInput | LoginLogScalarWhereInput[]
    OR?: LoginLogScalarWhereInput[]
    NOT?: LoginLogScalarWhereInput | LoginLogScalarWhereInput[]
    id?: IntFilter<"LoginLog"> | number
    usuario_id?: IntNullableFilter<"LoginLog"> | number | null
    admin_id?: IntNullableFilter<"LoginLog"> | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFilter<"LoginLog"> | $Enums.TipoUsuarioLoginLog
    ip_address?: StringNullableFilter<"LoginLog"> | string | null
    user_agent?: StringNullableFilter<"LoginLog"> | string | null
    exitoso?: BoolFilter<"LoginLog"> | boolean
    created_at?: DateTimeFilter<"LoginLog"> | Date | string
  }

  export type LoginLogCreateWithoutAdminInput = {
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutLoginLogsInput
  }

  export type LoginLogUncheckedCreateWithoutAdminInput = {
    id?: number
    usuario_id?: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
  }

  export type LoginLogCreateOrConnectWithoutAdminInput = {
    where: LoginLogWhereUniqueInput
    create: XOR<LoginLogCreateWithoutAdminInput, LoginLogUncheckedCreateWithoutAdminInput>
  }

  export type LoginLogCreateManyAdminInputEnvelope = {
    data: LoginLogCreateManyAdminInput | LoginLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type LoginLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: LoginLogWhereUniqueInput
    update: XOR<LoginLogUpdateWithoutAdminInput, LoginLogUncheckedUpdateWithoutAdminInput>
    create: XOR<LoginLogCreateWithoutAdminInput, LoginLogUncheckedCreateWithoutAdminInput>
  }

  export type LoginLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: LoginLogWhereUniqueInput
    data: XOR<LoginLogUpdateWithoutAdminInput, LoginLogUncheckedUpdateWithoutAdminInput>
  }

  export type LoginLogUpdateManyWithWhereWithoutAdminInput = {
    where: LoginLogScalarWhereInput
    data: XOR<LoginLogUpdateManyMutationInput, LoginLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type UsuarioCreateWithoutPedidosInput = {
    nombre: string
    apellido: string
    email: string
    password: string
    telefono?: string | null
    direccion?: string | null
    distrito?: string | null
    numero_casa?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    loginLogs?: LoginLogCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    telefono?: string | null
    direccion?: string | null
    distrito?: string | null
    numero_casa?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    loginLogs?: LoginLogUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoDetalleCreateWithoutPedidoInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    producto?: ProductoCreateNestedOneWithoutDetallesInput
  }

  export type PedidoDetalleUncheckedCreateWithoutPedidoInput = {
    id?: number
    producto_id?: number | null
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleCreateOrConnectWithoutPedidoInput = {
    where: PedidoDetalleWhereUniqueInput
    create: XOR<PedidoDetalleCreateWithoutPedidoInput, PedidoDetalleUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoDetalleCreateManyPedidoInputEnvelope = {
    data: PedidoDetalleCreateManyPedidoInput | PedidoDetalleCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ComprobanteCreateWithoutPedidoInput = {
    tipo: string
    serie: string
    numero: number
    numero_formateado: string
    archivo_nombre: string
    archivo_ruta: string
    mime?: string | null
    size_bytes?: number | null
    created_at?: Date | string
  }

  export type ComprobanteUncheckedCreateWithoutPedidoInput = {
    id?: number
    tipo: string
    serie: string
    numero: number
    numero_formateado: string
    archivo_nombre: string
    archivo_ruta: string
    mime?: string | null
    size_bytes?: number | null
    created_at?: Date | string
  }

  export type ComprobanteCreateOrConnectWithoutPedidoInput = {
    where: ComprobanteWhereUniqueInput
    create: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput>
  }

  export type ComprobanteCreateManyPedidoInputEnvelope = {
    data: ComprobanteCreateManyPedidoInput | ComprobanteCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loginLogs?: LoginLogUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loginLogs?: LoginLogUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PedidoDetalleUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoDetalleWhereUniqueInput
    update: XOR<PedidoDetalleUpdateWithoutPedidoInput, PedidoDetalleUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoDetalleCreateWithoutPedidoInput, PedidoDetalleUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoDetalleUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoDetalleWhereUniqueInput
    data: XOR<PedidoDetalleUpdateWithoutPedidoInput, PedidoDetalleUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoDetalleUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoDetalleScalarWhereInput
    data: XOR<PedidoDetalleUpdateManyMutationInput, PedidoDetalleUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ComprobanteUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ComprobanteWhereUniqueInput
    update: XOR<ComprobanteUpdateWithoutPedidoInput, ComprobanteUncheckedUpdateWithoutPedidoInput>
    create: XOR<ComprobanteCreateWithoutPedidoInput, ComprobanteUncheckedCreateWithoutPedidoInput>
  }

  export type ComprobanteUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ComprobanteWhereUniqueInput
    data: XOR<ComprobanteUpdateWithoutPedidoInput, ComprobanteUncheckedUpdateWithoutPedidoInput>
  }

  export type ComprobanteUpdateManyWithWhereWithoutPedidoInput = {
    where: ComprobanteScalarWhereInput
    data: XOR<ComprobanteUpdateManyMutationInput, ComprobanteUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ComprobanteScalarWhereInput = {
    AND?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
    OR?: ComprobanteScalarWhereInput[]
    NOT?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
    id?: IntFilter<"Comprobante"> | number
    pedido_id?: IntFilter<"Comprobante"> | number
    tipo?: StringFilter<"Comprobante"> | string
    serie?: StringFilter<"Comprobante"> | string
    numero?: IntFilter<"Comprobante"> | number
    numero_formateado?: StringFilter<"Comprobante"> | string
    archivo_nombre?: StringFilter<"Comprobante"> | string
    archivo_ruta?: StringFilter<"Comprobante"> | string
    mime?: StringNullableFilter<"Comprobante"> | string | null
    size_bytes?: IntNullableFilter<"Comprobante"> | number | null
    created_at?: DateTimeFilter<"Comprobante"> | Date | string
  }

  export type PedidoCreateWithoutDetallesInput = {
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutPedidosInput
    comprobantes?: ComprobanteCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutDetallesInput = {
    id?: number
    usuario_id?: number | null
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    comprobantes?: ComprobanteUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutDetallesInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutDetallesInput, PedidoUncheckedCreateWithoutDetallesInput>
  }

  export type ProductoCreateWithoutDetallesInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    stock?: number
    destacado?: boolean
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    categoria?: CategoriaCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutDetallesInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    categoria_id?: number | null
    imagen?: string | null
    stock?: number
    destacado?: boolean
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductoCreateOrConnectWithoutDetallesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetallesInput, ProductoUncheckedCreateWithoutDetallesInput>
  }

  export type PedidoUpsertWithoutDetallesInput = {
    update: XOR<PedidoUpdateWithoutDetallesInput, PedidoUncheckedUpdateWithoutDetallesInput>
    create: XOR<PedidoCreateWithoutDetallesInput, PedidoUncheckedCreateWithoutDetallesInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutDetallesInput, PedidoUncheckedUpdateWithoutDetallesInput>
  }

  export type PedidoUpdateWithoutDetallesInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutPedidosNestedInput
    comprobantes?: ComprobanteUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comprobantes?: ComprobanteUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type ProductoUpsertWithoutDetallesInput = {
    update: XOR<ProductoUpdateWithoutDetallesInput, ProductoUncheckedUpdateWithoutDetallesInput>
    create: XOR<ProductoCreateWithoutDetallesInput, ProductoUncheckedCreateWithoutDetallesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetallesInput, ProductoUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateWithoutDetallesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutLoginLogsInput = {
    nombre: string
    apellido: string
    email: string
    password: string
    telefono?: string | null
    direccion?: string | null
    distrito?: string | null
    numero_casa?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLoginLogsInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    telefono?: string | null
    direccion?: string | null
    distrito?: string | null
    numero_casa?: string | null
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLoginLogsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLoginLogsInput, UsuarioUncheckedCreateWithoutLoginLogsInput>
  }

  export type AdministradorCreateWithoutLoginLogsInput = {
    nombre: string
    email: string
    password: string
    rol?: $Enums.AdminRol
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdministradorUncheckedCreateWithoutLoginLogsInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: $Enums.AdminRol
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdministradorCreateOrConnectWithoutLoginLogsInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutLoginLogsInput, AdministradorUncheckedCreateWithoutLoginLogsInput>
  }

  export type UsuarioUpsertWithoutLoginLogsInput = {
    update: XOR<UsuarioUpdateWithoutLoginLogsInput, UsuarioUncheckedUpdateWithoutLoginLogsInput>
    create: XOR<UsuarioCreateWithoutLoginLogsInput, UsuarioUncheckedCreateWithoutLoginLogsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLoginLogsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLoginLogsInput, UsuarioUncheckedUpdateWithoutLoginLogsInput>
  }

  export type UsuarioUpdateWithoutLoginLogsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLoginLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AdministradorUpsertWithoutLoginLogsInput = {
    update: XOR<AdministradorUpdateWithoutLoginLogsInput, AdministradorUncheckedUpdateWithoutLoginLogsInput>
    create: XOR<AdministradorCreateWithoutLoginLogsInput, AdministradorUncheckedCreateWithoutLoginLogsInput>
    where?: AdministradorWhereInput
  }

  export type AdministradorUpdateToOneWithWhereWithoutLoginLogsInput = {
    where?: AdministradorWhereInput
    data: XOR<AdministradorUpdateWithoutLoginLogsInput, AdministradorUncheckedUpdateWithoutLoginLogsInput>
  }

  export type AdministradorUpdateWithoutLoginLogsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumAdminRolFieldUpdateOperationsInput | $Enums.AdminRol
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateWithoutLoginLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumAdminRolFieldUpdateOperationsInput | $Enums.AdminRol
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateWithoutComprobantesInput = {
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutPedidosInput
    detalles?: PedidoDetalleCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutComprobantesInput = {
    id?: number
    usuario_id?: number | null
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    detalles?: PedidoDetalleUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutComprobantesInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutComprobantesInput, PedidoUncheckedCreateWithoutComprobantesInput>
  }

  export type PedidoUpsertWithoutComprobantesInput = {
    update: XOR<PedidoUpdateWithoutComprobantesInput, PedidoUncheckedUpdateWithoutComprobantesInput>
    create: XOR<PedidoCreateWithoutComprobantesInput, PedidoUncheckedCreateWithoutComprobantesInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutComprobantesInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutComprobantesInput, PedidoUncheckedUpdateWithoutComprobantesInput>
  }

  export type PedidoUpdateWithoutComprobantesInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutPedidosNestedInput
    detalles?: PedidoDetalleUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutComprobantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: PedidoDetalleUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string | null
    stock?: number
    destacado?: boolean
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: PedidoDetalleUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: PedidoDetalleUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    destacado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoDetalleCreateManyProductoInput = {
    id?: number
    pedido_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type PedidoDetalleUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoCreateManyUsuarioInput = {
    id?: number
    total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.PedidoEstado
    fecha_entrega?: Date | string | null
    direccion_entrega?: string | null
    distrito_entrega?: string | null
    numero_casa_entrega?: string | null
    direccion_id?: number | null
    telefono_contacto?: string | null
    notas?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LoginLogCreateManyUsuarioInput = {
    id?: number
    admin_id?: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: PedidoDetalleUpdateManyWithoutPedidoNestedInput
    comprobantes?: ComprobanteUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: PedidoDetalleUncheckedUpdateManyWithoutPedidoNestedInput
    comprobantes?: ComprobanteUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: EnumPedidoEstadoFieldUpdateOperationsInput | $Enums.PedidoEstado
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    distrito_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_casa_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    telefono_contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginLogUpdateWithoutUsuarioInput = {
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdministradorUpdateOneWithoutLoginLogsNestedInput
  }

  export type LoginLogUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginLogUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginLogCreateManyAdminInput = {
    id?: number
    usuario_id?: number | null
    tipo_usuario: $Enums.TipoUsuarioLoginLog
    ip_address?: string | null
    user_agent?: string | null
    exitoso?: boolean
    created_at?: Date | string
  }

  export type LoginLogUpdateWithoutAdminInput = {
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutLoginLogsNestedInput
  }

  export type LoginLogUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginLogUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_usuario?: EnumTipoUsuarioLoginLogFieldUpdateOperationsInput | $Enums.TipoUsuarioLoginLog
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    exitoso?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoDetalleCreateManyPedidoInput = {
    id?: number
    producto_id?: number | null
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type ComprobanteCreateManyPedidoInput = {
    id?: number
    tipo: string
    serie: string
    numero: number
    numero_formateado: string
    archivo_nombre: string
    archivo_ruta: string
    mime?: string | null
    size_bytes?: number | null
    created_at?: Date | string
  }

  export type PedidoDetalleUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneWithoutDetallesNestedInput
  }

  export type PedidoDetalleUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoDetalleUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ComprobanteUpdateWithoutPedidoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    numero_formateado?: StringFieldUpdateOperationsInput | string
    archivo_nombre?: StringFieldUpdateOperationsInput | string
    archivo_ruta?: StringFieldUpdateOperationsInput | string
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    numero_formateado?: StringFieldUpdateOperationsInput | string
    archivo_nombre?: StringFieldUpdateOperationsInput | string
    archivo_ruta?: StringFieldUpdateOperationsInput | string
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    serie?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    numero_formateado?: StringFieldUpdateOperationsInput | string
    archivo_nombre?: StringFieldUpdateOperationsInput | string
    archivo_ruta?: StringFieldUpdateOperationsInput | string
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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