import { IGenerateMathGLVectorAngleOptions, generateMathGLVectorAngle } from './generate-math-gl-vector-angle';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLVectorAngleOptions extends IGenerateMathGLVectorAngleOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLVectorAngle(
  options: IBuildMathGLVectorAngleOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_angle.ts',
    content: generateMathGLVectorAngle(options),
  });
}
