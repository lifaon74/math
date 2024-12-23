import { buildMathGLFile, IBaseBuildMathGLFileOptions } from '../../misc/build-math-gl-file.js';
import { generateMathGlSet, IGenerateMathGLSetOptions } from './generate-math-gl-set.js';

export interface IBuildMathGLSetOptions
  extends IGenerateMathGLSetOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGlSet(options: IBuildMathGLSetOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_set.ts',
    content: generateMathGlSet(options),
  });
}
