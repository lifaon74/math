import { AllocFunction } from '../../alloc/memory-alloc-function.type';
import { usize } from '../usize/usize.type';
import { SIZEOF_U8 } from './sizeof_u8.constant';

export function alloc_u8(
  alloc: AllocFunction,
): usize {
  return alloc(SIZEOF_U8);
}
