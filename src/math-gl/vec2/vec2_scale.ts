/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2, readonly_vec2 } from './vec2.type';

/**
 * Scales a vec2 by a scalar number.
 */
export function vec2_scale<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
  b: number,
): vec2<GType> {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
