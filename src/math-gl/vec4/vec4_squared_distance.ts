/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec4 } from './vec4.type.js';

/**
 * Calculates the squared euclidian distance between two vec4's.
 */
export function vec4_squared_distance(
  a: readonly_vec4,
  b: readonly_vec4,
): number {
  const x: number = b[0] - a[0];
  const y: number = b[1] - a[1];
  const z: number = b[2] - a[2];
  const w: number = b[3] - a[3];
  return (
      x * x
    + y * y
    + z * z
    + w * w
  );
}
