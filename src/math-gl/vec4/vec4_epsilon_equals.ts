/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec4 } from './vec4.type';
import { float_equals } from '../../float/float_equals';

export function vec4_epsilon_equals(
  a: readonly_vec4,
  b: readonly_vec4,
  epsilon?: number,
): boolean {
  return (
       float_equals(a[0], b[0], epsilon)
    && float_equals(a[1], b[1], epsilon)
    && float_equals(a[2], b[2], epsilon)
    && float_equals(a[3], b[3], epsilon)
  );
}
