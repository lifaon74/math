import { math_max } from './math_max';
import { math_min } from './math_min';

export function math_clamp(
  value: number,
  min: number,
  max: number,
): number {
  return math_min(math_max(value, min), max);
}
