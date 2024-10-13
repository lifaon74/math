import { AllocFunction } from '../../alloc/memory-alloc-function.type';
import { usize } from '../../numbers/usize/usize.type';
import { char_string } from './char_string.type';

export function alloc_char_string(
  alloc: AllocFunction,
  value: char_string,
): usize {
  return alloc(value.length);
}
