import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import { IGenerateMathGLCopyOptions, generateMathGLCopy } from './generate-math-gl-copy.js';

export interface IBuildMathGLCopyOptions
  extends IGenerateMathGLCopyOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLCopy(options: IBuildMathGLCopyOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_copy.ts',
    content: generateMathGLCopy(options),
  });
}
