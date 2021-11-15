function getFromDecimalToBinary(number: number): number {
  const array: number[] = [];
  do {
    array.unshift(number % 2);
    number = Math.floor(number / 2);
  } while (number !== 1);
  array.unshift(number);

  return Number(array.join(""));
}

function getFromBinaryToDecimal(number: number): number {
  let sum: number = 0;
  let numberToThePowerOf2 = 0;
  let counter: number = 0;
  const arrayNumber: string[] = String(number).split("");
  for (let i = arrayNumber.length - 1; i >= 0; i--) {
    numberToThePowerOf2 = Number(arrayNumber[i]) * 2 ** counter;
    sum += numberToThePowerOf2;
    counter++;
  }
  return sum;
}

function getFromDecimalToBinaryRecursia(
  number: number,
  array?: number[]
): number {
  array = array || [];
  array.unshift(number % 2);
  number = Math.floor(number / 2);

  if (number !== 1) {
    getFromDecimalToBinaryRecursia(number, array);
  } else {
    array.unshift(number);
  }

  return Number(array.join(""));
}

function getFromBinaryToDecimalRecursia(
  number: number,
  arrayNumber?: string[],
  counter?: number,
  index?: number
): number {
  let sum = 0;
  let numberToThePowerOf2 = 0;
  arrayNumber = arrayNumber || String(number).split("");
  counter = counter || arrayNumber.length;
  index = index || 0;
  numberToThePowerOf2 = Number(arrayNumber[index]) * 2 ** --counter;
  sum = numberToThePowerOf2;

  if (++index < arrayNumber.length) {
    sum += getFromBinaryToDecimalRecursia(number, arrayNumber, counter, index);
  }

  return sum;
}
interface BinaryToDecimal {
  (
    number: number,
    arrayNumber: string[],
    counter?: number,
    index?: number
  ): number;
}

const createMemoizationBinaryToDecimal = ((): BinaryToDecimal => {
  const memo: Record<string, number> = {};
  const getFromBinaryToDecimal: BinaryToDecimal = (
    number: number,
    arrayNumber?: string[],
    counter?: number,
    index?: number
  ): number => {
    if (memo[number] !== undefined) {
      return memo[number];
    }

    let sum: number = 0;
    let numberToThePowerOf2: number = 0;
    arrayNumber = arrayNumber || String(number).split("");
    counter = counter || arrayNumber.length;
    index = index || 0;
    numberToThePowerOf2 = Number(arrayNumber[index]) * 2 ** --counter;
    sum = numberToThePowerOf2;

    if (++index < arrayNumber.length) {
      sum += getFromBinaryToDecimal(number, arrayNumber, counter, index);
    }

    memo[number] = sum;
    return sum;
  };
  return getFromBinaryToDecimal;
})();
