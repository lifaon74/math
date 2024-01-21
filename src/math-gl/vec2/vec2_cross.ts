/* INFO: THIS FILE WAS HAND MADE */

import { readonly_vec2, vec2 } from './vec2.type';
import { vec3 } from '../vec3/vec3.type';

export function vec2_cross<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec2,
  b: readonly_vec2,
): vec3<GType> {
  const z: number = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
