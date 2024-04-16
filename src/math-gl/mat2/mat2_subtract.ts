/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat2, readonly_mat2 } from './mat2.type';

/**
 * Subtract two mat2's (subtract `b` from `a`).
 */
export function mat2_subtract<GType extends ArrayLike<number>>(
  out: mat2<GType>,
  a: readonly_mat2,
  b: readonly_mat2,
): mat2<GType> {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
