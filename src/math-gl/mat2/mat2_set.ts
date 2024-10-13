/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat2 } from './mat2.type.js';

/**
 *  Set the components of a mat2 to the given values.
 */
export function mat2_set<GType extends ArrayLike<number>>(
  out: mat2<GType>,
  m00: number,
  m01: number,
  m10: number,
  m11: number,
): mat2<GType> {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
