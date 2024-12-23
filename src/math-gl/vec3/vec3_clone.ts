/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3, readonly_vec3 } from './vec3.type.js';
import { vec3_copy } from './vec3_copy.js';
import { vec3_create } from './vec3_create.js';

/**
 * Creates a new vec3 initialized with values from an existing one.
 */
export function vec3_clone<GType extends ArrayLike<number>>(
  a: readonly_vec3<GType>
): vec3<GType> {
  return vec3_copy<GType>(
    vec3_create<GType>(a.constructor as any),
    a,
  );
}
