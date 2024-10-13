/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat4, readonly_mat4 } from './mat4.type.js';
import { mat4_copy } from './mat4_copy.js';
import { mat4_create } from './mat4_create.js';

/**
 * Creates a new mat4 initialized with values from an existing one.
 */
export function mat4_clone<GType extends ArrayLike<number>>(
  a: readonly_mat4<GType>
): mat4<GType> {
  return mat4_copy<GType>(
    mat4_create<GType>(a.constructor as any),
    a,
  );
}
