/* INFO: THIS FILE WAS HAND MADE */

import { readonly_mat4 } from '../mat4/mat4.type';
import { readonly_vec3, vec3 } from './vec3.type';

export function vec3_transform_mat4<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec3,
  m: readonly_mat4,
): vec3<GType> {
  const x: number = a[0],
    y: number = a[1],
    z: number = a[2];
  let w: number = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}


