import { readonly_vec2 } from './vec2.type';

export function vec2_equals(
  a: readonly_vec2,
  b: readonly_vec2,
): boolean {
  return (a[0] === b[0])
    && (a[1] === b[1])
    ;
}
