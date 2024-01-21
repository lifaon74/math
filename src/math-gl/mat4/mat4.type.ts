/* INFO: THIS FILE WAS AUTO-GENERATED - DO NOT EDIT */


export type mat4<GType extends ArrayLike<number> = ArrayLike<number>> = Omit<GType, number | 'length'> & {
  readonly length: 16;
  [0]: number;
  [1]: number;
  [2]: number;
  [3]: number;
  [4]: number;
  [5]: number;
  [6]: number;
  [7]: number;
  [8]: number;
  [9]: number;
  [10]: number;
  [11]: number;
  [12]: number;
  [13]: number;
  [14]: number;
  [15]: number;
};

export type readonly_mat4<GType extends ArrayLike<number> = ArrayLike<number>> = Readonly<mat4<GType>>;

export type mat4_f32 = mat4<Float32Array>;
export type mat4_f64 = mat4<Float64Array>;
export type mat4_u8 = mat4<Uint8Array>;
export type mat4_u16 = mat4<Uint16Array>;
export type mat4_u32 = mat4<Uint32Array>;
export type mat4_i8 = mat4<Int8Array>;
export type mat4_i16 = mat4<Int16Array>;
export type mat4_i32 = mat4<Int32Array>;
