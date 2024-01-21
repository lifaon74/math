import { IGenerateMathGLVectorDivideOptions, generateMathGLVectorDivide } from './generate-math-gl-vector-divide';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLVectorDivideOptions extends IGenerateMathGLVectorDivideOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLVectorDivide(
  options: IBuildMathGLVectorDivideOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_divide.ts',
    content: generateMathGLVectorDivide(options),
  });
}
