import { usize } from '../numbers/usize/usize.type.js';
import { BytesBuffer } from './bytes-buffer.type.js';

export function create_bytes_buffer(size: usize): BytesBuffer {
  return new Uint8Array(size);
}
