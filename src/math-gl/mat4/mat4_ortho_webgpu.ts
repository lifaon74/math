import { mat4 } from './mat4.type.js';

// TODO

export function mat4_ortho_webgpu(
  out: mat4,
  left: number,
  right: number,
  bottom: number,
  top: number,
  near: number,
  far: number,
): mat4 {
  const lr: number = 1 / (left - right);
  const bt: number = 1 / (bottom - top);
  const nf: number = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
