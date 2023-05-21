import { readonly_mat3 } from './mat3.type';

export function mat3_determinant(
  a: readonly_mat3,
): number {
  const a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  const a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  const a20 = a[6],
    a21 = a[7],
    a22 = a[8];

  return (
    a00 * (a22 * a11 - a12 * a21) +
    a01 * (-a22 * a10 + a12 * a20) +
    a02 * (a21 * a10 - a11 * a20)
  );
}
