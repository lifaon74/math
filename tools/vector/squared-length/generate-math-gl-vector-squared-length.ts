import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment.js';

export interface IGenerateMathGLVectorSquaredLengthOptions {
  readonly name: string;
  readonly length: number;
}

export function generateMathGLVectorSquaredLength({
  name,
  length,
}: IGenerateMathGLVectorSquaredLengthOptions): string {
  return [
    ...autoGeneratedFileComment(),
    `import { readonly_${name} } from './${name}.type.js';`,
    ``,
    `/**`,
    ` * Calculates the squared length of a ${name}.`,
    ` */`,
    `export function ${name}_squared_length(`,
    `  a: readonly_${name},`,
    `): number {`,
    `  return (`,
    ...Array.from({ length }, (_, index: number): string => {
      return `    ${index > 0 ? '+ ' : '  '}a[${index}] * a[${index}]`;
    }),
    `  );`,
    `}`,
    ``,
  ].join('\n');
}
