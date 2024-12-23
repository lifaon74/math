import { autoGeneratedFileComment } from '../../misc/auto-generated-file-comment.js';

export interface IGenerateMathGLCloneOptions {
  readonly name: string;
}

export function generateMathGLClone({ name }: IGenerateMathGLCloneOptions): string {
  return [
    ...autoGeneratedFileComment(),
    `import { ${name}, readonly_${name} } from './${name}.type.js';`,
    `import { ${name}_copy } from './${name}_copy.js';`,
    `import { ${name}_create } from './${name}_create.js';`,
    ``,
    `/**`,
    ` * Creates a new ${name} initialized with values from an existing one.`,
    ` */`,
    `export function ${name}_clone<GType extends ArrayLike<number>>(`,
    `  a: readonly_${name}<GType>`,
    `): ${name}<GType> {`,
    `  return ${name}_copy<GType>(`,
    `    ${name}_create<GType>(a.constructor as any),`,
    `    a,`,
    `  );`,
    `}`,
    ``,
  ].join('\n');
}
