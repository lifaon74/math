import { readonly_vec3, vec3 } from './vec3.type';
import { readonly_mat3 } from '../mat3/mat3.type';

/** HAND MADE **/

export function vec3_transform_mat3<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec3,
  m: readonly_mat3,
): vec3<GType> {
  const x: number = a[0],
    y: number = a[1],
    z: number = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}


