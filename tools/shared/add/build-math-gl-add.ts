import { IGenerateMathGLAddOptions, generateMathGLAdd } from './generate-math-gl-add';
import { IBaseBuildMathGLFileOptions, buildMathGLFile } from '../../misc/build-math-gl-file';

export interface IBuildMathGLAddOptions extends IGenerateMathGLAddOptions, IBaseBuildMathGLFileOptions {
}

export function buildMathGLAdd(
  options: IBuildMathGLAddOptions,
): Promise<void> {
  return buildMathGLFile({
    ...options,
    suffix: '_add.ts',
    content: generateMathGLAdd(options),
  });
}
