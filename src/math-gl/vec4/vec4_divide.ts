/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4, readonly_vec4 } from './vec4.type';

/**
 * Divides two vec4's.
 */
export function vec4_divide<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  a: readonly_vec4,
  b: readonly_vec4,
): vec4<GType> {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
