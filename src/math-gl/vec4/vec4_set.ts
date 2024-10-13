/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4 } from './vec4.type.js';

/**
 *  Set the components of a vec4 to the given values.
 */
export function vec4_set<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  x: number,
  y: number,
  z: number,
  w: number,
): vec4<GType> {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
