import { IGenerateMathGLVectorInverseOptions, generateMathGLVectorInverse } from './generate-math-gl-vector-inverse';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLVectorInverseOptions extends IGenerateMathGLVectorInverseOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLVectorInverse(
  options: IBuildMathGLVectorInverseOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_inverse.ts',
    content: generateMathGLVectorInverse(options),
  });
}
