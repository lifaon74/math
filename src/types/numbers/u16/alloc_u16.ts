import { AllocFunction } from '../../alloc/memory-alloc-function.type.js';
import { usize } from '../usize/usize.type.js';
import { SIZEOF_U16 } from './sizeof_u16.constant.js';

export function alloc_u16(
  alloc: AllocFunction,
): usize {
  return alloc(SIZEOF_U16);
}
