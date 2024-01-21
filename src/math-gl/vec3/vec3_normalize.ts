/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3, readonly_vec3 } from './vec3.type';
import { vec3_length } from './vec3_length';

export function vec3_normalize<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec3,
): vec3<GType> {
  let length: number = vec3_length(a);
  if (length > 0) {
    length = 1 / length;
  }
  out[0] = a[0] * length;
  out[1] = a[1] * length;
  out[2] = a[2] * length;
  return out;
}
