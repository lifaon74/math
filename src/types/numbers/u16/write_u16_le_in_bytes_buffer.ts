import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../usize/usize.type.js';
import { u16 } from './u16.type.js';

export function write_u16_le_in_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  value: u16,
): void {
  buffer[index] = (value >>> 8);
  buffer[index + 1] = value;
}
