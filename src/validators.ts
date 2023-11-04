// Validators

import { Nullable, Undefinable } from "./primitive";

export const Defined = <T>(t: Undefinable<T>): t is T => t !== undefined;

export const NonNull = <T>(t: T | null): t is T => t !== null;

export const NonEmpty = <T>(t: Nullable<T>): t is T =>
  t !== Defined(t) && NonNull(t);
