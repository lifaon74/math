/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat2, readonly_mat2 } from './mat2.type';

/**
 * Copy the values from one mat2 to another.
 */
export function mat2_copy<GType extends ArrayLike<number>>(
  out: mat2<GType>,
  a: readonly_mat2,
): mat2<GType> {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
