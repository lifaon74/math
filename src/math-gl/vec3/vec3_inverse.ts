/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3, readonly_vec3 } from './vec3.type.js';

/**
 * Returns the inverse of the components of a  vec3.
 */
export function vec3_inverse<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec3,
): vec3<GType> {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  return out;
}
