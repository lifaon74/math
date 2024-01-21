import { readonly_vec4, vec4 } from './vec4.type';
import { readonly_quat } from '../quat/quat.type';

/** HAND MADE **/

export function vec4_transform_quat<GType extends ArrayLike<number>>(
  out: vec4<GType>,
  a: readonly_vec4,
  q: readonly_quat,
): vec4<GType> {
  const x: number = a[0],
    y: number = a[1],
    z: number = a[2];
  const qx: number = q[0],
    qy: number = q[1],
    qz: number = q[2],
    qw: number = q[3];

  // calculate quat * vec
  const ix: number = qw * x + qy * z - qz * y;
  const iy: number = qw * y + qz * x - qx * z;
  const iz: number = qw * z + qx * y - qy * x;
  const iw: number = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
