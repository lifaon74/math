/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec3 } from './vec3.type.js';

/**
 * Calculates the squared length of a vec3.
 */
export function vec3_squared_length(
  a: readonly_vec3,
): number {
  return (
      a[0] * a[0]
    + a[1] * a[1]
    + a[2] * a[2]
  );
}
