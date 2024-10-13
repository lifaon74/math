import { math_max } from './math_max.js';
import { math_min } from './math_min.js';

export function math_clamp(
  value: number,
  min: number,
  max: number,
): number {
  return math_min(math_max(value, min), max);
}
