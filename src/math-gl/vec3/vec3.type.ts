/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */


export type vec3<GType extends ArrayLike<number> = ArrayLike<number>> = Omit<GType, number | 'length'> & {
  readonly length: 3;
  [0]: number;
  [1]: number;
  [2]: number;
  [index: number]: number;
};

export type readonly_vec3<GType extends ArrayLike<number> = ArrayLike<number>> = Readonly<vec3<GType>>;

export type vec3_f32 = vec3<Float32Array>;
export type vec3_f64 = vec3<Float64Array>;
export type vec3_u8 = vec3<Uint8Array>;
export type vec3_u16 = vec3<Uint16Array>;
export type vec3_u32 = vec3<Uint32Array>;
export type vec3_i8 = vec3<Int8Array>;
export type vec3_i16 = vec3<Int16Array>;
export type vec3_i32 = vec3<Int32Array>;
