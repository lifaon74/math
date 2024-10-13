import { IGenerateMathGLEqualsOptions, generateMathGLEquals } from './generate-math-gl-equals';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLEqualsOptions extends IGenerateMathGLEqualsOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLEquals(
  options: IBuildMathGLEqualsOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_equals.ts',
    content: generateMathGLEquals(options),
  });
}
