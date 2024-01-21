import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';

export interface IGenerateMathGLVectorLinearInterpolationOptions {
  readonly name: string;
  readonly length: number;
}

export function generateMathGLVectorLinearInterpolation(
  {
    name,
    length,
  }: IGenerateMathGLVectorLinearInterpolationOptions,
): string {
  return [
    ...autoGeneratedFileComment(),
    `import { ${name}, readonly_${name} } from './${name}.type';`,
    ``,
    `export function ${name}_linear_interpolation<GType extends ArrayLike<number>>(`,
    `  out: ${name}<GType>,`,
    `  origin: readonly_${name},`,
    `  target: readonly_${name},`,
    `  t: number,`,
    `): ${name}<GType> {`,
    `  const _t: number = 1 - t;`,
    ...Array.from({ length }, (_, index: number): string => {
      return `  out[${index}] = (origin[${index}] * _t) + (target[${index}] * t);`;
    }),
    `  return out;`,
    `}`,
    ``,
  ].join('\n');
}
