/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat4 } from './mat4.type';

export function mat4_create(): mat4;
export function mat4_create<GType extends ArrayLike<number>>(
  ctor: new(size: number) => GType,
): mat4<GType>;
export function mat4_create(
  ctor: any = Float32Array,
): mat4 {
  const out: mat4 = new ctor(16);
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}


export function mat4_create_f32(): mat4<Float32Array> {
   return mat4_create<Float32Array>(Float32Array);
}


export function mat4_create_f64(): mat4<Float64Array> {
   return mat4_create<Float64Array>(Float64Array);
}


export function mat4_create_u8(): mat4<Uint8Array> {
   return mat4_create<Uint8Array>(Uint8Array);
}


export function mat4_create_u16(): mat4<Uint16Array> {
   return mat4_create<Uint16Array>(Uint16Array);
}


export function mat4_create_u32(): mat4<Uint32Array> {
   return mat4_create<Uint32Array>(Uint32Array);
}


export function mat4_create_i8(): mat4<Int8Array> {
   return mat4_create<Int8Array>(Int8Array);
}


export function mat4_create_i16(): mat4<Int16Array> {
   return mat4_create<Int16Array>(Int16Array);
}


export function mat4_create_i32(): mat4<Int32Array> {
   return mat4_create<Int32Array>(Int32Array);
}

