import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorAngleOptions,
  generateMathGLVectorAngle,
} from './generate-math-gl-vector-angle.js';

export interface IBuildMathGLVectorAngleOptions
  extends IGenerateMathGLVectorAngleOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorAngle(options: IBuildMathGLVectorAngleOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_angle.ts',
    content: generateMathGLVectorAngle(options),
  });
}
