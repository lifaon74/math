import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../usize/usize.type.js';
import { u32 } from './u32.type.js';

export function read_u32_le_from_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
): u32 {
  return (
    (buffer[index] << 24)
    | (buffer[index + 1] << 16)
    | (buffer[index + 2] << 8)
    | (buffer[index + 3])
  ) >>> 0;
}
