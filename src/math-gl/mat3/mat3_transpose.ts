import { mat3, readonly_mat3 } from './mat3.type';

export function mat3_transpose(
  out: mat3,
  a: readonly_mat3,
): mat3 {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    const a01 = a[1],
      a02 = a[2],
      a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
