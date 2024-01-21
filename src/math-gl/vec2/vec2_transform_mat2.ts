import { readonly_vec2, vec2 } from './vec2.type';
import { readonly_mat2 } from '../mat2/mat2.type';

/** HAND MADE **/

export function vec2_transform_mat2<GType extends ArrayLike<number>>(
  out: vec2<GType>,
  a: readonly_vec2,
  m: readonly_mat2,
): vec2<GType> {
  const x: number = a[0],
    y: number = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
