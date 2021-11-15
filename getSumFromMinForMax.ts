function getMinToMaxSum(min: number, max: number): number {
  let sum: number = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

function getMinToMaxSumMultiplesThree(min: number, max: number): number {
  let sum: number = 0;
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
      sum += i;
    }
  }
  return sum;
}
function getMinToMaxSumPositiveNumber(min: number, max: number): number {
  let sum: number = 0;
  for (let i = min; i <= max; i++) {
    if (i > 0) {
      sum += i;
    }
  }
  return sum;
}

function getMinToMaxSumRecursia(min: number, max: number): number {
  let sum: number = min;

  if (++min <= max) {
    sum += getMinToMaxSum(min, max);
  }

  return sum;
}

function getMinToMaxSumMultiplesThreeRecursia(
  min: number,
  max: number
): number {
  let sum: number = 0;

  if (min % 3 === 0) {
    sum += min;
  }

  if (++min <= max) {
    sum += getMinToMaxSumMultiplesThreeRecursia(min, max);
  }

  return sum;
}

function getMinToMaxSumPositiveNumbersRecursia(
  min: number,
  max: number
): number {
  let sum: number = 0;

  if (min > 0) {
    sum += min;
  }

  if (++min <= max) {
    sum += getMinToMaxSumPositiveNumbersRecursia(min, max);
  }

  return sum;
}
interface MinToMax {
  (min: number, max: number, minIter?: number): number;
}
const creationOfMemorizationSumMinToMax = ((): MinToMax => {
  let memo: Record<string, number> = {};
  const getMinToMaxSum: MinToMax = (
    min: number,
    max: number,
    minIter?: number
  ) => {
    if (memo[`${min}:${max}`] !== undefined) {
      return memo[`${min}:${max}`];
    }

    minIter = minIter ?? min;
    let sum: number = minIter;

    if (++minIter <= max) {
      sum += getMinToMaxSum(min, max, minIter);
    }

    memo[`${min}:${max}`] = sum;
    return sum;
  };
  return getMinToMaxSum;
})();

const creationOfMemorizationMultiplesTree = ((): MinToMax => {
  let memo: Record<string, number> = {};
  const getMinToMaxSumOfMultiplesThree: MinToMax = (
    min: number,
    max: number,
    minIter?: number
  ) => {
    if (memo[`${min}:${max}`] !== undefined) {
      return memo[`${min}:${max}`];
    }

    minIter = minIter ?? min;
    let sum: number = 0;

    if (minIter % 3 === 0) {
      sum += minIter;
    }

    if (++minIter <= max) {
      sum += getMinToMaxSumOfMultiplesThree(min, max, minIter);
    }

    memo[`${min}:${max}`] = sum;
    return sum;
  };
  return creationOfMemorizationMultiplesTree;
})();

const creationOfMemorizationSumPositiveMinToMax = ((): MinToMax => {
  let memo: Record<string, number> = {};
  const getMinToMaxSumPositiveNumber: MinToMax = (
    min: number,
    max: number,
    minIter?: number
  ): number => {
    if (memo[`${min}:${max}`] !== undefined) {
      return memo[`${min}:${max}`];
    }

    minIter = minIter ?? min;
    let sum = 0;

    if (minIter > 0) {
      sum = minIter;
    }

    if (++minIter <= max) {
      sum += getMinToMaxSumPositiveNumber(min, max, minIter);
    }

    memo[`${min}:${max}`] = sum;
    return sum;
  };
  return getMinToMaxSumPositiveNumber;
})();
