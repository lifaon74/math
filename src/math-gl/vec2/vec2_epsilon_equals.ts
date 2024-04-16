/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec2 } from './vec2.type';
import { float_equals } from '../../float/float_equals';

/**
 *  Returns whether or not the vec2's have approximately the same elements in the same position.
 */
export function vec2_epsilon_equals(
  a: readonly_vec2,
  b: readonly_vec2,
  epsilon?: number,
): boolean {
  return (
       float_equals(a[0], b[0], epsilon)
    && float_equals(a[1], b[1], epsilon)
  );
}
