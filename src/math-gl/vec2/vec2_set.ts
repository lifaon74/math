import { vec2 } from './vec2.type';

export function vec2_set(
  out: vec2,
  x: number,
  y: number,
): vec2 {
  out[0] = x;
  out[1] = y;
  return out;
}


