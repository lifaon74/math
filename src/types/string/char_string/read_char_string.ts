import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../../numbers/usize/usize.type.js';
import { char_string } from './char_string.type.js';

export function read_char_string(buffer: BytesBuffer, index: usize, length: usize): char_string {
  let str: string = '';
  for (let i = 0; i < length; i++) {
    str += String.fromCharCode(buffer[index + i]);
  }
  return str;
}
