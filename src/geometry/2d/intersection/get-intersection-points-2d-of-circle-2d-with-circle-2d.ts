import { vec2 } from '../../../math-gl/vec2/vec2.type';
import { math_sqrt } from '../../../others/math_sqrt';
import { INVALID_POINT, make_point_invalid } from '../../functions/is-valid-point';

// https://doubleroot.in/lessons/circle/intersection-line-circle-1/#:~:text=if%20the%20distance%20is%20less,lie%20completely%20outside%20the%20circle.

/**
 * Computes the intersection points of two a circles, written in 'outA' and 'outB'
 *  - if they don't cross, outA[0] AND outB[0] = NaN
 *  - if they are tangent, outB[0] = NaN
 *  @returns true if the circles are intersecting
 */
export function get_intersection_points_2d_of_circle_2d_with_circle_2d(
  outA: vec2,
  outB: vec2,
  // circle A
  // center
  circle_a_center_x: number,
  circle_a_center_y: number,
  // radius
  circle_a_radius: number,
  // circle B
  // center
  circle_b_center_x: number,
  circle_b_center_y: number,
  // radius
  circle_b_radius: number,
): boolean {
  make_point_invalid(outA);
  make_point_invalid(outB);

  if (
    (circle_a_center_x === circle_b_center_x)
    && (circle_a_center_y === circle_b_center_y)
    && (circle_a_radius === circle_b_radius)
  ) {
    return true;
  } else {
    const ab_x: number = circle_b_center_x - circle_a_center_x;
    const ab_y: number = circle_b_center_y - circle_a_center_y;
    const r: number = circle_a_radius + circle_b_radius;

    const circle_a_radius2: number = circle_a_radius * circle_a_radius;
    const circle_a_center_x2: number = circle_a_center_x * circle_a_center_x;

    const intersecting: boolean = (ab_x * ab_x) + (ab_y * ab_y) <= (r * r);

    if (intersecting) {
      const _a: number = 2 * ab_x;
      const _b: number = 2 * ab_y;
      const _c: number = circle_a_center_x2
        + (circle_a_center_y * circle_a_center_y)
        - (circle_b_center_x * circle_b_center_x)
        - (circle_b_center_y * circle_b_center_y)
        - circle_a_radius2
        + (circle_b_radius * circle_b_radius)
      ;

      if (_b === 0) {
        const _g: number = -_c / _a;
        const _h: number = _g - circle_a_center_x;

        const a: number = 1;
        const b: number = -2 * circle_a_center_y;
        const c: number = (_h * _h)
          + (circle_a_center_y * circle_a_center_y)
          - circle_a_radius2
        ;

        const d: number = (b * b) - (4 * a * c);

        if (d >= 0) { // AB is intersecting with the circle
          const sqrt_d: number = math_sqrt(d);
          const p_0_y: number = (-b - sqrt_d) / (2 * a);

          outA[0] = (a * p_0_y * p_0_y) + (b * p_0_y) + c;
          outA[1] = p_0_y;

          if (sqrt_d !== 0) {
            const p_1_y: number = (-b + sqrt_d) / (2 * a);
            outB[0] = (a * p_1_y * p_1_y) + (b * p_1_y) + c;
            outB[1] = p_1_y;
          }

          return true;
        } else {
          return false;
        }
      } else {
        const _d: number = -_a / _b;
        const _e: number = -_c / _b;
        const _f: number = _e - circle_a_center_y;

        const a: number = 1 + (_d * _d);
        const b: number = 2 * ((_d * _f) - circle_a_center_x);
        const c: number = circle_a_center_x2
          + (_f * _f)
          - circle_a_radius2
        ;

        const d: number = (b * b) - (4 * a * c);

        if (d >= 0) { // AB is intersecting with the circle
          const sqrt_d: number = math_sqrt(d);
          const p_0_x: number = (-b - sqrt_d) / (2 * a);

          outA[0] = p_0_x;
          outA[1] = (a * p_0_x * p_0_x) + (b * p_0_x) + c;

          if (sqrt_d !== 0) {
            const p_1_x: number = (-b + sqrt_d) / (2 * a);
            outB[0] = p_1_x;
            outB[1] = (a * p_1_x * p_1_x) + (b * p_1_x) + c;
          }

          return true;
        } else {
          return false;
        }

      }

    } else {
      return false;
    }
  }

}

/*
  Algorithm:
    - circle equation: x² + y² = r², with center: (x - Cx)² + (y - Cy)² = r² (2)
    - solving 2nd polynomial: delta = b² - 4ac , x = (-b +- srqt(delta)) / 2a
 */
