import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import { IGenerateMathGLTypesOptions, generateMathGLTypes } from './generate-math-gl-types.js';

export interface IBuildMathGLTypesOptions
  extends IGenerateMathGLTypesOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLTypes(options: IBuildMathGLTypesOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '.type.ts',
    content: generateMathGLTypes(options),
  });
}
