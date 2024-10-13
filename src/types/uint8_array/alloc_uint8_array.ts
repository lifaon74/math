import { AllocFunction } from '../alloc/memory-alloc-function.type.js';
import { usize } from '../numbers/usize/usize.type.js';

export function alloc_uint8_array(
  alloc: AllocFunction,
  value: Uint8Array,
): usize {
  return alloc(value.length);
}
