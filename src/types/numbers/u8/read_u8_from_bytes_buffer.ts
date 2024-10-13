import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../usize/usize.type';
import { u8 } from './u8.type';

export function read_u8_from_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
): u8 {
  return buffer[index];
}

