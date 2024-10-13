import { AllocFunction } from '../../alloc/memory-alloc-function.type';
import { usize } from '../usize/usize.type';
import { SIZEOF_U16 } from './sizeof_u16.constant';

export function alloc_u16(
  alloc: AllocFunction,
): usize {
  return alloc(SIZEOF_U16);
}
