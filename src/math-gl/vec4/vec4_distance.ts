/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec4 } from './vec4.type.js';
import { vec4_squared_distance } from './vec4_squared_distance.js';
import { math_sqrt } from '../../others/math_sqrt.js';

/**
 * Calculates the euclidian distance between two vec4's.
 */
export function vec4_distance(
  a: readonly_vec4,
  b: readonly_vec4,
): number {
  return math_sqrt(vec4_squared_distance(a, b));
}
