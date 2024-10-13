/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2, readonly_vec2 } from './vec2.type.js';

/**
 * Subtract two vec2's (subtract `b` from `a`).
 */
export function vec2_subtract<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
  b: readonly_vec2,
): vec2<GType> {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
