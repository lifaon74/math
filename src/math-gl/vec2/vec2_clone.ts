import { vec2, readonly_vec2 } from './vec2.type';
import { vec2_copy } from './vec2_copy';
import { vec2_create } from './vec2_create';

export function vec2_clone(
  a: readonly_vec2,
): vec2 {
  return vec2_copy(vec2_create(), a);
}


