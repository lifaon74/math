/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4, readonly_vec4 } from './vec4.type';

export function vec4_scale<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  a: readonly_vec4,
  b: number,
): vec4<GType> {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
