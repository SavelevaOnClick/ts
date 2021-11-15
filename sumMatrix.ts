interface MemoMatrix {
  (matrix: number[][], index1?: number, index2?: number): number;
}

const creationOfMemorizationSum = ((): MemoMatrix => {
  let memo: Record<string, number> = {};
  const getSumMatrix: MemoMatrix = (
    matrix: number[][],
    index1?: number,
    index2?: number
  ) => {
    let result: string = String(matrix);
    if (memo[result] !== undefined) {
      return memo[result];
    }

    let sum: number = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    sum = matrix[index1][index2];

    if (++index2 < matrix[index1].length) {
      sum += getSumMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      sum += getSumMatrix(matrix, index1, index2);
    }

    memo[result] = sum;
    return sum;
  };
  return getSumMatrix;
})();

const creationOfMemorizationEvenSum = ((): MemoMatrix => {
  let memo: Record<string, number> = {};
  const getEvenNumbersSumMatrix: MemoMatrix = (
    matrix: number[][],
    index1?: number,
    index2?: number
  ) => {
    let result: string = String(matrix);
    if (memo[result] !== undefined) {
      return memo[result];
    }

    let sum: number = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    if (matrix[index1][index2] % 2 === 0) {
      sum = matrix[index1][index2];
    }

    if (++index2 < matrix[index1].length) {
      sum += getEvenNumbersSumMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      sum += getEvenNumbersSumMatrix(matrix, index1, index2);
    }

    memo[result] = sum;
    return sum;
  };
  return getEvenNumbersSumMatrix;
})();

const creationOfMemorizationMultiplesTreeSum = ((): MemoMatrix => {
  let memo: Record<string, number> = {};
  const getSumMultiplesTreeNumbersMatrix: MemoMatrix = (
    matrix: number[][],
    index1?: number,
    index2?: number
  ) => {
    let result: string = String(matrix);
    if (memo[result] !== undefined) {
      return memo[result];
    }

    let sum: number = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    if (matrix[index1][index2] % 3 === 0) {
      sum = matrix[index1][index2];
    }

    if (++index2 < matrix[index1].length) {
      sum += getSumMultiplesTreeNumbersMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      sum += getSumMultiplesTreeNumbersMatrix(matrix, index1, index2);
    }

    memo[result] = sum;
    return sum;
  };
  return getSumMultiplesTreeNumbersMatrix;
})();

const creationOfMemorizationOddNumbers = ((): MemoMatrix => {
  let memo: Record<string, number> = {};
  const getSumOddNumbersMatrix: MemoMatrix = (
    matrix: number[][],
    index1?: number,
    index2?: number
  ) => {
    let result: string = String(matrix);
    if (memo[result] !== undefined) {
      return memo[result];
    }

    let sum: number = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    if (matrix[index1][index2] % 2 !== 0) {
      sum = matrix[index1][index2];
    }

    if (++index2 < matrix[index1].length) {
      sum += getSumOddNumbersMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      sum += getSumOddNumbersMatrix(matrix, index1, index2);
    }

    memo[result] = sum;
    return sum;
  };
  return getSumOddNumbersMatrix;
})();

const creationOfMemorizationPositiveNumbers = ((): MemoMatrix => {
  let memo: Record<string, number> = {};
  const getSumPositiveNumbersMatrix: MemoMatrix = (
    matrix: number[][],
    index1?: number,
    index2?: number
  ) => {
    let result: string = String(matrix);
    if (memo[result] !== undefined) {
      return memo[result];
    }

    let sum: number = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    if (matrix[index1][index2] > 0) {
      sum = matrix[index1][index2];
    }

    if (++index2 < matrix[index1].length) {
      sum += getSumPositiveNumbersMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      sum += getSumPositiveNumbersMatrix(matrix, index1, index2);
    }

    memo[result] = sum;
    return sum;
  };
  return getSumPositiveNumbersMatrix;
})();

function getSumNumbersMatrix(matrix: number[][]): number {
  let sum: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

function getSumEvenNumbersMatrix(matrix: number[][]): number {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function getSumMultiplesThreeMatrix(matrix: number[][]): number {
  let sum: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 3 === 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function getSumOddNumbersMatrix(matrix: number[][]): number {
  let sum: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
function getSumPositiveNumbersMatrix(matrix: number[][]): number {
  let sum: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
