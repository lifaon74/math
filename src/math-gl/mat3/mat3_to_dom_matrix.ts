import { mat3 } from './mat3.type';

// TODO

export function mat3_to_dom_matrix(
  a: mat3,
): DOMMatrix {
  return new DOMMatrix([
    a[0],
    a[1],
    a[3],
    a[4],
    a[6],
    a[7],
  ]);
}
