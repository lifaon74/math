/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2, readonly_vec2 } from './vec2.type.js';

/**
 * Copy the values from one vec2 to another.
 */
export function vec2_copy<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
): vec2<GType> {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
