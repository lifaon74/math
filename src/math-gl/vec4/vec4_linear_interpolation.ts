/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4, readonly_vec4 } from './vec4.type';

export function vec4_linear_interpolation<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  origin: readonly_vec4,
  target: readonly_vec4,
  t: number,
): vec4<GType> {
  const _t: number = 1 - t;
  out[0] = (origin[0] * _t) + (target[0] * t);
  out[1] = (origin[1] * _t) + (target[1] * t);
  out[2] = (origin[2] * _t) + (target[2] * t);
  out[3] = (origin[3] * _t) + (target[3] * t);
  return out;
}
