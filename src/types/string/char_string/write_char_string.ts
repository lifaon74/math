import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { u16 } from '../../numbers/u16/u16.type.js';
import { usize } from '../../numbers/usize/usize.type.js';
import { char_string } from './char_string.type.js';

export function write_char_string(buffer: BytesBuffer, index: usize, value: char_string): void {
  for (let i = 0; i < value.length; i++) {
    const charCode: u16 = value.charCodeAt(i);
    if (charCode <= 0xff) {
      buffer[index + i] = charCode;
    } else {
      throw new Error(`Not a char string: at index ${i} found char code ${charCode}`);
    }
  }
}
