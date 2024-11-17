/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */


export type vec4<GType extends ArrayLike<number> = ArrayLike<number>> = Omit<GType, number | 'length'> & {
  readonly length: 4;
  [0]: number;
  [1]: number;
  [2]: number;
  [3]: number;
  [index: number]: number;
};

export type readonly_vec4<GType extends ArrayLike<number> = ArrayLike<number>> = Readonly<vec4<GType>>;

export type vec4_f32 = vec4<Float32Array>;
export type vec4_f64 = vec4<Float64Array>;
export type vec4_u8 = vec4<Uint8Array>;
export type vec4_u16 = vec4<Uint16Array>;
export type vec4_u32 = vec4<Uint32Array>;
export type vec4_i8 = vec4<Int8Array>;
export type vec4_i16 = vec4<Int16Array>;
export type vec4_i32 = vec4<Int32Array>;
