import { vec2 } from '../../../math-gl/vec2/vec2.type.js';
import { is_valid_point, make_point_invalid } from '../../functions/is-valid-point.js';
import { is_point_2d_in_rectangle_2d } from '../inside/is-point-2d-in-rectangle-2d.js';
import { get_intersection_points_2d_of_line_2d_with_arc_2d } from './get-intersection-points-2d-of-line-2d-with-arc-2d.js';

/**
 * Computes the intersection point of 2 line segments, written in 'out'
 *  - if the line segments doesn't intersect, out[0] = NaN
 *  @returns true if the segments are intersecting
 */
export function get_intersection_point_2d_of_line_segment_2d_with_arc_2d(
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
  const intersecting: boolean = get_intersection_points_2d_of_line_2d_with_arc_2d(
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

  if (intersecting) {
    if (is_valid_point(outA)) {
      if (
        !is_point_2d_in_rectangle_2d(
          outA[0],
          outA[1],
          a_x,
          a_y,
          b_x,
          b_y,
        )
      ) {
        make_point_invalid(outA);
      }
    }

    if (is_valid_point(outB)) {
      if (
        !is_point_2d_in_rectangle_2d(
          outB[0],
          outB[1],
          a_x,
          a_y,
          b_x,
          b_y,
        )
      ) {
        make_point_invalid(outB);
      }
    }
    return is_valid_point(outA)
      || is_valid_point(outB);
  } else {
    return false;
  }
}
