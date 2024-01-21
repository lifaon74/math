/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */


export type vec2<GType extends ArrayLike<number> = ArrayLike<number>> = Omit<GType, number | 'length'> & {
  readonly length: 2;
  [0]: number;
  [1]: number;
};

export type readonly_vec2<GType extends ArrayLike<number> = ArrayLike<number>> = Readonly<vec2<GType>>;

export type vec2_f32 = vec2<Float32Array>;
export type vec2_f64 = vec2<Float64Array>;
export type vec2_u8 = vec2<Uint8Array>;
export type vec2_u16 = vec2<Uint16Array>;
export type vec2_u32 = vec2<Uint32Array>;
export type vec2_i8 = vec2<Int8Array>;
export type vec2_i16 = vec2<Int16Array>;
export type vec2_i32 = vec2<Int32Array>;
