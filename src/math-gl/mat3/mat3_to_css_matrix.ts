import { mat3 } from './mat3.type';

export function mat3_to_css_matrix(
  a: mat3,
): string {
  return `matrix(${a[0]}, ${a[1]}, ${a[3]}, ${a[4]}, ${a[6]}, ${a[7]})`;
}
