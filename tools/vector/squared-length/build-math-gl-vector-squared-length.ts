import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorSquaredLengthOptions,
  generateMathGLVectorSquaredLength,
} from './generate-math-gl-vector-squared-length.js';

export interface IBuildMathGLVectorSquaredLengthOptions
  extends IGenerateMathGLVectorSquaredLengthOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorSquaredLength(
  options: IBuildMathGLVectorSquaredLengthOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_squared_length.ts',
    content: generateMathGLVectorSquaredLength(options),
  });
}
