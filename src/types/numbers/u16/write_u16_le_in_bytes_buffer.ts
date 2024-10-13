import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../usize/usize.type';
import { u16 } from './u16.type';

export function write_u16_le_in_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  value: u16,
): void {
  buffer[index] = (value >>> 8);
  buffer[index + 1] = value;
}
