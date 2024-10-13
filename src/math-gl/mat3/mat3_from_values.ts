/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat3 } from './mat3.type';

/**
 *  Creates a new mat3 initialized with the given values.
 */
export function mat3_from_values(
  m00: number,
  m01: number,
  m02: number,
  m10: number,
  m11: number,
  m12: number,
  m20: number,
  m21: number,
  m22: number,
): mat3;
export function mat3_from_values<GType extends ArrayLike<number>>(
  m00: number,
  m01: number,
  m02: number,
  m10: number,
  m11: number,
  m12: number,
  m20: number,
  m21: number,
  m22: number,
  ctor: new(size: number) => GType,
): mat3<GType>;
export function mat3_from_values(
  m00: number,
  m01: number,
  m02: number,
  m10: number,
  m11: number,
  m12: number,
  m20: number,
  m21: number,
  m22: number,
  ctor: any = Float32Array,
): mat3 {
  const out: mat3 = new ctor(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}


import { f32 } from '../../types/numbers/f32/f32.type';

export function mat3_from_values_f32(
  m00: f32,
  m01: f32,
  m02: f32,
  m10: f32,
  m11: f32,
  m12: f32,
  m20: f32,
  m21: f32,
  m22: f32,
): mat3<Float32Array> {
  return mat3_from_values<Float32Array>(
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    Float32Array,
  );
}


import { f64 } from '../../types/numbers/f64.type';

export function mat3_from_values_f64(
  m00: f64,
  m01: f64,
  m02: f64,
  m10: f64,
  m11: f64,
  m12: f64,
  m20: f64,
  m21: f64,
  m22: f64,
): mat3<Float64Array> {
  return mat3_from_values<Float64Array>(
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    Float64Array,
  );
}


import { u8 } from '../../types/numbers/u8/u8.type';

export function mat3_from_values_u8(
  m00: u8,
  m01: u8,
  m02: u8,
  m10: u8,
  m11: u8,
  m12: u8,
  m20: u8,
  m21: u8,
  m22: u8,
): mat3<Uint8Array> {
  return mat3_from_values<Uint8Array>(
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    Uint8Array,
  );
}


import { u16 } from '../../types/numbers/u16/u16.type';

export function mat3_from_values_u16(
  m00: u16,
  m01: u16,
  m02: u16,
  m10: u16,
  m11: u16,
  m12: u16,
  m20: u16,
  m21: u16,
  m22: u16,
): mat3<Uint16Array> {
  return mat3_from_values<Uint16Array>(
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    Uint16Array,
  );
}


import { u32 } from '../../types/numbers/u32/u32.type';

export function mat3_from_values_u32(
  m00: u32,
  m01: u32,
  m02: u32,
  m10: u32,
  m11: u32,
  m12: u32,
  m20: u32,
  m21: u32,
  m22: u32,
): mat3<Uint32Array> {
  return mat3_from_values<Uint32Array>(
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    Uint32Array,
  );
}


import { i8 } from '../../types/numbers/i8.type';

export function mat3_from_values_i8(
  m00: i8,
  m01: i8,
  m02: i8,
  m10: i8,
  m11: i8,
  m12: i8,
  m20: i8,
  m21: i8,
  m22: i8,
): mat3<Int8Array> {
  return mat3_from_values<Int8Array>(
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    Int8Array,
  );
}


import { i16 } from '../../types/numbers/i16.type';

export function mat3_from_values_i16(
  m00: i16,
  m01: i16,
  m02: i16,
  m10: i16,
  m11: i16,
  m12: i16,
  m20: i16,
  m21: i16,
  m22: i16,
): mat3<Int16Array> {
  return mat3_from_values<Int16Array>(
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    Int16Array,
  );
}


import { i32 } from '../../types/numbers/i32.type';

export function mat3_from_values_i32(
  m00: i32,
  m01: i32,
  m02: i32,
  m10: i32,
  m11: i32,
  m12: i32,
  m20: i32,
  m21: i32,
  m22: i32,
): mat3<Int32Array> {
  return mat3_from_values<Int32Array>(
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    Int32Array,
  );
}

