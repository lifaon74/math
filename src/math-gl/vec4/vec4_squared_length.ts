/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec4 } from './vec4.type';

/**
 * Calculates the squared length of a vec4.
 */
export function vec4_squared_length(
  a: readonly_vec4,
): number {
  return (
      a[0] * a[0]
    + a[1] * a[1]
    + a[2] * a[2]
    + a[3] * a[3]
  );
}
