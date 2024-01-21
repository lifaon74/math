/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat2, readonly_mat2 } from './mat2.type';
import { mat2_copy } from './mat2_copy';
import { mat2_create } from './mat2_create';

export function mat2_clone<GType extends ArrayLike<number>>(
  a: readonly_mat2<GType>
): mat2<GType> {
  return mat2_copy<GType>(
    mat2_create<GType>(a.constructor as any),
    a,
  );
}
