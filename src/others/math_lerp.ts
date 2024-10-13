/**
 * Linear interpolation
 */
export function math_lerp(
  value: number,
  start: number,
  end: number,
): number {
  return ((1 - value) * start) + (value * end);
}


