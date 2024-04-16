import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';

export interface IGenerateMathGLVectorScaleOptions {
  readonly name: string;
  readonly length: number;
}

export function generateMathGLVectorScale(
  {
    name,
    length,
  }: IGenerateMathGLVectorScaleOptions,
): string {
  return [
    ...autoGeneratedFileComment(),
    `import { ${name}, readonly_${name} } from './${name}.type';`,
    ``,
    `/**`,
    ` * Scales a ${name} by a scalar number.`,
    ` */`,
    `export function ${name}_scale<GType extends ArrayLike<number>>(`,
    `  out: ${name}<GType>,`,
    `  a: readonly_${name},`,
    `  b: number,`,
    `): ${name}<GType> {`,
    ...Array.from({ length }, (_, index: number): string => {
      return `  out[${index}] = a[${index}] * b;`;
    }),
    `  return out;`,
    `}`,
    ``,
  ].join('\n');
}


