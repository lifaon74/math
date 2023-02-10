import { mat4 } from './mat4.type';

export function mat4_to_css_matrix(
  out: mat4,
): string {
  return `matrix(${out[0]}, ${out[1]}, ${out[4]}, ${out[5]}, ${out[12]}, ${out[13]})`;
}
