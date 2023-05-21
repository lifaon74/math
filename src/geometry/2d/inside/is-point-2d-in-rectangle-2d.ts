import { is_point_in_segment_1d } from '../../1d/inside/is-point-in-segment-1d';

/**
 * Return true if the point is in the rectangle formed by pointA and pointB
 */
export function is_point_2d_in_rectangle_2d(
  // point
  p_x: number,
  p_y: number,
  // rectangle
  // point A
  a_x: number,
  a_y: number,
  // point B
  b_x: number,
  b_y: number,
): boolean {
  return is_point_in_segment_1d(p_x, a_x, b_x)
    && is_point_in_segment_1d(p_y, a_y, b_y);
}

