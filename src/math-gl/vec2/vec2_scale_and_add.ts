import { readonly_vec2, vec2 } from './vec2.type';

export function vec2_scale_and_add(
  out: vec2,
  a: readonly_vec2,
  b: readonly_vec2,
  scale: number,
): vec2 {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
