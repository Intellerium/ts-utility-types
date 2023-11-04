// Mappers

export type Readonly<T> = { readonly [P in keyof T]: T[P] };

export type Writible<T> = { -readonly [P in keyof T]: T[P] };
