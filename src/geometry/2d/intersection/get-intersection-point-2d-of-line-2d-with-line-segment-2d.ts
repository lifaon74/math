import { vec2 } from '../../../math-gl/vec2/vec2.type';
import { is_valid_point, make_point_invalid } from '../../functions/is-valid-point';
import { is_point_2d_in_rectangle_2d } from '../inside/is-point-2d-in-rectangle-2d';
import { get_intersection_point_2d_of_line_2d_with_line_2d } from './get-intersection-point-2d-of-line-2d-with-line-2d';

/**
 * Computes the intersection point of a line and a line segments, written in 'out'
 *  - if they don't intersect, out[0] = NaN
 *  @returns true if the segments are intersecting
 */
export function get_intersection_point_2d_of_line_2d_with_line_segment_2d(
  out: vec2,
  // line AB
  // point A
  a_x: number,
  a_y: number,
  // point B
  b_x: number,
  b_y: number,
  // line segment CD
  // point C
  c_x: number,
  c_y: number,
  // point D
  d_x: number,
  d_y: number,
): boolean {
  const intersecting: boolean = get_intersection_point_2d_of_line_2d_with_line_2d(
    out,
    a_x,
    a_y,
    b_x,
    b_y,
    c_x,
    c_y,
    d_x,
    d_y,
  );

  if (intersecting) {
    if (is_valid_point(out)) {
      if (
        is_point_2d_in_rectangle_2d(
          out[0],
          out[1],
          c_x,
          c_y,
          d_x,
          d_y,
        )
      ) {
        return true;
      } else {
        make_point_invalid(out);
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
