/* INFO: THIS FILE WAS HAND MADE */

import { readonly_vec3, vec3 } from './vec3.type.js';
import { readonly_quat } from '../quat/quat.type.js';

export function vec3_transform_quat<GType extends ArrayLike<number>>(
  out: vec3<GType>,
  a: readonly_vec3,
  q: readonly_quat,
): vec3<GType> {
  const qx: number = q[0],
    qy: number = q[1],
    qz: number = q[2],
    qw: number = q[3];
  const x: number = a[0],
    y: number = a[1],
    z: number = a[2];
  // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);
  let uvx: number = qy * z - qz * y,
    uvy: number = qz * x - qx * z,
    uvz: number = qx * y - qy * x;
  // var uuv = vec3.cross([], qvec, uv);
  let uuvx: number = qy * uvz - qz * uvy,
    uuvy: number = qz * uvx - qx * uvz,
    uuvz: number = qx * uvy - qy * uvx;
  // vec3.scale(uv, uv, 2 * w);
  const w2: number = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  // vec3.scale(uuv, uuv, 2);
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  // return vec3.add(out, a, vec3.add(out, uv, uuv));
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}


