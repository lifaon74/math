import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorDotOptions,
  generateMathGLVectorDot,
} from './generate-math-gl-vector-dot.js';

export interface IBuildMathGLVectorDotOptions
  extends IGenerateMathGLVectorDotOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorDot(options: IBuildMathGLVectorDotOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_dot.ts',
    content: generateMathGLVectorDot(options),
  });
}
