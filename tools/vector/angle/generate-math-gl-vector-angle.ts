import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';

export interface IGenerateMathGLVectorAngleOptions {
  readonly name: string;
}

export function generateMathGLVectorAngle(
  {
    name,
  }: IGenerateMathGLVectorAngleOptions,
): string {
  return [
    ...autoGeneratedFileComment(),
    `import { readonly_${name} } from './${name}.type';`,
    `import { ${name}_dot } from './${name}_dot';`,
    `import { ${name}_squared_length } from './${name}_squared_length';`,
    `import { math_sqrt } from '../../others/math_sqrt';`,
    `import { math_acos } from '../../others/math_acos';`,
    `import { math_min } from '../../others/math_min';`,
    `import { math_max } from '../../others/math_max';`,
    ``,
    `export function ${name}_angle(`,
    `  a: readonly_${name},`,
    `  b: readonly_${name},`,
    `): number {`,
    `  const mag: number = math_sqrt(${name}_squared_length(a) * ${name}_squared_length(b));`,
    `  const cosine: number = mag && ${name}_dot(a, b) / mag;`,
    `  return math_acos(math_min(math_max(cosine, -1), 1));`,
    `}`,
    ``,
  ].join('\n');
}
