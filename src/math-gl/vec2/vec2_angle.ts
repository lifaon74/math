/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec2 } from './vec2.type.js';
import { vec2_dot } from './vec2_dot.js';
import { vec2_squared_length } from './vec2_squared_length.js';
import { math_sqrt } from '../../others/math_sqrt.js';
import { math_acos } from '../../others/math_acos.js';
import { math_min } from '../../others/math_min.js';
import { math_max } from '../../others/math_max.js';

/**
 * Returns the angle between two vec2's.
 */
export function vec2_angle(
  a: readonly_vec2,
  b: readonly_vec2,
): number {
  const mag: number = math_sqrt(vec2_squared_length(a) * vec2_squared_length(b));
  const cosine: number = mag && vec2_dot(a, b) / mag;
  return math_acos(math_min(math_max(cosine, -1), 1));
}
