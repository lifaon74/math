import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';
import { MATH_GL_TYPES } from '../types/math-gl-types.constant';

export interface IGenerateMathGLFromValuesOptions {
  readonly name: string;
  readonly length: number;
  readonly type: 'vector' | 'matrix';
}

export function generateMathGLFromValues(
  {
    name,
    length,
    type,
  }: IGenerateMathGLFromValuesOptions,
): string {

  const values: string[] = (type === 'vector')
   ? ['x', 'y', 'z', 'w']
    : Array.from({ length: Math.sqrt(length) }, (_, x: number): string[] => {
      return Array.from({ length: Math.sqrt(length) }, (_, y: number): string => {
        return `m${x}${y}`;
      })
    }).flat();

  const untypedArguments = Array.from({ length }, (_, index) => {
    return `  ${values[index]}: number,`;
  });

  return [
    ...autoGeneratedFileComment(),
    `import { ${name} } from './${name}.type';`,
    ``,
    `/**`,
    ` *  Creates a new ${name} initialized with the given values.`,
    ` */`,
    `export function ${name}_from_values(`,
    ...untypedArguments,
    `): ${name};`,
    `export function ${name}_from_values<GType extends ArrayLike<number>>(`,
    ...untypedArguments,
    `  ctor: new(size: number) => GType,`,
    `): ${name}<GType>;`,
    `export function ${name}_from_values(`,
    ...untypedArguments,
    `  ctor: any = Float32Array,`,
    `): ${name} {`,
    `  const out: ${name} = new ctor(${length});`,
    ...Array.from({ length }, (_, index) => {
      return `  out[${index}] = ${values[index]};`;
    }),
    `  return out;`,
    `}`,
    ``,
    ...MATH_GL_TYPES.flatMap(([type, array]) => {
      return [
        ``,
        `import { ${type} } from '../../types/${type}.type';`,
        ``,
        `export function ${name}_from_values_${type}(`,
        ...Array.from({ length }, (_, index) => {
          return `  ${values[index]}: ${type},`;
        }),
        `): ${name}<${array}> {`,
        `  return ${name}_from_values<${array}>(`,
        ...Array.from({ length }, (_, index) => {
          return `    ${values[index]},`;
        }),
        `    ${array},`,
        `  );`,
        `}`,
        ``,
      ];
    }),
    ``,
  ].join('\n');
}

