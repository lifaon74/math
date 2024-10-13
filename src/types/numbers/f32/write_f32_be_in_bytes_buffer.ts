import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type.js';
import { usize } from '../usize/usize.type.js';
import { f32 } from './f32.type.js';

// TODO optimize
export function write_f32_be_in_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  value: f32,
): void {
  new DataView(buffer.buffer, buffer.byteOffset + index, Float32Array.BYTES_PER_ELEMENT).setFloat32(0, value, false);
}
