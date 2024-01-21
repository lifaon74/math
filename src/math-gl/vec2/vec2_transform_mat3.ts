/* INFO: THIS FILE WAS HAND MADE */

import { readonly_mat3 } from '../mat3/mat3.type';
import { readonly_vec2, vec2 } from './vec2.type';

export function vec2_transform_mat3<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
  m: readonly_mat3,
): vec2<GType> {
  const x: number = a[0],
    y: number = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
