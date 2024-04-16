/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec4 } from './vec4.type';
import { math_hypot } from '../../others/math_hypot';

/**
 * Calculates the length of a vec4.
 */
export function vec4_length(
  a: readonly_vec4,
): number {
  return math_hypot(
    a[0],
    a[1],
    a[2],
    a[3],
  );
}
