import { mat4 } from './mat4.type.js';

// TODO

export function mat4_to_css_matrix(
  a: mat4,
): string {
  return `matrix(${a[0]}, ${a[1]}, ${a[4]}, ${a[5]}, ${a[12]}, ${a[13]})`;
}
