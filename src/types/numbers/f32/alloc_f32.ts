import { AllocFunction } from '../../alloc/memory-alloc-function.type.js';
import { usize } from '../usize/usize.type.js';
import { SIZEOF_F32 } from './sizeof_f32.constant.js';

export function alloc_f32(
  alloc: AllocFunction,
): usize {
  return alloc(SIZEOF_F32);
}
