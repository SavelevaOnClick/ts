function getAmountZeroElementsMatrix(matrix: number[][]): number {
  let counter: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        counter++;
      }
    }
  }
  return counter;
}

function getAmountNegativeElementsMatrix(matrix: number[][]): number {
  let counter: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        counter++;
      }
    }
  }
  return counter;
}

function getAmountPositiveElementsMatrix(matrix: number[][]): number {
  let counter: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        counter++;
      }
    }
  }
  return counter;
}

function getAmountPrimeElementsMatrix(matrix: number[][]): number {
  function isPrime(number: number): boolean {
    if (number < 2 || !number) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  let counter: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isPrime(matrix[i][j])) {
        counter++;
      }
    }
  }
  return counter;
}
