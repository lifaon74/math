import { math_hypot } from '../../others/math_hypot';
import { readonly_vec3 } from './vec3.type';

export function vec3_length(
  a: readonly_vec3,
): number {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  return math_hypot(x, y, z);
}
