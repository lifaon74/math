/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2, readonly_vec2 } from './vec2.type.js';

/**
 * Adds two vec2's after scaling the second operand by a scalar value.
 */
export function vec2_scale_and_add<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
  b: readonly_vec2,
  scale: number,
): vec2<GType> {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
