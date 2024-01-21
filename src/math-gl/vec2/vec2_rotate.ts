/* INFO: THIS FILE WAS HAND MADE */

import { readonly_vec2, vec2 } from './vec2.type';

export function vec2_rotate<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
  b: readonly_vec2,
  rad: number,
): vec2<GType> {
  //Translate point to the origin
  let p0 = a[0] - b[0],
    p1 = a[1] - b[1],
    sinC = Math.sin(rad),
    cosC = Math.cos(rad);

  //perform rotation and translate to correct position
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];

  return out;
}
