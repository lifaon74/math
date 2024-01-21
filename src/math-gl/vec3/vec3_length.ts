/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec3 } from './vec3.type';
import { math_hypot } from '../../others/math_hypot';

export function vec3_length(
  a: readonly_vec3,
): number {
  return math_hypot(
    a[0],
    a[1],
    a[2],
  );
}
