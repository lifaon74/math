/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3 } from './vec3.type.js';

/**
 *  Set the components of a vec3 to the given values.
 */
export function vec3_set<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  x: number,
  y: number,
  z: number,
): vec3<GType> {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
