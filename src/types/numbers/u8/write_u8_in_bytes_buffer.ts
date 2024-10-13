import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../usize/usize.type';
import { u8 } from './u8.type';

export function write_u8_in_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  value: u8,
): void {
  buffer[index] = value;
}


