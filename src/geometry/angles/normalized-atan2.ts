import { math_atan2 } from '../../others/math_atan2';
import { MATH_PHI } from './phi';

/**
 * Math.atan2 but with angle in the range [0, PHI[
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
 */
export function normalized_arc_tan2(y: number, x: number) {
  return (math_atan2(y, x) + MATH_PHI) % MATH_PHI;
}

