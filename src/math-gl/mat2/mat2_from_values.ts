/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat2 } from './mat2.type';

export function mat2_from_values(
  m00: number,
  m01: number,
  m10: number,
  m11: number,
): mat2;
export function mat2_from_values<GType extends ArrayLike<number>>(
  m00: number,
  m01: number,
  m10: number,
  m11: number,
  ctor: new(size: number) => GType,
): mat2<GType>;
export function mat2_from_values(
  m00: number,
  m01: number,
  m10: number,
  m11: number,
  ctor: any = Float32Array,
): mat2 {
  const out: mat2 = new ctor(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}


import { f32 } from '../../types/f32.type';

export function mat2_from_values_f32(
  m00: f32,
  m01: f32,
  m10: f32,
  m11: f32,
): mat2<Float32Array> {
  return mat2_from_values<Float32Array>(
    m00,
    m01,
    m10,
    m11,
    Float32Array,
  );
}


import { f64 } from '../../types/f64.type';

export function mat2_from_values_f64(
  m00: f64,
  m01: f64,
  m10: f64,
  m11: f64,
): mat2<Float64Array> {
  return mat2_from_values<Float64Array>(
    m00,
    m01,
    m10,
    m11,
    Float64Array,
  );
}


import { u8 } from '../../types/u8.type';

export function mat2_from_values_u8(
  m00: u8,
  m01: u8,
  m10: u8,
  m11: u8,
): mat2<Uint8Array> {
  return mat2_from_values<Uint8Array>(
    m00,
    m01,
    m10,
    m11,
    Uint8Array,
  );
}


import { u16 } from '../../types/u16.type';

export function mat2_from_values_u16(
  m00: u16,
  m01: u16,
  m10: u16,
  m11: u16,
): mat2<Uint16Array> {
  return mat2_from_values<Uint16Array>(
    m00,
    m01,
    m10,
    m11,
    Uint16Array,
  );
}


import { u32 } from '../../types/u32.type';

export function mat2_from_values_u32(
  m00: u32,
  m01: u32,
  m10: u32,
  m11: u32,
): mat2<Uint32Array> {
  return mat2_from_values<Uint32Array>(
    m00,
    m01,
    m10,
    m11,
    Uint32Array,
  );
}


import { i8 } from '../../types/i8.type';

export function mat2_from_values_i8(
  m00: i8,
  m01: i8,
  m10: i8,
  m11: i8,
): mat2<Int8Array> {
  return mat2_from_values<Int8Array>(
    m00,
    m01,
    m10,
    m11,
    Int8Array,
  );
}


import { i16 } from '../../types/i16.type';

export function mat2_from_values_i16(
  m00: i16,
  m01: i16,
  m10: i16,
  m11: i16,
): mat2<Int16Array> {
  return mat2_from_values<Int16Array>(
    m00,
    m01,
    m10,
    m11,
    Int16Array,
  );
}


import { i32 } from '../../types/i32.type';

export function mat2_from_values_i32(
  m00: i32,
  m01: i32,
  m10: i32,
  m11: i32,
): mat2<Int32Array> {
  return mat2_from_values<Int32Array>(
    m00,
    m01,
    m10,
    m11,
    Int32Array,
  );
}

