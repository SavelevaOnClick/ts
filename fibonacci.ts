function arrayFibonacci(n: number): number[] {
  const arrayFibonacci: number[] = [0, 1].splice(0, n);
  for (let i = 2; i < n; i++) {
    arrayFibonacci.push(arrayFibonacci[i - 1] + arrayFibonacci[i - 2]);
  }
  return arrayFibonacci;
}

function arrayFibonacciRecursia(
  number: number,
  index?: number,
  arrayFibonacci?: number[]
): number[] {
  index = index || 1;
  arrayFibonacci = arrayFibonacci || [0, 1].splice(0, number);

  if (++index < number) {
    arrayFibonacci.push(arrayFibonacci[index - 1] + arrayFibonacci[index - 2]);
    arrayFibonacciRecursia(number, index, arrayFibonacci);
  }

  return arrayFibonacci;
}
