import { buildMathGLFile, IBaseBuildMathGLFileOptions } from '../../misc/build-math-gl-file.js';
import {
  generateMathGLVectorLength,
  IGenerateMathGLVectorLengthOptions,
} from './generate-math-gl-vector-length.js';

export interface IBuildMathGLVectorLengthOptions
  extends IGenerateMathGLVectorLengthOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorLength(options: IBuildMathGLVectorLengthOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_length.ts',
    content: generateMathGLVectorLength(options),
  });
}
