/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4, readonly_vec4 } from './vec4.type.js';

/**
 * Copy the values from one vec4 to another.
 */
export function vec4_copy<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  a: readonly_vec4,
): vec4<GType> {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
