import { readonly_vec2, vec2 } from './vec2.type';

export function vec2_normalize(
  out: vec2,
  a: readonly_vec2,
): vec2 {
  const x = a[0];
  const y = a[1];
  let len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
