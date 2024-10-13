import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../usize/usize.type';
import { u16 } from './u16.type';

export function write_u16_be_in_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  value: u16,
): void {
  buffer[index] = value;
  buffer[index + 1] = (value >>> 8);
}
