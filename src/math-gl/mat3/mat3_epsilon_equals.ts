/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_mat3 } from './mat3.type.js';
import { float_equals } from '../../float/float_equals.js';

/**
 *  Returns whether or not the mat3's have approximately the same elements in the same position.
 */
export function mat3_epsilon_equals(
  a: readonly_mat3,
  b: readonly_mat3,
  epsilon?: number,
): boolean {
  return (
       float_equals(a[0], b[0], epsilon)
    && float_equals(a[1], b[1], epsilon)
    && float_equals(a[2], b[2], epsilon)
    && float_equals(a[3], b[3], epsilon)
    && float_equals(a[4], b[4], epsilon)
    && float_equals(a[5], b[5], epsilon)
    && float_equals(a[6], b[6], epsilon)
    && float_equals(a[7], b[7], epsilon)
    && float_equals(a[8], b[8], epsilon)
  );
}
