export function are_line_segments_intersecting_1d(
  // segment AB
  a: number,
  b: number,
  // segment CD
  c: number,
  d: number,
): boolean {
  return (a <= b)
    ? (
      (c <= d)
        ? are_sorted_line_segments_intersecting_1d(a, b, c, d)
        : are_sorted_line_segments_intersecting_1d(a, b, d, c)
    )
    : (
      (c <= d)
        ? are_sorted_line_segments_intersecting_1d(b, a, c, d)
        : are_sorted_line_segments_intersecting_1d(b, a, d, c)
    );
}

export function are_sorted_line_segments_intersecting_1d(
  // segment AB (A <= B)
  a: number,
  b: number,
  // segment CD (C <= D)
  c: number,
  d: number,
): boolean {
  return (c <= b) && (d >= a);
}
