/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_mat4 } from './mat4.type.js';
import { float_equals } from '../../float/float_equals.js';

/**
 *  Returns whether or not the mat4's have approximately the same elements in the same position.
 */
export function mat4_epsilon_equals(
  a: readonly_mat4,
  b: readonly_mat4,
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
    && float_equals(a[9], b[9], epsilon)
    && float_equals(a[10], b[10], epsilon)
    && float_equals(a[11], b[11], epsilon)
    && float_equals(a[12], b[12], epsilon)
    && float_equals(a[13], b[13], epsilon)
    && float_equals(a[14], b[14], epsilon)
    && float_equals(a[15], b[15], epsilon)
  );
}
