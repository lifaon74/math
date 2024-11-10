import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../usize/usize.type.js';
import { u32 } from './u32.type.js';

export function read_u32_le(buffer: BytesBuffer, index: usize): u32 {
  return (
    (buffer[index] |
      (buffer[index + 1] << 8) |
      (buffer[index + 2] << 16) |
      (buffer[index + 3] << 24)) >>>
    0
  );
}
