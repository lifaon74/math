/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat3, readonly_mat3 } from './mat3.type';
import { mat3_copy } from './mat3_copy';
import { mat3_create } from './mat3_create';

export function mat3_clone<GType extends ArrayLike<number>>(
  a: readonly_mat3<GType>
): mat3<GType> {
  return mat3_copy<GType>(
    mat3_create<GType>(a.constructor as any),
    a,
  );
}
