import { buildMathGLFile, IBaseBuildMathGLFileOptions } from '../../misc/build-math-gl-file.js';
import { generateMathGLFromValuesAlias } from './generate-math-gl-from-values-alias.js';
import {
  generateMathGLFromValues,
  IGenerateMathGLFromValuesOptions,
} from './generate-math-gl-from-values.js';

export interface IBuildMathGLFromValuesOptions
  extends IGenerateMathGLFromValuesOptions,
    IBaseBuildMathGLFileOptions {}

export function buildMathGLFromValues(options: IBuildMathGLFromValuesOptions): Promise<void> {
  return Promise.all([
    buildMathGLFile({
      ...options,
      suffix: '_from_values.ts',
      content: generateMathGLFromValues(options),
    }),
    buildMathGLFile({
      ...options,
      suffix: '_from_values.alias.ts',
      content: generateMathGLFromValuesAlias(options),
    }),
  ]).then(() => {});
}
