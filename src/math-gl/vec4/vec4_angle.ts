/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec4 } from './vec4.type.js';
import { vec4_dot } from './vec4_dot.js';
import { vec4_squared_length } from './vec4_squared_length.js';
import { math_sqrt } from '../../others/math_sqrt.js';
import { math_acos } from '../../others/math_acos.js';
import { math_min } from '../../others/math_min.js';
import { math_max } from '../../others/math_max.js';

/**
 * Returns the angle between two vec4's.
 */
export function vec4_angle(
  a: readonly_vec4,
  b: readonly_vec4,
): number {
  const mag: number = math_sqrt(vec4_squared_length(a) * vec4_squared_length(b));
  const cosine: number = mag && vec4_dot(a, b) / mag;
  return math_acos(math_min(math_max(cosine, -1), 1));
}
