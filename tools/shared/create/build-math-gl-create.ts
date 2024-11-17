import { buildMathGLFile, IBaseBuildMathGLFileOptions } from '../../misc/build-math-gl-file.js';
import { generateMathGLCreate, IGenerateMathGLCreateOptions } from './generate-math-gl-create.js';

export interface IBuildMathGLCreateOptions
  extends IGenerateMathGLCreateOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLCreate(options: IBuildMathGLCreateOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_create.ts',
    content: generateMathGLCreate(options),
  });
}
