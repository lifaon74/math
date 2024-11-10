import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../usize/usize.type.js';
import { u16 } from './u16.type.js';

export function read_u16_be(buffer: BytesBuffer, index: usize): u16 {
  return ((buffer[index] << 8) | buffer[index + 1]) >>> 0;
}
