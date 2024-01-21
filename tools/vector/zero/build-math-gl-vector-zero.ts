import { IGenerateMathGLVectorZeroOptions, generateMathGLVectorZero } from './generate-math-gl-vector-zero';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLVectorZeroOptions extends IGenerateMathGLVectorZeroOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLVectorZero(
  options: IBuildMathGLVectorZeroOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_zero.ts',
    content: generateMathGLVectorZero(options),
  });
}
