/* INFO: THIS FILE WAS HAND MADE */

import { readonly_vec3, vec3 } from './vec3.type.js';

export function vec3_cross<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec3,
  b: readonly_vec3,
): vec3<GType> {
  const ax: number = a[0],
    ay: number = a[1],
    az: number = a[2];
  const bx: number = b[0],
    by: number = b[1],
    bz: number = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
