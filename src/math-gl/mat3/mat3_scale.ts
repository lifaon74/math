import { readonly_vec2 } from '../vec2/vec2.type.js';
import { mat3, readonly_mat3 } from './mat3.type.js';

// TODO

export function mat3_scale(
  out: mat3,
  a: readonly_mat3,
  v: readonly_vec2,
): mat3 {
  const x = v[0],
    y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];

  return out;
}
