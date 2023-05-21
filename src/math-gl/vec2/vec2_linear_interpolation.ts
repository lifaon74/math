import { readonly_vec2, vec2 } from './vec2.type';

export function vec2_linear_interpolation(
  origin: readonly_vec2,
  target: readonly_vec2,
  current: vec2,
  t: number
): void {
  const _t: number = 1 - t;

  current[0] = (origin[0] * _t) + (target[0] * t);
  current[1] = (origin[1] * _t) + (target[1] * t);
}
