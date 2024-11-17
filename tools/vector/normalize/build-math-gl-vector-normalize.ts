import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorNormalizeOptions,
  generateMathGLVectorNormalize,
} from './generate-math-gl-vector-normalize.js';

export interface IBuildMathGLVectorNormalizeOptions
  extends IGenerateMathGLVectorNormalizeOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorNormalize(
  options: IBuildMathGLVectorNormalizeOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_normalize.ts',
    content: generateMathGLVectorNormalize(options),
  });
}
