/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4, readonly_vec4 } from './vec4.type';

export function vec4_scale_and_add<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  a: readonly_vec4,
  b: readonly_vec4,
  scale: number,
): vec4<GType> {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
