import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment';

export interface IGenerateMathGLSetOptions {
  readonly name: string;
  readonly length: number;
  readonly type: 'vector' | 'matrix';
}

// export function vec4_copy<GType extends ArrayLike<number>>(
//   out: vec4<GType>,
//   a: readonly_vec4,
// ): vec4<GType> {
//   out[0] = a[0];
//   out[1] = a[1];
//   out[2] = a[2];
//   out[3] = a[3];
//   return out;
// }

export function generateMathGlSet(
  {
    name,
    length,
    type,
  }: IGenerateMathGLSetOptions,
): string {

  const values: string[] = (type === 'vector')
    ? ['x', 'y', 'z', 'w']
    : Array.from({ length: Math.sqrt(length) }, (_, x: number): string[] => {
      return Array.from({ length: Math.sqrt(length) }, (_, y: number): string => {
        return `m${x}${y}`;
      });
    }).flat();

  const untypedArguments = Array.from({ length }, (_, index) => {
    return `  ${values[index]}: number,`;
  });

  return [
    ...autoGeneratedFileComment(),
    `import { ${name} } from './${name}.type';`,
    ``,
    `/**`,
    ` *  Set the components of a ${name} to the given values.`,
    ` */`,
    `export function ${name}_set<GType extends ArrayLike<number>>(`,
    `  out: ${name}<GType>,`,
    ...untypedArguments,
    `): ${name}<GType> {`,
    ...Array.from({ length }, (_, index) => {
      return `  out[${index}] = ${values[index]};`;
    }),
    `  return out;`,
    `}`,
    ``,
  ].join('\n');
}
