/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2 } from './vec2.type.js';

/**
 *  Set the components of a vec2 to the given values.
 */
export function vec2_set<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  x: number,
  y: number,
): vec2<GType> {
  out[0] = x;
  out[1] = y;
  return out;
}
