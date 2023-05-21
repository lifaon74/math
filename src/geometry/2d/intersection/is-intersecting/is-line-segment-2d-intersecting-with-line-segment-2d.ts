import { vec2 } from '../../../../math-gl/vec2/vec2.type';
import { vec2_create } from '../../../../math-gl/vec2/vec2_create';
import {
  get_intersection_point_2d_of_line_segment_2d_with_line_segment_2d,
} from '../get-intersection-point-2d-of-line-segment-2d-with-line-segment-2d';

const out: vec2 = vec2_create();

export function is_line_segment_2d_intersecting_with_line_segment_2d(
  // line AB
  // point A
  a_x: number,
  a_y: number,
  // point B
  b_x: number,
  b_y: number,
  // line CD
  // point C
  c_x: number,
  c_y: number,
  // point D
  d_x: number,
  d_y: number,
): boolean {
  return get_intersection_point_2d_of_line_segment_2d_with_line_segment_2d(
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
}
