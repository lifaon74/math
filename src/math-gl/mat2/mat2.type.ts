/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */


export type mat2<GType extends ArrayLike<number> = ArrayLike<number>> = Omit<GType, number | 'length'> & {
  readonly length: 4;
  [0]: number;
  [1]: number;
  [2]: number;
  [3]: number;
};

export type readonly_mat2<GType extends ArrayLike<number> = ArrayLike<number>> = Readonly<mat2<GType>>;

export type mat2_f32 = mat2<Float32Array>;
export type mat2_f64 = mat2<Float64Array>;
export type mat2_u8 = mat2<Uint8Array>;
export type mat2_u16 = mat2<Uint16Array>;
export type mat2_u32 = mat2<Uint32Array>;
export type mat2_i8 = mat2<Int8Array>;
export type mat2_i16 = mat2<Int16Array>;
export type mat2_i32 = mat2<Int32Array>;
