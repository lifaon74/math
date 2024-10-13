import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../../numbers/usize/usize.type';
import { char_string } from './char_string.type';

export function read_char_string_from_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  length: usize,
): char_string {
  let str: string = '';
  for (let i = 0; i < length; i++) {
    str += String.fromCharCode(buffer[index + i]);
  }
  return str;
}

