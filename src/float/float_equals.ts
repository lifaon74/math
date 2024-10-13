import { MATH_EPSILON } from './epsilon.js';
import { math_abs } from '../others/math_abs.js';
import { math_max } from '../others/math_max.js';

export function float_equals(
  a: number,
  b: number,
  epsilon: number = MATH_EPSILON,
): boolean {
  return math_abs(a - b) <= (epsilon * math_max(1.0, math_abs(a), math_abs(b)));
}
