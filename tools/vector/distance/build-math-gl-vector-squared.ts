import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorDistanceOptions,
  generateMathGlVectorDistance,
} from './generate-math-gl-vector-squared.js';

export interface IBuildMathGLVectorDistanceOptions
  extends IGenerateMathGLVectorDistanceOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorDistance(
  options: IBuildMathGLVectorDistanceOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_distance.ts',
    content: generateMathGlVectorDistance(options),
  });
}
