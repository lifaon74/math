import { buildMathGlSet } from './shared/set/build-math-gl-set';
import { buildMathGLVectorDistance } from './vector/distance/build-math-gl-vector-squared';
import { getVecNName } from './vector/get-vec-n-name';
import { getMatNName } from './matrix/get-mat-n-name';
import { buildMathGLTypes } from './shared/types/build-math-gl-types';
import { buildMathGLCreate } from './shared/create/build-math-gl-create';
import { buildMathGLVectorLength } from './vector/length/build-math-gl-vector-length';
import { buildMathGLFromValues } from './shared/from-values/build-math-gl-from-values';
import { buildMathGLCopy } from './shared/copy/build-math-gl-copy';
import { buildMathGLClone } from './shared/clone/build-math-gl-clone';
import { buildMathGLAdd } from './shared/add/build-math-gl-add';
import { buildMathGLSubtract } from './shared/subtract/build-math-gl-subtract';
import { buildMathGLVectorMultiply } from './vector/multiply/build-math-gl-vector-multiply';
import { buildMathGLVectorDivide } from './vector/divide/build-math-gl-vector-divide';
import { buildMathGLVectorDot } from './vector/dot/build-math-gl-vector-dot';
import { buildMathGLVectorNormalize } from './vector/normalize/build-math-gl-vector-normalize';
import { buildMathGLVectorScale } from './vector/scale/build-math-gl-vector-scale';
import { buildMathGLEpsilonEquals } from './shared/epsilon-equals/build-math-gl-epsilon-equals';
import { buildMathGLEquals } from './shared/equals/build-math-gl-equals';
import { buildMathGLVectorLinearInterpolation } from './vector/linear-interpolation/build-math-gl-vector-linear-interpolation';
import { buildMathGLVectorSquaredDistance } from './vector/squared-distance/build-math-gl-vector-squared-distance';
import { buildMathGLVectorZero } from './vector/zero/build-math-gl-vector-zero';
import { buildMathGLVectorNegate } from './vector/negate/build-math-gl-vector-negate';
import { buildMathGLVectorInverse } from './vector/inverse/build-math-gl-vector-inverse';
import { buildMathGLVectorScaleAndAdd } from './vector/scale-and-add/build-math-gl-vector-scale-and-add';
import { buildMathGLVectorSquaredLength } from './vector/squared-length/build-math-gl-vector-squared-length';
import { buildMathGLVectorAngle } from './vector/angle/build-math-gl-vector-angle';

async function buildMathGLVectors() {
  for (let i: number = 2; i <= 4; i++) {
    const name: string = getVecNName(i);
    const length: number = i;

    const sharedOptions = {
      name,
      length,
    };

    await buildMathGLTypes(sharedOptions);
    await buildMathGLCreate({
      ...sharedOptions,
      type: 'vector',
    });
    await buildMathGLFromValues({
      ...sharedOptions,
      type: 'vector',
    });
    await buildMathGlSet({
      ...sharedOptions,
      type: 'vector',
    });
    await buildMathGLVectorZero(sharedOptions);
    await buildMathGLCopy(sharedOptions);
    await buildMathGLClone(sharedOptions);
    await buildMathGLEquals(sharedOptions);
    await buildMathGLEpsilonEquals(sharedOptions);
    await buildMathGLVectorLength(sharedOptions);
    await buildMathGLVectorSquaredLength(sharedOptions);
    await buildMathGLVectorAngle(sharedOptions);
    await buildMathGLVectorNegate(sharedOptions);
    await buildMathGLVectorInverse(sharedOptions);
    await buildMathGLAdd(sharedOptions);
    await buildMathGLSubtract(sharedOptions);
    await buildMathGLVectorMultiply(sharedOptions);
    await buildMathGLVectorDivide(sharedOptions);
    await buildMathGLVectorScale(sharedOptions);
    await buildMathGLVectorScaleAndAdd(sharedOptions);
    await buildMathGLVectorNormalize(sharedOptions);
    await buildMathGLVectorDot(sharedOptions);
    await buildMathGLVectorLinearInterpolation(sharedOptions);
    await buildMathGLVectorSquaredDistance(sharedOptions);
    await buildMathGLVectorDistance(sharedOptions);
  }
}

async function buildMathGLMatrices() {
  for (let i: number = 2; i <= 4; i++) {
    const name: string = getMatNName(i);
    const length: number = i * i;

    const sharedOptions = {
      name,
      length,
    };

    await buildMathGLTypes(sharedOptions);
    await buildMathGLCreate({
      ...sharedOptions,
      type: 'matrix',
    });
    await buildMathGLFromValues({
      ...sharedOptions,
      type: 'matrix',
    });
    await buildMathGlSet({
      ...sharedOptions,
      type: 'matrix',
    });
    await buildMathGLCopy(sharedOptions);
    await buildMathGLClone(sharedOptions);
    await buildMathGLEpsilonEquals(sharedOptions);
    await buildMathGLAdd(sharedOptions);
    await buildMathGLSubtract(sharedOptions);
  }
}

async function buildMathGL() {
  await buildMathGLVectors();
  await buildMathGLMatrices();

}

buildMathGL();

