import { MATH_PHI } from './phi.js';

/**
 * Clamps the angle between [0, PHI[
 */
export function normalize_angle(angle: number) {
  return ((angle % MATH_PHI) + MATH_PHI) % MATH_PHI;
}

