import { mat4 } from './mat4.type.js';

// TODO

export function mat4_perspective_webgpu(
  out: mat4,
  fovy: number, // Vertical field of view in radians
  aspect: number, // Aspect ratio. typically viewport width/height
  near: number, // Near bound of the frustum
  far: number, // Far bound of the frustum, can be null or Infinity
): mat4 {
  const f = 1.0 / Math.tan(fovy / 2);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    const nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}
