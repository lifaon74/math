import { AllocFunction } from '../../alloc/memory-alloc-function.type.js';
import { usize } from '../../numbers/usize/usize.type.js';
import { char_string } from './char_string.type.js';

export function alloc_char_string(
  alloc: AllocFunction,
  value: char_string,
): usize {
  return alloc(value.length);
}
