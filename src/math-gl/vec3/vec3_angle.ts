/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec3 } from './vec3.type';
import { vec3_dot } from './vec3_dot';
import { vec3_squared_length } from './vec3_squared_length';
import { math_sqrt } from '../../others/math_sqrt';
import { math_acos } from '../../others/math_acos';
import { math_min } from '../../others/math_min';
import { math_max } from '../../others/math_max';

/**
 * Returns the angle between two vec3's.
 */
export function vec3_angle(
  a: readonly_vec3,
  b: readonly_vec3,
): number {
  const mag: number = math_sqrt(vec3_squared_length(a) * vec3_squared_length(b));
  const cosine: number = mag && vec3_dot(a, b) / mag;
  return math_acos(math_min(math_max(cosine, -1), 1));
}
