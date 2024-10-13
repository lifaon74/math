import { float_to_string } from '../float/float_to_string.js';
import { math_max } from '../others/math_max.js';

export function matrix_to_string(
  matrix: ArrayLike<number>,
  rowCount: number,
  columnCount: number,
  precision: number = 5,
): string {
  const _matrix: string[] = Array.from(matrix, (value: number) => {
    return float_to_string(value, precision);
  });
  // const maxLength: number = _matrix.reduce((maxLength: number, value: string) => math_max(maxLength, value.length), 0);
  const maxLengths: number[] = Array.from({ length: columnCount }, (v: any, column: number) => {
    return Array.from({ length: rowCount }, (v: any, i: number) => i).reduce((maxLength: number, row: number) => {
      return math_max(maxLength, _matrix[rowCount * column + row].length);
    }, 0);
  });

  return Array.from({ length: rowCount }, (v: any, row: number) => {
    return Array.from({ length: columnCount }, (v: any, column: number) => _matrix[rowCount * column + row].padStart(maxLengths[column], ' ')).join('  ');
  }).join('\n');
}
