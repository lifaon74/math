import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';

export interface IGenerateMathGLVectorMultiplyOptions {
  readonly name: string;
  readonly length: number;
}

export function generateMathGLVectorMultiply(
  {
    name,
    length,
  }: IGenerateMathGLVectorMultiplyOptions,
): string {
  return [
    ...autoGeneratedFileComment(),
    `import { ${name}, readonly_${name} } from './${name}.type';`,
    ``,
    `export function ${name}_multiply<GType extends ArrayLike<number>>(`,
    `  out: ${name}<GType>,`,
    `  a: readonly_${name},`,
    `  b: readonly_${name},`,
    `): ${name}<GType> {`,
    ...Array.from({ length }, (_, index: number): string => {
      return `  out[${index}] = a[${index}] * b[${index}];`;
    }),
    `  return out;`,
    `}`,
    ``,
  ].join('\n');
}

