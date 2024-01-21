import { IGenerateMathGLVectorMultiplyOptions, generateMathGLVectorMultiply } from './generate-math-gl-vector-multiply';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLVectorMultiplyOptions extends IGenerateMathGLVectorMultiplyOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLVectorMultiply(
  options: IBuildMathGLVectorMultiplyOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_multiply.ts',
    content: generateMathGLVectorMultiply(options),
  });
}
