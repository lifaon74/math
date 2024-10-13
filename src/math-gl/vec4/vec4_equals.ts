/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec4 } from './vec4.type.js';

/**
 *  Returns whether or not the vec4's have exactly the same elements in the same position.
 */
export function vec4_equals(
  a: readonly_vec4,
  b: readonly_vec4,
): boolean {
  return (
       (a[0] === b[0])
    && (a[1] === b[1])
    && (a[2] === b[2])
    && (a[3] === b[3])
  );
}
