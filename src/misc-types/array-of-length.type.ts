export type ArrayOfLength<GLength extends number, GValue = any, GArray extends any[] = []> =
  GArray['length'] extends GLength
    ? GArray
    : ArrayOfLength<GLength, GValue, [...GArray, GValue]>
  ;
