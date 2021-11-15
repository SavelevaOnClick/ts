function getSumAllNumber(array: number[]): number {
  let sum: number = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}

function getSumEvenNumber(array: number[]): number {
  let sum: number = 0;
  for (let number of array) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}

function getSumOddNumber(array: number[]): number {
  let sum: number = 0;
  for (let number of array) {
    if (number % 2 !== 0) {
      sum += number;
    }
  }
  return sum;
}
function getSumMultiplesOfThree(array: number[]): number {
  let sum: number = 0;
  for (let number of array) {
    if (number % 3 === 0) {
      sum += number;
    }
  }
  return sum;
}

function getSumPositiveNumbers(array: number[]): number {
  let sum: number = 0;
  for (let number of array) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

function getSumAllNumberRecursia(array: number[], index?: number): number {
  index = index || 0;
  let sum: number = array[index];

  if (++index < array.length) {
    sum += getSumAllNumberRecursia(array, index);
  }

  return sum;
}

function getSumEvenNumberRecursia(array: number[], index?: number): number {
  index = index || 0;
  let sum: number = 0;

  if (array[index] % 2 === 0) {
    sum += array[index];
  }

  if (++index < array.length) {
    sum += getSumEvenNumberRecursia(array, index);
  }

  return sum;
}

function getSumOddNumberRecursia(array: number[], index?: number): number {
  index = index || 0;
  let sum: number = 0;

  if (array[index] % 2 !== 0) {
    sum += array[index];
  }

  if (++index < array.length) {
    sum += getSumOddNumberRecursia(array, index);
  }

  return sum;
}

function getSumMultiplesThreeRecursia(array: number[], index?: number): number {
  index = index || 0;
  let sum: number = 0;

  if (array[index] % 3 === 0) {
    sum += array[index];
  }

  if (++index < array.length) {
    sum += getSumMultiplesThreeRecursia(array, index);
  }

  return sum;
}

function getSumPositiveNumbersRecursia(
  array: number[],
  index?: number
): number {
  index = index || 0;
  if (index > array.length) {
    return 0;
  }
  if (array[index] > 0) {
    return array[index] + getSumPositiveNumbersRecursia(array, ++index);
  }
  return getSumPositiveNumbersRecursia(array, ++index);
}
