import { join, dirname } from 'node:path';
import { writeFile } from 'node:fs/promises';

const ROOT = join(dirname(new URL(import.meta.url).pathname), '../..');
const SRC = join(ROOT, 'src');
const MATH_GL_SRC = join(SRC, 'math-gl');

export interface IBuildMathGLFileOptions {
  readonly name: string;
  readonly suffix: string;
  readonly content: string;
}

export type IBaseBuildMathGLFileOptions = Omit<IBuildMathGLFileOptions, 'content' | 'suffix'>;

export function buildMathGLFile(
  {
    name,
    suffix,
    content,
  }: IBuildMathGLFileOptions,
): Promise<void> {
  const directoryPath: string = join(MATH_GL_SRC, name);
  const typesPath: string = join(directoryPath, `${name}${suffix}`);
  return writeFile(typesPath, content);
}
