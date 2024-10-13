import { usize } from '../numbers/usize/usize.type.js';

export interface AllocFunction {
  (
    size: usize, // the requested size to alloc
  ): usize; // the address of the allocated bytes
}

