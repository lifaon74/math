/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */

import { vec3 } from './vec3.type';

/**
 *  Creates a new vec3.
 */
export function vec3_create(): vec3;
export function vec3_create<GType extends ArrayLike<number>>(
  ctor: new(size: number) => GType,
): vec3<GType>;
export function vec3_create(
  ctor: any = Float32Array,
): vec3 {
  return new ctor(3);
}


export function vec3_create_f32(): vec3<Float32Array> {
   return vec3_create<Float32Array>(Float32Array);
}


export function vec3_create_f64(): vec3<Float64Array> {
   return vec3_create<Float64Array>(Float64Array);
}


export function vec3_create_u8(): vec3<Uint8Array> {
   return vec3_create<Uint8Array>(Uint8Array);
}


export function vec3_create_u16(): vec3<Uint16Array> {
   return vec3_create<Uint16Array>(Uint16Array);
}


export function vec3_create_u32(): vec3<Uint32Array> {
   return vec3_create<Uint32Array>(Uint32Array);
}


export function vec3_create_i8(): vec3<Int8Array> {
   return vec3_create<Int8Array>(Int8Array);
}


export function vec3_create_i16(): vec3<Int16Array> {
   return vec3_create<Int16Array>(Int16Array);
}


export function vec3_create_i32(): vec3<Int32Array> {
   return vec3_create<Int32Array>(Int32Array);
}

