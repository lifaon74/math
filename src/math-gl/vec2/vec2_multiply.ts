import { vec2, readonly_vec2 } from './vec2.type';

export function vec2_multiply(
  out: vec2,
  a: readonly_vec2,
  b: readonly_vec2,
): vec2 {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}


