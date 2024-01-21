/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2, readonly_vec2 } from './vec2.type';

export function vec2_negate<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
): vec2<GType> {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
