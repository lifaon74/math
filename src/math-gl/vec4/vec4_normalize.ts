/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4, readonly_vec4 } from './vec4.type';
import { vec4_length } from './vec4_length';

export function vec4_normalize<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  a: readonly_vec4,
): vec4<GType> {
  let length: number = vec4_length(a);
  if (length > 0) {
    length = 1 / length;
  }
  out[0] = a[0] * length;
  out[1] = a[1] * length;
  out[2] = a[2] * length;
  out[3] = a[3] * length;
  return out;
}
