/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec3 } from './vec3.type.js';

/**
 *  Returns whether or not the vec3's have exactly the same elements in the same position.
 */
export function vec3_equals(
  a: readonly_vec3,
  b: readonly_vec3,
): boolean {
  return (
       (a[0] === b[0])
    && (a[1] === b[1])
    && (a[2] === b[2])
  );
}
