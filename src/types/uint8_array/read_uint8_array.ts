import { BytesBuffer } from '../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../numbers/usize/usize.type.js';

export function read_uint8_array(buffer: BytesBuffer, index: usize, length: usize): Uint8Array {
  return buffer.subarray(index, index + length);
}
