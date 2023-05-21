import { readonly_mat3 } from '../mat3/mat3.type';
import { readonly_vec2, vec2 } from './vec2.type';

export function vec2_transform_mat4(
  out: vec2,
  a: readonly_vec2,
  m: readonly_mat3,
): vec2 {
  const x = a[0];
  const y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
