import { mat4 } from './mat4.type';

export function mat4_to_dom_matrix(
  a: mat4,
): DOMMatrix {
  return DOMMatrix.fromFloat32Array(a);
  // return new DOMMatrix(a as any);
}
