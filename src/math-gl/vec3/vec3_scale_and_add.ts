/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3, readonly_vec3 } from './vec3.type.js';

/**
 * Adds two vec3's after scaling the second operand by a scalar value.
 */
export function vec3_scale_and_add<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec3,
  b: readonly_vec3,
  scale: number,
): vec3<GType> {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
