import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../usize/usize.type';
import { u32 } from './u32.type';

export function read_u32_be_from_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
): u32 {
  return (
    (buffer[index])
    | (buffer[index + 1] << 8)
    | (buffer[index + 2] << 16)
    | (buffer[index + 3] << 24)
  ) >>> 0;
}


