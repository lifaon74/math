import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';
import { MATH_GL_TYPES } from '../types/math-gl-types.constant';

export interface IGenerateMathGLCreateOptions {
  readonly name: string;
  readonly length: number;
  readonly type: 'vector' | 'matrix';
}

export function generateMathGLCreate(
  {
    name,
    length,
    type,
  }: IGenerateMathGLCreateOptions,
): string {
  return [
    ...autoGeneratedFileComment(),
    `import { ${name} } from './${name}.type';`,
    ``,
    `/**`,
    ` *  Creates a new ${name}.`,
    ` */`,
    `export function ${name}_create(): ${name};`,
    `export function ${name}_create<GType extends ArrayLike<number>>(`,
    `  ctor: new(size: number) => GType,`,
    `): ${name}<GType>;`,
    `export function ${name}_create(`,
    `  ctor: any = Float32Array,`,
    `): ${name} {`,
    ...(
      (type === 'vector')
        ? [
          `  return new ctor(${length});`,
        ]
        : [
          `  const out: ${name} = new ctor(${length});`,
            ...Array.from({ length: Math.sqrt(length)}, (_, index: number): string => {
              return `  out[${index * Math.sqrt(length) + index}] = 1;`
            }),
          `  return out;`
        ]
    ),
    `}`,
    ``,
    ...MATH_GL_TYPES.flatMap(([type, array]) => {
      return [
        ``,
        `export function ${name}_create_${type}(): ${name}<${array}> {`,
        `   return ${name}_create<${array}>(${array});`,
        `}`,
        ``,
      ];
    }),
    ``,
  ].join('\n');
}
