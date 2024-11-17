import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorNegateOptions,
  generateMathGLVectorNegate,
} from './generate-math-gl-vector-negate.js';

export interface IBuildMathGLVectorNegateOptions
  extends IGenerateMathGLVectorNegateOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorNegate(options: IBuildMathGLVectorNegateOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_negate.ts',
    content: generateMathGLVectorNegate(options),
  });
}
