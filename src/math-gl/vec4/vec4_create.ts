/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec4 } from './vec4.type.js';

/**
 *  Creates a new vec4.
 */
export function vec4_create(): vec4;
export function vec4_create<GType extends ArrayLike<number>>(
  ctor: new(size: number) => GType,
): vec4<GType>;
export function vec4_create(
  ctor: any = Float32Array,
): vec4 {
  return new ctor(4);
}


export function vec4_create_f32(): vec4<Float32Array> {
   return vec4_create<Float32Array>(Float32Array);
}


export function vec4_create_f64(): vec4<Float64Array> {
   return vec4_create<Float64Array>(Float64Array);
}


export function vec4_create_u8(): vec4<Uint8Array> {
   return vec4_create<Uint8Array>(Uint8Array);
}


export function vec4_create_u16(): vec4<Uint16Array> {
   return vec4_create<Uint16Array>(Uint16Array);
}


export function vec4_create_u32(): vec4<Uint32Array> {
   return vec4_create<Uint32Array>(Uint32Array);
}


export function vec4_create_i8(): vec4<Int8Array> {
   return vec4_create<Int8Array>(Int8Array);
}


export function vec4_create_i16(): vec4<Int16Array> {
   return vec4_create<Int16Array>(Int16Array);
}


export function vec4_create_i32(): vec4<Int32Array> {
   return vec4_create<Int32Array>(Int32Array);
}

