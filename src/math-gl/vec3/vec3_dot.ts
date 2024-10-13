/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec3 } from './vec3.type.js';

/**
 * Calculates the dot product of two vec3's.
 */
export function vec3_dot(
  a: readonly_vec3,
  b: readonly_vec3,
): number {
  return (
      a[0] * b[0]
    + a[1] * b[1]
    + a[2] * b[2]
  );
}
