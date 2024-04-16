/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec2 } from './vec2.type';
import { math_hypot } from '../../others/math_hypot';

/**
 * Calculates the length of a vec2.
 */
export function vec2_length(
  a: readonly_vec2,
): number {
  return math_hypot(
    a[0],
    a[1],
  );
}
