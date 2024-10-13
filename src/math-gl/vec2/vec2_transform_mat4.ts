/* INFO: THIS FILE WAS HAND MADE */

import { readonly_vec2, vec2 } from './vec2.type.js';
import { readonly_mat4 } from '../mat4/mat4.type.js';

export function vec2_transform_mat4<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
  m: readonly_mat4,
): vec2<GType> {
  const x: number = a[0];
  const y: number = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
