/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2, readonly_vec2 } from './vec2.type.js';
import { vec2_copy } from './vec2_copy.js';
import { vec2_create } from './vec2_create.js';

/**
 * Creates a new vec2 initialized with values from an existing one.
 */
export function vec2_clone<GType extends ArrayLike<number>>(
  a: readonly_vec2<GType>
): vec2<GType> {
  return vec2_copy<GType>(
    vec2_create<GType>(a.constructor as any),
    a,
  );
}
