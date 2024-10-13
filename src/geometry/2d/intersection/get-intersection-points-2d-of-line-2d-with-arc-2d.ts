import { vec2 } from '../../../math-gl/vec2/vec2.type.js';
import { is_angle_in_arc } from '../../angles/is_angle_in_arc.js';
import { normalized_arc_tan2 } from '../../angles/normalized-atan2.js';
import { is_valid_point, make_point_invalid } from '../../functions/is-valid-point.js';
import { get_intersection_points_2d_of_line_2d_with_circle_2d } from './get-intersection-points-2d-of-line-2d-with-circle-2d.js';

/**
 * Returns the intersection points of a line and an arc in 'outA' and 'outB'
 *  - if the line doesn't cross the arc, outA[0] AND outB[0] = NaN
 *  - if the line crosses the arc only once, outA[0] OR outB[0] = NaN
 *   @returns true if the line is intersecting with the arc
 */
export function get_intersection_points_2d_of_line_2d_with_arc_2d(
  outA: vec2,
  outB: vec2,
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
  const intersecting: boolean = get_intersection_points_2d_of_line_2d_with_circle_2d(
    outA,
    outB,
    a_x,
    a_y,
    b_x,
    b_y,
    arc_center_x,
    arc_center_y,
    arc_radius,
  );

  if (intersecting) {
    if (is_valid_point(outA)) {
      const angleA: number = normalized_arc_tan2(outA[1] - arc_center_y, outA[0] - arc_center_x);
      if (!is_angle_in_arc(angleA, arc_start_angle, arc_end_angle)) {
        make_point_invalid(outA);
      }
    }
    if (is_valid_point(outB)) {
      const angleB: number = normalized_arc_tan2(outB[1] - arc_center_y, outB[0] - arc_center_x);
      if (!is_angle_in_arc(angleB, arc_start_angle, arc_end_angle)) {
        make_point_invalid(outB);
      }
    }
    return is_valid_point(outA)
      || is_valid_point(outB);
  } else {
    return false;
  }
}
