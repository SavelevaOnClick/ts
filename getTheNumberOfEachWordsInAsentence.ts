function getTheNumberOfEachWordsInAsentence(
  sentence: string
): Record<string, number> {
  const resultObject: Record<string, number> = {};
  const arraySentences: string[] = cleaningSentences(sentence).split(" ");
  const arrayOfUniqueValues: string[] = sortingUniqueArray(arraySentences);

  for (let item of arrayOfUniqueValues) {
    Object.assign(resultObject, { [item]: getCounter(item, arraySentences) });
  }

  return resultObject;
}

function getCounter(element: string, array: string[]): number {
  let counter: number = 0;

  for (let item of array) {
    element === item && counter++;
  }

  return counter;
}

function sortingUniqueArray(array: string[]): string[] {
  const arrayOfUniqueValues: string[] = [];
  for (let item of array) {
    !isElement(item, arrayOfUniqueValues) && arrayOfUniqueValues.push(item);
  }
  return arrayOfUniqueValues;
}

function isElement(element: string, array: string[]): boolean {
  for (let item of array) {
    if (element === item) {
      return true;
    }
  }
  return false;
}

function cleaningSentences(sentences: string): string {
  return sentences.replace(/[,.]/g, "");
}
