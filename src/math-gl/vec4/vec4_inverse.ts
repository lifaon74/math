/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4, readonly_vec4 } from './vec4.type';

export function vec4_inverse<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  a: readonly_vec4,
): vec4<GType> {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  out[3] = 1 / a[3];
  return out;
}
