import { BytesBuffer } from '../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../numbers/usize/usize.type.js';

export function write_uint8_array(buffer: BytesBuffer, index: usize, value: Uint8Array): void {
  buffer.set(value, index);
}
