/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec3 } from './vec3.type';
import { float_equals } from '../../float/float_equals';

/**
 *  Returns whether or not the vec3's have approximately the same elements in the same position.
 */
export function vec3_epsilon_equals(
  a: readonly_vec3,
  b: readonly_vec3,
  epsilon?: number,
): boolean {
  return (
       float_equals(a[0], b[0], epsilon)
    && float_equals(a[1], b[1], epsilon)
    && float_equals(a[2], b[2], epsilon)
  );
}
