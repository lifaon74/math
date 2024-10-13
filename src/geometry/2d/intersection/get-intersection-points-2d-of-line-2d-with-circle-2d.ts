import { vec2 } from '../../../math-gl/vec2/vec2.type.js';
import { math_abs } from '../../../others/math_abs.js';
import { math_sqrt } from '../../../others/math_sqrt.js';
import { make_point_invalid } from '../../functions/is-valid-point.js';

// https://doubleroot.in/lessons/circle/intersection-line-circle-1/#:~:text=if%20the%20distance%20is%20less,lie%20completely%20outside%20the%20circle.

/**
 * Computes the intersection points of a line and a circle, written in 'outA' and 'outB'
 *  - if the line doesn't cross the circle, outA[0] AND outB[0] = NaN
 *  - if the line is tangent to the circle, outB[0] = NaN
 *  @returns true if the line is intersecting with the circle
 */
export function get_intersection_points_2d_of_line_2d_with_circle_2d(
  outA: vec2,
  outB: vec2,
  // segment AB
  // point A
  a_x: number,
  a_y: number,
  // point B
  b_x: number,
  b_y: number,
  // circle
  // center
  circle_center_x: number,
  circle_center_y: number,
  // radius
  circle_radius: number,
): boolean {
  make_point_invalid(outA);
  make_point_invalid(outB);

  const d_ab_x: number = b_x - a_x;

  if (d_ab_x === 0) { // AB is vertical
    const d_ca_x: number = a_x - circle_center_x;

    if (math_abs(d_ca_x) <= circle_radius) { // line AB is intersecting with the circle
      // const dy: number = Math.sqrt(Math.pow(circle_radius, 2) - Math.pow(d_ca_x, 2));
      const dy: number = math_sqrt((circle_radius * circle_radius) - (d_ca_x * d_ca_x));

      outA[0] = a_x;
      outA[1] = circle_center_y - dy;

      if (dy !== 0) {
        outB[0] = a_x;
        outB[1] = circle_center_y + dy;
      }

      return true;
    } else {
      return false;
    }
  } else {
    const ab_a: number = (b_y - a_y) / d_ab_x;
    const ab_b: number = a_y - (ab_a * a_x);

    const j: number = ab_b - circle_center_y;

    // const a: number = Math.pow(ab_a, 2) + 1;
    const a: number = (ab_a * ab_a) + 1;
    const b: number = 2 * ((ab_a * (ab_b - circle_center_y)) - circle_center_x);
    // const c: number = Math.pow(circle_center_x, 2) + Math.pow(ab_b - circle_center_y, 2) - Math.pow(circle_radius, 2);
    const c: number = (circle_center_x * circle_center_x) + (j * j) - (circle_radius * circle_radius);

    // const d: number = Math.pow(b, 2) - (4 * a * c);
    const d: number = (b * b) - (4 * a * c);

    if (d >= 0) { // AB is intersecting with the circle
      const sqrt_d: number = math_sqrt(d);
      outA[0] = (-b - sqrt_d) / (2 * a);
      outA[1] = (outA[0] * ab_a) + ab_b;

      if (sqrt_d !== 0) {
        outB[0] = (-b + sqrt_d) / (2 * a);
        outB[1] = (outB[0] * ab_a) + ab_b;
      }

      return true;
    } else {
      return false;
    }
  }
}

/*
  Algorithm:
    - line equation: y = ax + b
    - circle equation: x² + y² = r², with center: (x - Cx)² + (y - Cy)² = r² (2)
    - solving 2nd polynomial: delta = b² - 4ac , x = (-b +- srqt(delta)) / 2a
    - find a and b of the line
    - infer y from y = ax + b
 */
