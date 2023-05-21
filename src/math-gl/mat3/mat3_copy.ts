import { mat3, readonly_mat3 } from './mat3.type';

export function mat3_copy(
  out: mat3,
  a: readonly_mat3,
): mat3 {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}