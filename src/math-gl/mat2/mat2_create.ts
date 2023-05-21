import { mat2 } from './mat2.type';

export function mat2_create(): mat2 {
  const out: mat2 = new Float32Array(9);
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
