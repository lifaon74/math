import { IGenerateMathGLSubtractOptions, generateMathGLSubtract } from './generate-math-gl-subtract';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLSubtractOptions extends IGenerateMathGLSubtractOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLSubtract(
  options: IBuildMathGLSubtractOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_subtract.ts',
    content: generateMathGLSubtract(options),
  });
}
