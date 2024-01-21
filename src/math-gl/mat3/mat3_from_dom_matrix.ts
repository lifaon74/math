import { mat3 } from './mat3.type';
import { mat3_from_values } from './mat3_from_values';

// TODO

export function mat3_from_dom_matrix(
  a: DOMMatrix,
): mat3 {
  if (a.is2D) {
    return mat3_from_values(
      a.a,
      a.b,
      0,
      a.c,
      a.d,
      0,
      a.e,
      a.f,
      1,
    );
    // return mat3_from_values(
    //   a.m11,
    //   a.m12,
    //   a.m13,
    //   a.m21,
    //   a.m22,
    //   a.m23,
    //   a.m31,
    //   a.m32,
    //   a.m33,
    // );
  } else {
    throw new Error(`Not a 2D matrix`);
  }
}
