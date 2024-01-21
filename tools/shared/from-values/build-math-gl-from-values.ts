import { buildMathGLFile, IBaseBuildMathGLFileOptions } from '../../misc/build-math-gl-file';
import { generateMathGLFromValues, IGenerateMathGLFromValuesOptions } from './generate-math-gl-from-values';

export interface IBuildMathGLFromValuesOptions extends IGenerateMathGLFromValuesOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLFromValues(
  options: IBuildMathGLFromValuesOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_from_values.ts',
    content: generateMathGLFromValues(options),
  });
}
