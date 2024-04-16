/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3 } from './vec3.type';

/**
 *  Creates a new vec3 initialized with the given values.
 */
export function vec3_from_values(
  x: number,
  y: number,
  z: number,
): vec3;
export function vec3_from_values<GType extends ArrayLike<number>>(
  x: number,
  y: number,
  z: number,
  ctor: new(size: number) => GType,
): vec3<GType>;
export function vec3_from_values(
  x: number,
  y: number,
  z: number,
  ctor: any = Float32Array,
): vec3 {
  const out: vec3 = new ctor(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}


import { f32 } from '../../types/f32.type';

export function vec3_from_values_f32(
  x: f32,
  y: f32,
  z: f32,
): vec3<Float32Array> {
  return vec3_from_values<Float32Array>(
    x,
    y,
    z,
    Float32Array,
  );
}


import { f64 } from '../../types/f64.type';

export function vec3_from_values_f64(
  x: f64,
  y: f64,
  z: f64,
): vec3<Float64Array> {
  return vec3_from_values<Float64Array>(
    x,
    y,
    z,
    Float64Array,
  );
}


import { u8 } from '../../types/u8.type';

export function vec3_from_values_u8(
  x: u8,
  y: u8,
  z: u8,
): vec3<Uint8Array> {
  return vec3_from_values<Uint8Array>(
    x,
    y,
    z,
    Uint8Array,
  );
}


import { u16 } from '../../types/u16.type';

export function vec3_from_values_u16(
  x: u16,
  y: u16,
  z: u16,
): vec3<Uint16Array> {
  return vec3_from_values<Uint16Array>(
    x,
    y,
    z,
    Uint16Array,
  );
}


import { u32 } from '../../types/u32.type';

export function vec3_from_values_u32(
  x: u32,
  y: u32,
  z: u32,
): vec3<Uint32Array> {
  return vec3_from_values<Uint32Array>(
    x,
    y,
    z,
    Uint32Array,
  );
}


import { i8 } from '../../types/i8.type';

export function vec3_from_values_i8(
  x: i8,
  y: i8,
  z: i8,
): vec3<Int8Array> {
  return vec3_from_values<Int8Array>(
    x,
    y,
    z,
    Int8Array,
  );
}


import { i16 } from '../../types/i16.type';

export function vec3_from_values_i16(
  x: i16,
  y: i16,
  z: i16,
): vec3<Int16Array> {
  return vec3_from_values<Int16Array>(
    x,
    y,
    z,
    Int16Array,
  );
}


import { i32 } from '../../types/i32.type';

export function vec3_from_values_i32(
  x: i32,
  y: i32,
  z: i32,
): vec3<Int32Array> {
  return vec3_from_values<Int32Array>(
    x,
    y,
    z,
    Int32Array,
  );
}

