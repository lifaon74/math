import { vec3 } from '../vec3/vec3.type';
import { mat4 } from './mat4.type';

export function mat4_from_scale_origin(
  out: mat4,
  s: vec3,
  o: vec3,
): mat4 {
  const sx = s[0];
  const sy = s[1];
  const sz = s[2];
  const ox = o[0];
  const oy = o[1];
  const oz = o[2];
  out[0] = sx;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = sy;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = sz;
  out[11] = 0;
  out[12] = ox - (sx * ox); // ox * (1 - sx)
  out[13] = oy - (sy * oy);
  out[14] = oz - (sz * oz);
  out[15] = 1;
  return out;
}
