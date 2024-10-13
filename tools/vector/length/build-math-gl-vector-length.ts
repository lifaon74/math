import { buildMathGLFile, IBaseBuildMathGLFileOptions } from '../../misc/build-math-gl-file';
import { generateMathGLVectorLength, IGenerateMathGLVectorLengthOptions } from './generate-math-gl-vector-length';

export interface IBuildMathGLVectorLengthOptions extends IGenerateMathGLVectorLengthOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLVectorLength(
  options: IBuildMathGLVectorLengthOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_length.ts',
    content: generateMathGLVectorLength(options),
  });
}
