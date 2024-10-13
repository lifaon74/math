import { BytesBuffer } from '../bytes-buffer/bytes-buffer.type';
import { usize } from '../numbers/usize/usize.type';

export function read_uint8_array_from_bytes_buffer(
  buffer: BytesBuffer,
  index: usize,
  length: usize,
): Uint8Array {
  return buffer.subarray(index, index + length);
}

