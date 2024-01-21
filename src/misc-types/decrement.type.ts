import { ArrayOfLength } from './array-of-length.type';

export type Decrement<GNumber extends number> = ArrayOfLength<GNumber> extends [any, ...infer GRest] ? GRest['length'] : never;
