function getFactorial(number: number): number | null {
  if (!number || number < 0) {
    return null;
  }

  let factorial: number = 1;

  for (let i = number; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
}

function getFactorialRecursia(number: number): number | null {
  if (number <= 0) {
    return null;
  }
  let factorial: number = 1;
  factorial *= number--;
  if (number > 0) {
    factorial *= getFactorialRecursia(number);
  }
  return factorial;
}

interface Factorial {
  (number: number): number;
}

const createMemoization = ((): Factorial => {
  const memo: Record<string, number> = {};
  const factorial: Factorial = (number: number) => {
    let resultFactorial: number;
    if (memo[number] !== undefined) {
      resultFactorial = memo[number];
    } else {
      if (number === 1) {
        resultFactorial = 1;
      } else {
        resultFactorial = number * factorial(number - 1);
      }
      memo[number] = resultFactorial;
    }
    return resultFactorial;
  };
  return factorial;
})();
