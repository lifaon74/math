import { math_cos } from '../../others/math_cos';
import { math_sin } from '../../others/math_sin';
import { mat3, readonly_mat3 } from './mat3.type';

export function mat3_rotate(
  out: mat3,
  a: readonly_mat3,
  rad: number,
): mat3 {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    s = math_sin(rad),
    c = math_cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;

  return out;
}
