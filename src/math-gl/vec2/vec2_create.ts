/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec2 } from './vec2.type.js';

/**
 *  Creates a new vec2.
 */
export function vec2_create(): vec2;
export function vec2_create<GType extends ArrayLike<number>>(
  ctor: new(size: number) => GType,
): vec2<GType>;
export function vec2_create(
  ctor: any = Float32Array,
): vec2 {
  return new ctor(2);
}


export function vec2_create_f32(): vec2<Float32Array> {
   return vec2_create<Float32Array>(Float32Array);
}


export function vec2_create_f64(): vec2<Float64Array> {
   return vec2_create<Float64Array>(Float64Array);
}


export function vec2_create_u8(): vec2<Uint8Array> {
   return vec2_create<Uint8Array>(Uint8Array);
}


export function vec2_create_u16(): vec2<Uint16Array> {
   return vec2_create<Uint16Array>(Uint16Array);
}


export function vec2_create_u32(): vec2<Uint32Array> {
   return vec2_create<Uint32Array>(Uint32Array);
}


export function vec2_create_i8(): vec2<Int8Array> {
   return vec2_create<Int8Array>(Int8Array);
}


export function vec2_create_i16(): vec2<Int16Array> {
   return vec2_create<Int16Array>(Int16Array);
}


export function vec2_create_i32(): vec2<Int32Array> {
   return vec2_create<Int32Array>(Int32Array);
}

