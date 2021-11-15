function getMeanValueArray(array: number[]): number {
  if (array.length === 0) {
    throw new Error("Empty array");
  }
  let sum: number = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function getMeanValueEvenNumbersArray(array: number[]): number {
  let sum: number = 0;
  let counter: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
      counter++;
    }
  }
  return counter ? sum / counter : 0;
}
function getMeanOddNumbersArray(array: number[]): number {
  let sum: number = 0;
  let counter: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
      counter++;
    }
  }
  return counter ? sum / counter : 0;
}

function getMeanValueMatrix(matrix: number[][]): number {
  let sum: number = 0;
  let counter: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      counter++;
      sum += matrix[i][j];
    }
  }
  return counter ? sum / counter : 0;
}

function getMeanEvenNumbersMatrix(matrix: number[][]): number {
  let sum: number = 0;
  let counter: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        counter++;
        sum += matrix[i][j];
      }
    }
  }
  return counter ? sum / counter : 0;
}

function getMeanOddNumbersMatrix(matrix: number[][]): number {
  let sum: number = 0;
  let counter: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        counter++;
        sum += matrix[i][j];
      }
    }
  }
  return counter ? sum / counter : 0;
}
