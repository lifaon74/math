/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec2 } from './vec2.type.js';
import { vec2_squared_distance } from './vec2_squared_distance.js';
import { math_sqrt } from '../../others/math_sqrt.js';

/**
 * Calculates the euclidian distance between two vec2's.
 */
export function vec2_distance(
  a: readonly_vec2,
  b: readonly_vec2,
): number {
  return math_sqrt(vec2_squared_distance(a, b));
}
