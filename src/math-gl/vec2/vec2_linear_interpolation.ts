/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2, readonly_vec2 } from './vec2.type';

/**
 * Performs a linear interpolation between two vec2's.
 */
export function vec2_linear_interpolation<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  origin: readonly_vec2,
  target: readonly_vec2,
  t: number,
): vec2<GType> {
  const _t: number = 1 - t;
  out[0] = (origin[0] * _t) + (target[0] * t);
  out[1] = (origin[1] * _t) + (target[1] * t);
  return out;
}
