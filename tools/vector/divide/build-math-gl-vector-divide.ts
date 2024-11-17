import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorDivideOptions,
  generateMathGLVectorDivide,
} from './generate-math-gl-vector-divide.js';

export interface IBuildMathGLVectorDivideOptions
  extends IGenerateMathGLVectorDivideOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorDivide(options: IBuildMathGLVectorDivideOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_divide.ts',
    content: generateMathGLVectorDivide(options),
  });
}
