import { buildMathGLFile, IBaseBuildMathGLFileOptions } from '../../misc/build-math-gl-file';
import { generateMathGLClone, IGenerateMathGLCloneOptions } from './generate-math-gl-clone';

export interface IBuildMathGLCloneOptions extends IGenerateMathGLCloneOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLClone(
  options: IBuildMathGLCloneOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_clone.ts',
    content: generateMathGLClone(options),
  });
}
