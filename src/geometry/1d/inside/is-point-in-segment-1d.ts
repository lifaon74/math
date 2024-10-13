/**
 * Return true if the point 'p' is in the segment formed by 'a' and 'b',
 * EXPECTS: a <= b
 */
export function is_point_in_sorted_segment_1d(
  // point
  p: number,
  // segment AB (a <= B)
  a: number,
  b: number,
): boolean {
  return (a <= p) && (p <= b);
}

/**
 * Return true if the point 'p' is in the segment formed by 'a' and 'b'
 */
export function is_point_in_segment_1d(
  // point
  p: number,
  // segment AB
  a: number,
  b: number,
): boolean {
  return (a <= b)
    ? is_point_in_sorted_segment_1d(p, a, b)
    : is_point_in_sorted_segment_1d(p, b, a);
}
