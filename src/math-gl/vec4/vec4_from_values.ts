/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4 } from './vec4.type';

/**
 *  Creates a new vec4 initialized with the given values.
 */
export function vec4_from_values(
  x: number,
  y: number,
  z: number,
  w: number,
): vec4;
export function vec4_from_values<GType extends ArrayLike<number>>(
  x: number,
  y: number,
  z: number,
  w: number,
  ctor: new(size: number) => GType,
): vec4<GType>;
export function vec4_from_values(
  x: number,
  y: number,
  z: number,
  w: number,
  ctor: any = Float32Array,
): vec4 {
  const out: vec4 = new ctor(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}


import { f32 } from '../../types/numbers/f32/f32.type';

export function vec4_from_values_f32(
  x: f32,
  y: f32,
  z: f32,
  w: f32,
): vec4<Float32Array> {
  return vec4_from_values<Float32Array>(
    x,
    y,
    z,
    w,
    Float32Array,
  );
}


import { f64 } from '../../types/numbers/f64.type';

export function vec4_from_values_f64(
  x: f64,
  y: f64,
  z: f64,
  w: f64,
): vec4<Float64Array> {
  return vec4_from_values<Float64Array>(
    x,
    y,
    z,
    w,
    Float64Array,
  );
}


import { u8 } from '../../types/numbers/u8/u8.type';

export function vec4_from_values_u8(
  x: u8,
  y: u8,
  z: u8,
  w: u8,
): vec4<Uint8Array> {
  return vec4_from_values<Uint8Array>(
    x,
    y,
    z,
    w,
    Uint8Array,
  );
}


import { u16 } from '../../types/numbers/u16/u16.type';

export function vec4_from_values_u16(
  x: u16,
  y: u16,
  z: u16,
  w: u16,
): vec4<Uint16Array> {
  return vec4_from_values<Uint16Array>(
    x,
    y,
    z,
    w,
    Uint16Array,
  );
}


import { u32 } from '../../types/numbers/u32/u32.type';

export function vec4_from_values_u32(
  x: u32,
  y: u32,
  z: u32,
  w: u32,
): vec4<Uint32Array> {
  return vec4_from_values<Uint32Array>(
    x,
    y,
    z,
    w,
    Uint32Array,
  );
}


import { i8 } from '../../types/numbers/i8.type';

export function vec4_from_values_i8(
  x: i8,
  y: i8,
  z: i8,
  w: i8,
): vec4<Int8Array> {
  return vec4_from_values<Int8Array>(
    x,
    y,
    z,
    w,
    Int8Array,
  );
}


import { i16 } from '../../types/numbers/i16.type';

export function vec4_from_values_i16(
  x: i16,
  y: i16,
  z: i16,
  w: i16,
): vec4<Int16Array> {
  return vec4_from_values<Int16Array>(
    x,
    y,
    z,
    w,
    Int16Array,
  );
}


import { i32 } from '../../types/numbers/i32.type';

export function vec4_from_values_i32(
  x: i32,
  y: i32,
  z: i32,
  w: i32,
): vec4<Int32Array> {
  return vec4_from_values<Int32Array>(
    x,
    y,
    z,
    w,
    Int32Array,
  );
}

