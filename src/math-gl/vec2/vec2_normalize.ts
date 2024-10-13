/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2, readonly_vec2 } from './vec2.type.js';
import { vec2_length } from './vec2_length.js';

/**
 * Normalize a  vec2.
 */
export function vec2_normalize<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
): vec2<GType> {
  let length: number = vec2_length(a);
  if (length > 0) {
    length = 1 / length;
  }
  out[0] = a[0] * length;
  out[1] = a[1] * length;
  return out;
}
