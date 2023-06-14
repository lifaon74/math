import { math_hypot } from '../../others/math_hypot';
import { readonly_vec2 } from './vec2.type';

export function vec2_length(
  a: readonly_vec2,
): number {
  return math_hypot(a[0], a[1]);
}
