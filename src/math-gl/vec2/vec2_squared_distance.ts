/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec2 } from './vec2.type';

/**
 * Calculates the squared euclidian distance between two vec2's.
 */
export function vec2_squared_distance(
  a: readonly_vec2,
  b: readonly_vec2,
): number {
  const x: number = b[0] - a[0];
  const y: number = b[1] - a[1];
  return (
      x * x
    + y * y
  );
}
