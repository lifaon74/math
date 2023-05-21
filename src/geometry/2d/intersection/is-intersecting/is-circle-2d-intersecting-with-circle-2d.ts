export function is_circle_2d_intersecting_with_circle_2d(
  // circle A
  // center
  circle_a_center_x: number,
  circle_a_center_y: number,
  // radius
  circle_a_radius: number,
  // circle A
  // center
  circle_b_center_x: number,
  circle_b_center_y: number,
  // radius
  circle_b_radius: number,
): boolean {
  const ab_x: number = circle_b_center_x - circle_a_center_x;
  const ab_y: number = circle_b_center_y - circle_a_center_y;
  const r: number = circle_a_radius + circle_b_radius;

  return (ab_x * ab_x) + (ab_y * ab_y) <= (r * r);
}
