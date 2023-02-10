import { mat4 } from './mat4.type';

export function mat4_to_css_matrix_3d(
  out: mat4,
): string {
  return `matrix3d(${out.join(', ')})`;
}
