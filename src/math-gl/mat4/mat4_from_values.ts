/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat4 } from './mat4.type';

/**
 *  Creates a new mat4 initialized with the given values.
 */
export function mat4_from_values(
  m00: number,
  m01: number,
  m02: number,
  m03: number,
  m10: number,
  m11: number,
  m12: number,
  m13: number,
  m20: number,
  m21: number,
  m22: number,
  m23: number,
  m30: number,
  m31: number,
  m32: number,
  m33: number,
): mat4;
export function mat4_from_values<GType extends ArrayLike<number>>(
  m00: number,
  m01: number,
  m02: number,
  m03: number,
  m10: number,
  m11: number,
  m12: number,
  m13: number,
  m20: number,
  m21: number,
  m22: number,
  m23: number,
  m30: number,
  m31: number,
  m32: number,
  m33: number,
  ctor: new(size: number) => GType,
): mat4<GType>;
export function mat4_from_values(
  m00: number,
  m01: number,
  m02: number,
  m03: number,
  m10: number,
  m11: number,
  m12: number,
  m13: number,
  m20: number,
  m21: number,
  m22: number,
  m23: number,
  m30: number,
  m31: number,
  m32: number,
  m33: number,
  ctor: any = Float32Array,
): mat4 {
  const out: mat4 = new ctor(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


import { f32 } from '../../types/f32.type';

export function mat4_from_values_f32(
  m00: f32,
  m01: f32,
  m02: f32,
  m03: f32,
  m10: f32,
  m11: f32,
  m12: f32,
  m13: f32,
  m20: f32,
  m21: f32,
  m22: f32,
  m23: f32,
  m30: f32,
  m31: f32,
  m32: f32,
  m33: f32,
): mat4<Float32Array> {
  return mat4_from_values<Float32Array>(
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
    Float32Array,
  );
}


import { f64 } from '../../types/f64.type';

export function mat4_from_values_f64(
  m00: f64,
  m01: f64,
  m02: f64,
  m03: f64,
  m10: f64,
  m11: f64,
  m12: f64,
  m13: f64,
  m20: f64,
  m21: f64,
  m22: f64,
  m23: f64,
  m30: f64,
  m31: f64,
  m32: f64,
  m33: f64,
): mat4<Float64Array> {
  return mat4_from_values<Float64Array>(
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
    Float64Array,
  );
}


import { u8 } from '../../types/u8.type';

export function mat4_from_values_u8(
  m00: u8,
  m01: u8,
  m02: u8,
  m03: u8,
  m10: u8,
  m11: u8,
  m12: u8,
  m13: u8,
  m20: u8,
  m21: u8,
  m22: u8,
  m23: u8,
  m30: u8,
  m31: u8,
  m32: u8,
  m33: u8,
): mat4<Uint8Array> {
  return mat4_from_values<Uint8Array>(
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
    Uint8Array,
  );
}


import { u16 } from '../../types/u16.type';

export function mat4_from_values_u16(
  m00: u16,
  m01: u16,
  m02: u16,
  m03: u16,
  m10: u16,
  m11: u16,
  m12: u16,
  m13: u16,
  m20: u16,
  m21: u16,
  m22: u16,
  m23: u16,
  m30: u16,
  m31: u16,
  m32: u16,
  m33: u16,
): mat4<Uint16Array> {
  return mat4_from_values<Uint16Array>(
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
    Uint16Array,
  );
}


import { u32 } from '../../types/u32.type';

export function mat4_from_values_u32(
  m00: u32,
  m01: u32,
  m02: u32,
  m03: u32,
  m10: u32,
  m11: u32,
  m12: u32,
  m13: u32,
  m20: u32,
  m21: u32,
  m22: u32,
  m23: u32,
  m30: u32,
  m31: u32,
  m32: u32,
  m33: u32,
): mat4<Uint32Array> {
  return mat4_from_values<Uint32Array>(
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
    Uint32Array,
  );
}


import { i8 } from '../../types/i8.type';

export function mat4_from_values_i8(
  m00: i8,
  m01: i8,
  m02: i8,
  m03: i8,
  m10: i8,
  m11: i8,
  m12: i8,
  m13: i8,
  m20: i8,
  m21: i8,
  m22: i8,
  m23: i8,
  m30: i8,
  m31: i8,
  m32: i8,
  m33: i8,
): mat4<Int8Array> {
  return mat4_from_values<Int8Array>(
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
    Int8Array,
  );
}


import { i16 } from '../../types/i16.type';

export function mat4_from_values_i16(
  m00: i16,
  m01: i16,
  m02: i16,
  m03: i16,
  m10: i16,
  m11: i16,
  m12: i16,
  m13: i16,
  m20: i16,
  m21: i16,
  m22: i16,
  m23: i16,
  m30: i16,
  m31: i16,
  m32: i16,
  m33: i16,
): mat4<Int16Array> {
  return mat4_from_values<Int16Array>(
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
    Int16Array,
  );
}


import { i32 } from '../../types/i32.type';

export function mat4_from_values_i32(
  m00: i32,
  m01: i32,
  m02: i32,
  m03: i32,
  m10: i32,
  m11: i32,
  m12: i32,
  m13: i32,
  m20: i32,
  m21: i32,
  m22: i32,
  m23: i32,
  m30: i32,
  m31: i32,
  m32: i32,
  m33: i32,
): mat4<Int32Array> {
  return mat4_from_values<Int32Array>(
    m00,
    m01,
    m02,
    m03,
    m10,
    m11,
    m12,
    m13,
    m20,
    m21,
    m22,
    m23,
    m30,
    m31,
    m32,
    m33,
    Int32Array,
  );
}

