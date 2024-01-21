import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';

export interface IGenerateMathGLVectorSquaredLengthOptions {
  readonly name: string;
  readonly length: number;
}

export function generateMathGLVectorSquaredLength(
  {
    name,
    length,
  }: IGenerateMathGLVectorSquaredLengthOptions,
): string {
  return [
    ...autoGeneratedFileComment(),
    `import { readonly_${name} } from './${name}.type';`,
    ``,
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


