
/**
 * Returns true if 'angle' is between 'arc_start_angle' and 'arc_end_angle' (anticlockwise)
 */
export function is_angle_in_arc(
  angle: number, // [0, PHI[
  arc_start_angle: number, // [0, PHI[
  arc_end_angle: number, // [0, PHI[
): boolean {
  return (arc_end_angle < arc_start_angle)
    ? ((angle >= arc_start_angle) || (angle <= arc_end_angle))
    : ((angle >= arc_start_angle) && (angle <= arc_end_angle));
}
