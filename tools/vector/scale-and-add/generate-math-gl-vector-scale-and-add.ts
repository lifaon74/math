import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment.js';

export interface IGenerateMathGLVectorScaleAndAddOptions {
  readonly name: string;
  readonly length: number;
}

export function generateMathGLVectorScaleAndAdd({
  name,
  length,
}: IGenerateMathGLVectorScaleAndAddOptions): string {
  return [
    ...autoGeneratedFileComment(),
    `import { ${name}, readonly_${name} } from './${name}.type.js';`,
    ``,
    `/**`,
    ` * Adds two ${name}'s after scaling the second operand by a scalar value.`,
    ` */`,
    `export function ${name}_scale_and_add<GType extends ArrayLike<number>>(`,
    `  out: ${name}<GType>,`,
    `  a: readonly_${name},`,
    `  b: readonly_${name},`,
    `  scale: number,`,
    `): ${name}<GType> {`,
    ...Array.from({ length }, (_, index: number): string => {
      return `  out[${index}] = a[${index}] + b[${index}] * scale;`;
    }),
    `  return out;`,
    `}`,
    ``,
  ].join('\n');
}
