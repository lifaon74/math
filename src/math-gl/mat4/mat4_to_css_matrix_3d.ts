import { mat4 } from './mat4.type.js';

export function mat4_to_css_matrix_3d(
  a: mat4,
): string {
  // TODO fix type
  return `matrix3d(${(a as any).join(', ')})`;
}
