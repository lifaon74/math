import { AllocFunction } from '../../alloc/memory-alloc-function.type';
import { usize } from '../usize/usize.type';
import { SIZEOF_F32 } from './sizeof_f32.constant';

export function alloc_f32(
  alloc: AllocFunction,
): usize {
  return alloc(SIZEOF_F32);
}
