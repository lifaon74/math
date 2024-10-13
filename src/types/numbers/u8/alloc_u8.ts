import { AllocFunction } from '../../alloc/memory-alloc-function.type.js';
import { usize } from '../usize/usize.type.js';
import { SIZEOF_U8 } from './sizeof_u8.constant.js';

export function alloc_u8(
  alloc: AllocFunction,
): usize {
  return alloc(SIZEOF_U8);
}
