import { ArrayOfLength } from './array-of-length.type';

export type Increment<GNumber extends number> = [...ArrayOfLength<GNumber>, any]['length'];
