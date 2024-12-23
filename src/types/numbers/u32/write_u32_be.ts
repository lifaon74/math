import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../usize/usize.type.js';
import { u32 } from './u32.type.js';

export function write_u32_be(buffer: BytesBuffer, index: usize, value: u32): void {
  buffer[index] = value >>> 24;
  buffer[index + 1] = value >>> 16;
  buffer[index + 2] = value >>> 8;
  buffer[index + 3] = value;
}
