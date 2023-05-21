import { vec2 } from '../../../../math-gl/vec2/vec2.type';
import { vec2_create } from '../../../../math-gl/vec2/vec2_create';
import { get_intersection_points_2d_of_arc_2d_with_arc_2d } from '../get-intersection-points-2d-of-arc-2d-with-arc-2d';

const outA: vec2 = vec2_create();
const outB: vec2 = vec2_create();


export function is_arc_2d_intersecting_with_arc_2d(
  // arc A
  // center
  arc_a_center_x: number,
  arc_a_center_y: number,
  // radius
  arc_a_radius: number,
  // angles
  arc_a_start_angle: number, // [0, PHI[
  arc_a_end_angle: number, // [0, PHI[

  // arc B
  // center
  arc_b_center_x: number,
  arc_b_center_y: number,
  // radius
  arc_b_radius: number,
  // angles
  arc_b_start_angle: number, // [0, PHI[
  arc_b_end_angle: number, // [0, PHI[
): boolean {
  return get_intersection_points_2d_of_arc_2d_with_arc_2d(
    outA,
    outB,
    arc_a_center_x,
    arc_a_center_y,
    arc_a_radius,
    arc_a_start_angle,
    arc_a_end_angle,
    arc_b_center_x,
    arc_b_center_y,
    arc_b_radius,
    arc_b_start_angle,
    arc_b_end_angle,
  );
}
