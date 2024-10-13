import { vec2 } from '../../../math-gl/vec2/vec2.type.js';
import { make_point_invalid } from '../../functions/is-valid-point.js';

/**
 * Computes the intersection point of 2 lines (defined by 2 line segments), written in 'out'
 *  - if the lines are parallel => out[0] = NaN
 * @returns true if the lines are intersecting (not parallel or having the same 'a' and 'b')
 */
export function get_intersection_point_2d_of_line_2d_with_line_2d(
  out: vec2,
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
  make_point_invalid(out);

  const d_ab_x: number = b_x - a_x; // distance AB on x axis
  const d_cd_x: number = d_x - c_x; // distance CD on x axis

  if (d_ab_x === 0) { // AB is vertical
    if (d_cd_x === 0) { // CD is vertical => both parallel
      return a_x === c_x;
    } else {
      out[0] = a_x; // or b_x
      out[1] = (((d_y - c_y) * (a_x - c_x)) / d_cd_x) + c_y;
      return true;
    }
  } else if (d_cd_x === 0) { // CD is vertical and AB is not parallel to CD
    out[0] = c_x; // or d_x
    out[1] = (((b_y - a_y) * (c_x - a_x)) / d_ab_x) + a_y;
    return true;
  } else { // none of AB or CD is vertical
    const ab_a: number = (b_y - a_y) / d_ab_x; // compute 'a' of AB line
    const cd_a: number = (d_y - c_y) / d_cd_x; // compute 'a' of CD line
    const ab_b: number = a_y - (ab_a * a_x); // compute 'b' of AB line
    const cd_b: number = c_y - (cd_a * c_x); // compute 'b' of CD line

    if (ab_a === cd_a) { // AB and CD are parallel
      return ab_b === cd_b;
    } else {
      out[0] = (cd_b - ab_b) / (ab_a - cd_a);
      out[1] = ab_a * out[0] + ab_b;
      return true;
    }
  }
}

/*
  Algorithm:
    - line equation: y = ax + b
    - find a and b for both lines (a1, b1, a2, b2)
    - resolve a1 * x + b1 = a2 * x + b2 to find x
    - infer y from y = a1 * x + b1
 */
