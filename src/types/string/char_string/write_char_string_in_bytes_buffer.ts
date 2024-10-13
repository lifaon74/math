import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { u16 } from '../../numbers/u16/u16.type';
import { usize } from '../../numbers/usize/usize.type';
import { char_string } from './char_string.type';

export function write_char_string_in_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  value: char_string,
): void {
  for (let i = 0; i < value.length; i++) {
    const charCode: u16 = value.charCodeAt(i);
    if (charCode <= 0xff) {
      buffer[index + i] = charCode;
    } else {
      throw new Error(`Not a char string: at index ${i} found char code ${charCode}`);
    }
  }
}


