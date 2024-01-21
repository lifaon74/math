/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { mat2 } from './mat2.type';

export function mat2_create(): mat2;
export function mat2_create<GType extends ArrayLike<number>>(
  ctor: new(size: number) => GType,
): mat2<GType>;
export function mat2_create(
  ctor: any = Float32Array,
): mat2 {
  const out: mat2 = new ctor(4);
  out[0] = 1;
  out[3] = 1;
  return out;
}


export function mat2_create_f32(): mat2<Float32Array> {
   return mat2_create<Float32Array>(Float32Array);
}


export function mat2_create_f64(): mat2<Float64Array> {
   return mat2_create<Float64Array>(Float64Array);
}


export function mat2_create_u8(): mat2<Uint8Array> {
   return mat2_create<Uint8Array>(Uint8Array);
}


export function mat2_create_u16(): mat2<Uint16Array> {
   return mat2_create<Uint16Array>(Uint16Array);
}


export function mat2_create_u32(): mat2<Uint32Array> {
   return mat2_create<Uint32Array>(Uint32Array);
}


export function mat2_create_i8(): mat2<Int8Array> {
   return mat2_create<Int8Array>(Int8Array);
}


export function mat2_create_i16(): mat2<Int16Array> {
   return mat2_create<Int16Array>(Int16Array);
}


export function mat2_create_i32(): mat2<Int32Array> {
   return mat2_create<Int32Array>(Int32Array);
}

