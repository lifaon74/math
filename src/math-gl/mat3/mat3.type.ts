/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */


export type mat3<GType extends ArrayLike<number> = ArrayLike<number>> = Omit<GType, number | 'length'> & {
  readonly length: 9;
  [0]: number;
  [1]: number;
  [2]: number;
  [3]: number;
  [4]: number;
  [5]: number;
  [6]: number;
  [7]: number;
  [8]: number;
};

export type readonly_mat3<GType extends ArrayLike<number> = ArrayLike<number>> = Readonly<mat3<GType>>;

export type mat3_f32 = mat3<Float32Array>;
export type mat3_f64 = mat3<Float64Array>;
export type mat3_u8 = mat3<Uint8Array>;
export type mat3_u16 = mat3<Uint16Array>;
export type mat3_u32 = mat3<Uint32Array>;
export type mat3_i8 = mat3<Int8Array>;
export type mat3_i16 = mat3<Int16Array>;
export type mat3_i32 = mat3<Int32Array>;
