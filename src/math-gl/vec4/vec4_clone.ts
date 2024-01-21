/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4, readonly_vec4 } from './vec4.type';
import { vec4_copy } from './vec4_copy';
import { vec4_create } from './vec4_create';

export function vec4_clone<GType extends ArrayLike<number>>(
  a: readonly_vec4<GType>
): vec4<GType> {
  return vec4_copy<GType>(
    vec4_create<GType>(a.constructor as any),
    a,
  );
}
