/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec2 } from './vec2.type';

/**
 * Calculates the squared length of a vec2.
 */
export function vec2_squared_length(
  a: readonly_vec2,
): number {
  return (
      a[0] * a[0]
    + a[1] * a[1]
  );
}
