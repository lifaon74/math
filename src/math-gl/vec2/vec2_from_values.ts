import { vec2 } from './vec2.type';

export function vec2_from_values(
  x: number,
  y: number,
): vec2 {
  const out = new Float32Array(2);
  out[0] = x;
  out[1] = y;
  return out;
}


