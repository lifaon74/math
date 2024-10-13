import { vec2 } from '../../../../math-gl/vec2/vec2.type.js';
import { vec2_create } from '../../../../math-gl/vec2/vec2_create.js';
import { get_intersection_points_2d_of_line_2d_with_arc_2d } from '../get-intersection-points-2d-of-line-2d-with-arc-2d.js';

const outA: vec2 = vec2_create();
const outB: vec2 = vec2_create();

export function is_line_segment_2d_intersecting_with_arc_2d(
  // segment AB
  // point A
  a_x: number,
  a_y: number,
  // point B
  b_x: number,
  b_y: number,
  // arc
  // center
  arc_center_x: number,
  arc_center_y: number,
  // radius
  arc_radius: number,
  // angles
  arc_start_angle: number, // [0, PHI[
  arc_end_angle: number, // [0, PHI[
): boolean {
  return get_intersection_points_2d_of_line_2d_with_arc_2d(
    outA,
    outB,
    a_x,
    a_y,
    b_x,
    b_y,
    arc_center_x,
    arc_center_y,
    arc_radius,
    arc_start_angle,
    arc_end_angle,
  );
}
