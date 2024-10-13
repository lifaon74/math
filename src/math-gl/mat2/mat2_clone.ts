/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat2, readonly_mat2 } from './mat2.type.js';
import { mat2_copy } from './mat2_copy.js';
import { mat2_create } from './mat2_create.js';

/**
 * Creates a new mat2 initialized with values from an existing one.
 */
export function mat2_clone<GType extends ArrayLike<number>>(
  a: readonly_mat2<GType>
): mat2<GType> {
  return mat2_copy<GType>(
    mat2_create<GType>(a.constructor as any),
    a,
  );
}
