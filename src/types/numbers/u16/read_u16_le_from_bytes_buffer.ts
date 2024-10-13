import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../usize/usize.type';
import { u16 } from './u16.type';

export function read_u16_le_from_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
): u16 {
  return (
    (buffer[index] << 8)
    | (buffer[index + 1])
  ) >>> 0;
}
