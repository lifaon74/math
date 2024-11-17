import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorZeroOptions,
  generateMathGLVectorZero,
} from './generate-math-gl-vector-zero.js';

export interface IBuildMathGLVectorZeroOptions
  extends IGenerateMathGLVectorZeroOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorZero(options: IBuildMathGLVectorZeroOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_zero.ts',
    content: generateMathGLVectorZero(options),
  });
}
