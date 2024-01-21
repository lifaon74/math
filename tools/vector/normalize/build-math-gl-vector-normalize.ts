import { IGenerateMathGLVectorNormalizeOptions, generateMathGLVectorNormalize } from './generate-math-gl-vector-normalize';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLVectorNormalizeOptions extends IGenerateMathGLVectorNormalizeOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLVectorNormalize(
  options: IBuildMathGLVectorNormalizeOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_normalize.ts',
    content: generateMathGLVectorNormalize(options),
  });
}
