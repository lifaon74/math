/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec3 } from './vec3.type.js';

/**
 * Calculates the squared euclidian distance between two vec3's.
 */
export function vec3_squared_distance(
  a: readonly_vec3,
  b: readonly_vec3,
): number {
  const x: number = b[0] - a[0];
  const y: number = b[1] - a[1];
  const z: number = b[2] - a[2];
  return (
      x * x
    + y * y
    + z * z
  );
}
