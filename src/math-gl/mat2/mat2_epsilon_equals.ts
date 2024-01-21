/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_mat2 } from './mat2.type';
import { float_equals } from '../../float/float_equals';

export function mat2_epsilon_equals(
  a: readonly_mat2,
  b: readonly_mat2,
  epsilon?: number,
): boolean {
  return (
       float_equals(a[0], b[0], epsilon)
    && float_equals(a[1], b[1], epsilon)
    && float_equals(a[2], b[2], epsilon)
    && float_equals(a[3], b[3], epsilon)
  );
}
