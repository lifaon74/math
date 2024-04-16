/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec2 } from './vec2.type';

/**
 *  Returns whether or not the vec2's have exactly the same elements in the same position.
 */
export function vec2_equals(
  a: readonly_vec2,
  b: readonly_vec2,
): boolean {
  return (
       (a[0] === b[0])
    && (a[1] === b[1])
  );
}
