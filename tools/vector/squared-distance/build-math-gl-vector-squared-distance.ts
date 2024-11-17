import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import {
  IGenerateMathGLVectorSquaredDistanceOptions,
  generateMathGlVectorSquaredDistance,
} from './generate-math-gl-vector-squared-distance.js';

export interface IBuildMathGLVectorSquaredDistanceOptions
  extends IGenerateMathGLVectorSquaredDistanceOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLVectorSquaredDistance(
  options: IBuildMathGLVectorSquaredDistanceOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_squared_distance.ts',
    content: generateMathGlVectorSquaredDistance(options),
  });
}
