/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2 } from './vec2.type.js';

/**
 *  Creates a new vec2 initialized with the given values.
 */
export function vec2_from_values(
  x: number,
  y: number,
): vec2;
export function vec2_from_values<GType extends ArrayLike<number>>(
  x: number,
  y: number,
  ctor: new(size: number) => GType,
): vec2<GType>;
export function vec2_from_values(
  x: number,
  y: number,
  ctor: any = Float32Array,
): vec2 {
  const out: vec2 = new ctor(2);
  out[0] = x;
  out[1] = y;
  return out;
}


import { f32 } from '../../types/numbers/f32/f32.type.js';

export function vec2_from_values_f32(
  x: f32,
  y: f32,
): vec2<Float32Array> {
  return vec2_from_values<Float32Array>(
    x,
    y,
    Float32Array,
  );
}


import { f64 } from '../../types/numbers/f64.type.js';

export function vec2_from_values_f64(
  x: f64,
  y: f64,
): vec2<Float64Array> {
  return vec2_from_values<Float64Array>(
    x,
    y,
    Float64Array,
  );
}


import { u8 } from '../../types/numbers/u8/u8.type.js';

export function vec2_from_values_u8(
  x: u8,
  y: u8,
): vec2<Uint8Array> {
  return vec2_from_values<Uint8Array>(
    x,
    y,
    Uint8Array,
  );
}


import { u16 } from '../../types/numbers/u16/u16.type.js';

export function vec2_from_values_u16(
  x: u16,
  y: u16,
): vec2<Uint16Array> {
  return vec2_from_values<Uint16Array>(
    x,
    y,
    Uint16Array,
  );
}


import { u32 } from '../../types/numbers/u32/u32.type.js';

export function vec2_from_values_u32(
  x: u32,
  y: u32,
): vec2<Uint32Array> {
  return vec2_from_values<Uint32Array>(
    x,
    y,
    Uint32Array,
  );
}


import { i8 } from '../../types/numbers/i8.type.js';

export function vec2_from_values_i8(
  x: i8,
  y: i8,
): vec2<Int8Array> {
  return vec2_from_values<Int8Array>(
    x,
    y,
    Int8Array,
  );
}


import { i16 } from '../../types/numbers/i16.type.js';

export function vec2_from_values_i16(
  x: i16,
  y: i16,
): vec2<Int16Array> {
  return vec2_from_values<Int16Array>(
    x,
    y,
    Int16Array,
  );
}


import { i32 } from '../../types/numbers/i32.type.js';

export function vec2_from_values_i32(
  x: i32,
  y: i32,
): vec2<Int32Array> {
  return vec2_from_values<Int32Array>(
    x,
    y,
    Int32Array,
  );
}

