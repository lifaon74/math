import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorScaleAndAddOptions,
  generateMathGLVectorScaleAndAdd,
} from './generate-math-gl-vector-scale-and-add.js';

export interface IBuildMathGLVectorScaleAndAddOptions
  extends IGenerateMathGLVectorScaleAndAddOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorScaleAndAdd(
  options: IBuildMathGLVectorScaleAndAddOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_scale_and_add.ts',
    content: generateMathGLVectorScaleAndAdd(options),
  });
}
