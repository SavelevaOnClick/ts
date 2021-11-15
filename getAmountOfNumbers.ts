function getAmountOfNumbers(number: number): Record<string, number> {
  const resultObject: Record<string, number> = {};
  const arrayFromNumbers: number[] = getArrayFromNumber(number);
  const arrayOfUniqueNumbers: number[] = sortingUniqueArray(arrayFromNumbers);

  for (let numb of arrayOfUniqueNumbers) {
    Object.assign(resultObject, { [numb]: getCounter(numb, arrayFromNumbers) });
  }

  return resultObject;
}

function getCounter(number: number, array: number[]): number {
  let counter: number = 0;
  for (let item of array) {
    if (number === item) {
      counter++;
    }
  }

  return counter;
}

function checkingElement(element: number, array: number[]): boolean {
  if (array.length === 0) {
    return false;
  }

  for (let item of array) {
    if (element === item) {
      return true;
    }
  }

  return false;
}

function sortingUniqueArray(arrayNumber: number[]): number[] {
  const arrayOfUniqueValues: number[] = [];
  for (let item of arrayNumber) {
    if (!checkingElement(item, arrayOfUniqueValues)) {
      arrayOfUniqueValues.push(item);
    }
  }
  return arrayOfUniqueValues;
}

function getArrayFromNumber(number: number): number[] {
  const arrayOfNumber: number[] = [];

  do {
    let reducedByDecimalPlace: number = Math.floor(number / 10);
    let difference: number = number - reducedByDecimalPlace * 10;
    arrayOfNumber.unshift(difference);
    number = reducedByDecimalPlace;
  } while (number > 0);

  return arrayOfNumber;
}
