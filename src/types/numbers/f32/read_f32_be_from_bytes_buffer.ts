import { BytesBuffer } from '../../bytes-buffer/bytes-buffer.type';
import { usize } from '../usize/usize.type';
import { f32 } from './f32.type';

// TODO optimize
export function read_f32_be_from_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
): f32 {
  return new DataView(buffer.buffer, buffer.byteOffset + index, Float32Array.BYTES_PER_ELEMENT).getFloat32(0, false);
}


