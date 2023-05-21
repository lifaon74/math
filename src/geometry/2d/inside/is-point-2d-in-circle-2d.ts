export function is_point_2d_in_circle_2d(
  // point
  p_x: number,
  p_y: number,
  // circle
  // center
  c_x: number,
  c_y: number,
  // radius
  radius: number,
): boolean {
  const d_x: number = c_x - p_x;
  const d_y: number = c_y - p_y;
  return (d_x * d_x) + (d_y * d_y) <= (radius * radius);
}
