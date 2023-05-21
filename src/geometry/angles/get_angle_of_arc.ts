import { MATH_PHI } from './phi';

export function get_angle_of_arc(
  arc_start_angle: number, // [0, PHI[
  arc_end_angle: number, // [0, PHI[
): number {
  return (arc_start_angle < arc_end_angle)
    ? (arc_end_angle - arc_start_angle)
    : (MATH_PHI + arc_end_angle - arc_start_angle);
}
