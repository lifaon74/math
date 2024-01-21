import { readonly_vec4, vec4 } from './vec4.type';

/** HAND MADE **/

export function vec4_cross<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  u: readonly_vec4,
  v: readonly_vec4,
  w: readonly_vec4,
): vec4<GType> {
  const A: number = v[0] * w[1] - v[1] * w[0],
    B: number = v[0] * w[2] - v[2] * w[0],
    C: number = v[0] * w[3] - v[3] * w[0],
    D: number = v[1] * w[2] - v[2] * w[1],
    E: number = v[1] * w[3] - v[3] * w[1],
    F: number = v[2] * w[3] - v[3] * w[2];
  const G: number = u[0];
  const H: number = u[1];
  const I: number = u[2];
  const J: number = u[3];

  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;

  return out;
}
