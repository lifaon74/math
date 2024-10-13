import { ArrayOfLength } from './array-of-length.type.js';

export type Decrement<GNumber extends number> = ArrayOfLength<GNumber> extends [any, ...infer GRest] ? GRest['length'] : never;
