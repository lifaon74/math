import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../usize/usize.type';
import { u32 } from './u32.type';

export function write_u32_le_in_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  value: u32,
): void {
  buffer[index] = (value >>> 24);
  buffer[index + 1] = (value >>> 16);
  buffer[index + 2] = (value >>> 8);
  buffer[index + 3] = value;
}
