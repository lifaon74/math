import { readonly_mat4 } from '../mat4/mat4.type';
import { mat3 } from './mat3.type';

export function mat3_from_mat4(
  out: mat3,
  a: readonly_mat4,
): mat3 {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
