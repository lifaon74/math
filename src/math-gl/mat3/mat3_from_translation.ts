import { readonly_vec2 } from '../vec2/vec2.type.js';
import { mat3 } from './mat3.type.js';

// TODO

export function mat3_from_translation(
  out: mat3,
  v: readonly_vec2,
): mat3 {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
