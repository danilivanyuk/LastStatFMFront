/**
 * Represents type that can have null value
 */
export type Nullable<T> = T | null;

/**
 * Represents nullable(`null`) or `undefined(?)` type
 * @template T Type to make nullable or undefined
 */
export type NullableAndUndef<T> = Nullable<T> | undefined | T;

/**
 * Represents `number` or `string` type
 */
export type NumberOrString = number | string;

export type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends (infer R)[]
    ? NestedPartial<R>[]
    : NestedPartial<T[K]>;
};

/**
 * Represents enum
 * @template TEnum type of enum
 */
export type Enum<TEnum> = {
  [enumKey: string]: TEnum | string;
  [enumValue: number]: string;
};
