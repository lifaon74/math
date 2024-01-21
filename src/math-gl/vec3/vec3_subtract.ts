/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3, readonly_vec3 } from './vec3.type';

export function vec3_subtract<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec3,
  b: readonly_vec3,
): vec3<GType> {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
