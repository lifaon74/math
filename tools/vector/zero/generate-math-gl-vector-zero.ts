import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';

export interface IGenerateMathGLVectorZeroOptions {
  readonly name: string;
  readonly length: number;
}

export function generateMathGLVectorZero(
  {
    name,
    length,
  }: IGenerateMathGLVectorZeroOptions,
): string {
  return [
    ...autoGeneratedFileComment(),
    `import { ${name} } from './${name}.type';`,
    ``,
    `export function ${name}_zero<GType extends ArrayLike<number>>(`,
    `  out: ${name}<GType>,`,
    `): ${name}<GType> {`,
    ...Array.from({ length }, (_, index: number): string => {
      return `  out[${index}] = 0;`;
    }),
    `  return out;`,
    `}`,
    ``,
  ].join('\n');
}

