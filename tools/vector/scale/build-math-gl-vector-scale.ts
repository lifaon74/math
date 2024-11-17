import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorScaleOptions,
  generateMathGLVectorScale,
} from './generate-math-gl-vector-scale.js';

export interface IBuildMathGLVectorScaleOptions
  extends IGenerateMathGLVectorScaleOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorScale(options: IBuildMathGLVectorScaleOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_scale.ts',
    content: generateMathGLVectorScale(options),
  });
}
