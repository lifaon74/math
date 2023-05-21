export const INVALID_POINT = Number.NaN;

export type IPoint = [number, ...number[]] | Float32Array;
export type IReadonlyPoint = readonly [number, ...number[]] | Float32Array;

export function make_point_invalid(
  point: IPoint,
): void {
  point[0] = INVALID_POINT;
}

export function is_valid_point(
  point: IReadonlyPoint,
): boolean {
  return !is_invalid_point(point);
}

export function is_invalid_point(
  point: IReadonlyPoint,
): boolean {
  return Number.isNaN(point[0]);
}

