import { IGenerateMathGLEpsilonEqualsOptions, generateMathGLEpsilonEquals } from './generate-math-gl-epsilon-equals';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLEpsilonEqualsOptions extends IGenerateMathGLEpsilonEqualsOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLEpsilonEquals(
  options: IBuildMathGLEpsilonEqualsOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_epsilon_equals.ts',
    content: generateMathGLEpsilonEquals(options),
  });
}
