import { vec3 } from '../vec3/vec3.type.js';
import { mat4, readonly_mat4 } from './mat4.type.js';

// TODO

export function mat4_get_translation(
  out: vec3,
  mat: readonly_mat4,
): vec3 {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}
