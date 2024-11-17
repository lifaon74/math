import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file.js';
import { IGenerateMathGLEqualsOptions, generateMathGLEquals } from './generate-math-gl-equals.js';

export interface IBuildMathGLEqualsOptions
  extends IGenerateMathGLEqualsOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLEquals(options: IBuildMathGLEqualsOptions): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_equals.ts',
    content: generateMathGLEquals(options),
  });
}
