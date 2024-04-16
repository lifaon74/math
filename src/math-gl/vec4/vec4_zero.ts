/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4 } from './vec4.type';

/**
 * Set the components of a vec4 to zero.
 */
export function vec4_zero<GType extends ArrayLike<number>>(
  out: vec4<GType>,
): vec4<GType> {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}
