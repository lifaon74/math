/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2 } from './vec2.type.js';

/**
 * Set the components of a vec2 to zero.
 */
export function vec2_zero<GType extends ArrayLike<number>>(
  out: vec2<GType>,
): vec2<GType> {
  out[0] = 0;
  out[1] = 0;
  return out;
}
