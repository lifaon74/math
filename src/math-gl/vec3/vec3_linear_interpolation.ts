/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3, readonly_vec3 } from './vec3.type';

export function vec3_linear_interpolation<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  origin: readonly_vec3,
  target: readonly_vec3,
  t: number,
): vec3<GType> {
  const _t: number = 1 - t;
  out[0] = (origin[0] * _t) + (target[0] * t);
  out[1] = (origin[1] * _t) + (target[1] * t);
  out[2] = (origin[2] * _t) + (target[2] * t);
  return out;
}
