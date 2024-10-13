import { vec2 } from '../../../math-gl/vec2/vec2.type.js';
import { is_angle_in_arc } from '../../angles/is_angle_in_arc.js';
import { normalized_arc_tan2 } from '../../angles/normalized-atan2.js';
import { is_valid_point, make_point_invalid } from '../../functions/is-valid-point.js';
import { get_intersection_points_2d_of_circle_2d_with_arc_2d } from './get-intersection-points-2d-of-circle-2d-with-arc-2d.js';

export function get_intersection_points_2d_of_arc_2d_with_arc_2d(
  outA: vec2,
  outB: vec2,
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
  const intersecting: boolean = get_intersection_points_2d_of_circle_2d_with_arc_2d(
    outA,
    outB,
    arc_a_center_x,
    arc_a_center_y,
    arc_a_radius,
    arc_b_center_x,
    arc_b_center_y,
    arc_b_radius,
    arc_b_start_angle,
    arc_b_end_angle,
  );

  if (intersecting) {
    if (is_valid_point(outA)) {
      const angleA: number = normalized_arc_tan2(outA[1] - arc_a_center_y, outA[0] - arc_a_center_x);
      if (!is_angle_in_arc(angleA, arc_a_start_angle, arc_a_end_angle)) {
        make_point_invalid(outA);
      }
    }
    if (is_valid_point(outB)) {
      const angleB: number = normalized_arc_tan2(outB[1] - arc_a_center_y, outB[0] - arc_a_center_x);
      if (!is_angle_in_arc(angleB, arc_a_start_angle, arc_a_end_angle)) {
        make_point_invalid(outB);
      }
    }
    return is_valid_point(outA)
      || is_valid_point(outB);
  } else {
    return false;
  }
}

