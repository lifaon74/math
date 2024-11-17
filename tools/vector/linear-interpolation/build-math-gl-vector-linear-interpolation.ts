import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorLinearInterpolationOptions,
  generateMathGLVectorLinearInterpolation,
} from './generate-math-gl-vector-linear-interpolation.js';

export interface IBuildMathGLVectorLinearInterpolationOptions
  extends IGenerateMathGLVectorLinearInterpolationOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorLinearInterpolation(
  options: IBuildMathGLVectorLinearInterpolationOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_linear_interpolation.ts',
    content: generateMathGLVectorLinearInterpolation(options),
  });
}
