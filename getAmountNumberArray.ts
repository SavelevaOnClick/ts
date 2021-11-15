function getAmountNegativeElements(array: number[]): number {
  let counter: number = 0;
  for (let item of array) {
    item < 0 && counter++;
  }
  return counter;
}

function getAmountZeroElements(array: number[]): number {
  let counter: number = 0;
  for (let item of array) {
    item === 0 && counter++;
  }
  return counter;
}

function getAmountPositiveElements(array: number[]): number {
  let counter: number = 0;
  for (let item of array) {
    item > 0 && counter++;
  }
  return counter;
}

function getAmountPrimeElements(array: number[]): number {
  function isPrimeNumber(number: number): Boolean {
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
  for (let item of array) {
    isPrimeNumber(item) && counter++;
  }
  return counter;
}
function getAmountNegativeElementsRecursia(
  array: number[],
  index?: number
): number {
  let counter: number = 0;
  index = index || 0;
  array[index] < 0 && counter++;

  if (++index < array.length) {
    counter += getAmountNegativeElementsRecursia(array, index);
  }

  return counter;
}

function getAmountZeroElementsRecursia(
  array: number[],
  index?: number
): number {
  let counter: number = 0;
  index = index || 0;
  array[index] === 0 && counter++;

  if (++index < array.length) {
    counter += getAmountZeroElementsRecursia(array, index);
  }

  return counter;
}

function getAmountPositiveElementsRecursia(
  array: number[],
  index?: number
): number {
  let counter: number = 0;
  index = index || 0;
  array[index] > 0 && counter++;

  if (++index < array.length) {
    counter += getAmountPositiveElementsRecursia(array, index);
  }

  return counter;
}

function getAmountPrimeElementsRecursia(
  array: number[],
  index?: number
): number {
  let counter: number = 0;
  index = index || 0;
  isPrimeNumber(array[index]) && counter++;

  if (++index < array.length) {
    counter += getAmountPrimeElementsRecursia(array, index);
  }
  return counter;
}

function isPrimeNumber(number: number, index?: number): boolean {
  if (number <= 1 || !number) {
    return false;
  }
  index = index || 2;
  let boolean;

  if (index < number) {
    boolean = number % index === 0;
  } else {
    boolean = false;
  }

  if (++index < number && !boolean) {
    boolean = !isPrimeNumber(number, index);
  }

  return !boolean;
}

interface AmountElements {
  (array: number[], index?: number): number;
}

const createMemoizationAmountNegativeElements = ((): AmountElements => {
  let memo: Record<string, number> = {};
  const getAmountNegativeElements: AmountElements = (
    array: number[],
    index?: number
  ) => {
    if (memo[String(array)] !== undefined) {
      return memo[String(array)];
    }

    let counter: number = 0;
    index = index || 0;
    array[index] < 0 && counter++;

    if (++index < array.length) {
      counter += getAmountNegativeElements(array, index);
    }
    memo[String(array)] = counter;
    return counter;
  };
  return getAmountNegativeElements;
})();

const createMemoizationAmountZeroElements = ((): AmountElements => {
  let memo: Record<string, number> = {};
  const getAmountZeroElements: AmountElements = (
    array: number[],
    index?: number
  ) => {
    if (memo[String(array)] !== undefined) {
      return memo[String(array)];
    }

    let counter: number = 0;
    index = index || 0;
    array[index] === 0 && counter++;

    if (++index < array.length) {
      counter += getAmountZeroElements(array, index);
    }
    memo[String(array)] = counter;
    return counter;
  };
  return getAmountZeroElements;
})();

const createMemoizationAmountPositiveElements = ((): AmountElements => {
  let memo: Record<string, number> = {};
  const getAmountPositiveElements: AmountElements = (
    array: number[],
    index?: number
  ) => {
    if (memo[String(array)] !== undefined) {
      return memo[String(array)];
    }

    let counter: number = 0;
    index = index || 0;
    array[index] > 0 && counter++;

    if (++index < array.length) {
      counter += getAmountPositiveElements(array, index);
    }
    memo[String(array)] = counter;
    return counter;
  };
  return getAmountPositiveElements;
})();

interface MemoizPrimeNumber {
  (number: number, index?: number): boolean;
}

const createMemoizationIzPrimeNumber = ((): MemoizPrimeNumber => {
  let memo: Record<string, boolean> = {};
  const isPrimeNumber: MemoizPrimeNumber = (number: number, index?: number) => {
    if (memo[number] !== undefined) {
      return memo[number];
    }

    if (number <= 1 || !number) {
      return false;
    }
    index = index || 2;
    let boolean: boolean;

    if (index < number) {
      boolean = number % index === 0;
    } else {
      boolean = false;
    }

    if (++index < number && !boolean) {
      boolean = !isPrimeNumber(number, index);
    }
    memo[number] = !boolean;
    return !boolean;
  };
  return isPrimeNumber;
})();

const createMemoizationAmountPrimeNumber = ((): AmountElements => {
  const memo: Record<string, number> = {};
  const getAmountPrimeElements: AmountElements = (
    array: number[],
    index?: number
  ): number => {
    if (memo[String(array)] !== undefined) {
      return memo[String(array)];
    }

    let counter: number = 0;
    index = index || 0;
    createMemoizationIzPrimeNumber(array[index]) && counter++;

    if (++index < array.length) {
      counter += getAmountPrimeElements(array, index);
    }
    memo[String(array)] = counter;
    return counter;
  };
  return getAmountPrimeElements;
})();
