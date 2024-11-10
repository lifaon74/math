import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../usize/usize.type.js';
import { u8 } from './u8.type.js';

export function write_u8(buffer: BytesBuffer, index: usize, value: u8): void {
  buffer[index] = value;
}
