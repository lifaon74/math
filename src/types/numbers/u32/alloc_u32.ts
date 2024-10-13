import { AllocFunction } from '../../alloc/memory-alloc-function.type';
import { usize } from '../usize/usize.type';
import { SIZEOF_U32 } from './sizeof_u32.constant';

export function alloc_u32(
  alloc: AllocFunction,
): usize {
  return alloc(SIZEOF_U32);
}
