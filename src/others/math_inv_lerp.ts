export function math_inv_lerp(
  value: number,
  start: number,
  end: number,
): number {
  return (value - start) / (end - start);
}
