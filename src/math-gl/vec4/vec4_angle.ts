/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { readonly_vec4 } from './vec4.type';
import { vec4_dot } from './vec4_dot';
import { vec4_squared_length } from './vec4_squared_length';
import { math_sqrt } from '../../others/math_sqrt';
import { math_acos } from '../../others/math_acos';
import { math_min } from '../../others/math_min';
import { math_max } from '../../others/math_max';

export function vec4_angle(
  a: readonly_vec4,
  b: readonly_vec4,
): number {
  const mag: number = math_sqrt(vec4_squared_length(a) * vec4_squared_length(b));
  const cosine: number = mag && vec4_dot(a, b) / mag;
  return math_acos(math_min(math_max(cosine, -1), 1));
}
