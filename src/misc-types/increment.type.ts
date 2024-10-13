import { ArrayOfLength } from './array-of-length.type.js';

export type Increment<GNumber extends number> = [...ArrayOfLength<GNumber>, any]['length'];
