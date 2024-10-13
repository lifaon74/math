import { usize } from '../numbers/usize/usize.type';
import { BytesBuffer } from './bytes-buffer.type';

export function create_bytes_buffer(size: usize): BytesBuffer {
  return new Uint8Array(size);
}
