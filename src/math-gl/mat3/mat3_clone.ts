import { mat3, readonly_mat3 } from './mat3.type';
import { mat3_copy } from './mat3_copy';
import { mat3_create } from './mat3_create';

export function mat3_clone(
  a: readonly_mat3,
): mat3 {
  return mat3_copy(mat3_create(), a);
}
