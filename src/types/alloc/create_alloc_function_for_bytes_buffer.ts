import { BytesBuffer } from '../bytes-buffer/bytes-buffer.type.js';
import { u32 } from '../numbers/u32/u32.type.js';
import { usize } from '../numbers/usize/usize.type.js';
import { AllocFunction } from './memory-alloc-function.type.js';

export function create_alloc_function_for_bytes_buffer(
  buffer: BytesBuffer,
): AllocFunction {
  let _allocated: usize = 0;

  return (
    size: u32,
  ): usize => {
    if (size === 0) {
      return _allocated;
    } else {
      const index: number = _allocated;
      _allocated += size;
      if (_allocated > buffer.byteLength) {
        throw new Error('Alloc failed: not enough bytes.');
      }
      return index;
    }
  };
}
