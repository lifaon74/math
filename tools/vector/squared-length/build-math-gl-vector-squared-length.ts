import { IGenerateMathGLVectorSquaredLengthOptions, generateMathGLVectorSquaredLength } from './generate-math-gl-vector-squared-length';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLVectorSquaredLengthOptions extends IGenerateMathGLVectorSquaredLengthOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLVectorSquaredLength(
  options: IBuildMathGLVectorSquaredLengthOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_squared_length.ts',
    content: generateMathGLVectorSquaredLength(options),
  });
}
