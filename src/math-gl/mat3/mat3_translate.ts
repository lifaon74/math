import { readonly_vec2 } from '../vec2/vec2.type.js';
import { mat3, readonly_mat3 } from './mat3.type.js';

// TODO

export function mat3_translate(
  out: mat3,
  a: readonly_mat3,
  v: readonly_vec2,
): mat3 {
  const a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    x = v[0],
    y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;

  return out;
}
