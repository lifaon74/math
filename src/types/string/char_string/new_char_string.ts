import { AllocFunction } from '../../alloc/alloc-function.type.js';
import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../../numbers/usize/usize.type.js';
import { alloc_char_string } from './alloc_char_string.js';
import { char_string } from './char_string.type.js';
import { write_char_string } from './write_char_string.js';

export function new_char_string(
  buffer: BytesBuffer,
  alloc: AllocFunction,
  value: char_string,
): usize {
  const index: usize = alloc_char_string(alloc, value);
  write_char_string(buffer, index, value);
  return index;
}
