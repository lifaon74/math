/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat3 } from './mat3.type';

/**
 *  Creates a new mat3.
 */
export function mat3_create(): mat3;
export function mat3_create<GType extends ArrayLike<number>>(
  ctor: new(size: number) => GType,
): mat3<GType>;
export function mat3_create(
  ctor: any = Float32Array,
): mat3 {
  const out: mat3 = new ctor(9);
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}


export function mat3_create_f32(): mat3<Float32Array> {
   return mat3_create<Float32Array>(Float32Array);
}


export function mat3_create_f64(): mat3<Float64Array> {
   return mat3_create<Float64Array>(Float64Array);
}


export function mat3_create_u8(): mat3<Uint8Array> {
   return mat3_create<Uint8Array>(Uint8Array);
}


export function mat3_create_u16(): mat3<Uint16Array> {
   return mat3_create<Uint16Array>(Uint16Array);
}


export function mat3_create_u32(): mat3<Uint32Array> {
   return mat3_create<Uint32Array>(Uint32Array);
}


export function mat3_create_i8(): mat3<Int8Array> {
   return mat3_create<Int8Array>(Int8Array);
}


export function mat3_create_i16(): mat3<Int16Array> {
   return mat3_create<Int16Array>(Int16Array);
}


export function mat3_create_i32(): mat3<Int32Array> {
   return mat3_create<Int32Array>(Int32Array);
}

