/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec3 } from './vec3.type';
import { vec3_squared_distance } from './vec3_squared_distance';
import { math_sqrt } from '../../others/math_sqrt';

/**
 * Calculates the euclidian distance between two vec3's.
 */
export function vec3_distance(
  a: readonly_vec3,
  b: readonly_vec3,
): number {
  return math_sqrt(vec3_squared_distance(a, b));
}
