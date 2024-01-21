import { mat4 } from './mat4.type';

// TODO

export function mat4_from_dom_matrix(
  a: DOMMatrix,
): mat4 {
  return a.toFloat32Array() as any;
}
