/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat3 } from './mat3.type.js';

/**
 *  Set the components of a mat3 to the given values.
 */
export function mat3_set<GType extends ArrayLike<number>>(
  out: mat3<GType>,
  m00: number,
  m01: number,
  m02: number,
  m10: number,
  m11: number,
  m12: number,
  m20: number,
  m21: number,
  m22: number,
): mat3<GType> {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
