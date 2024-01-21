import { vec3 } from './vec3.type';

// TODO

export function vec3_set(
  out: vec3,
  x: number,
  y: number,
  z: number,
): vec3 {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}


