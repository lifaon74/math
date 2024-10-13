import { AllocFunction } from '../../alloc/memory-alloc-function.type.js';
import { usize } from '../usize/usize.type.js';
import { SIZEOF_U32 } from './sizeof_u32.constant.js';

export function alloc_u32(
  alloc: AllocFunction,
): usize {
  return alloc(SIZEOF_U32);
}
