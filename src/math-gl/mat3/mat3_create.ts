import { mat3 } from './mat3.type';

export function mat3_create(): mat3 {
  const out: mat3 = new Float32Array(9);
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
