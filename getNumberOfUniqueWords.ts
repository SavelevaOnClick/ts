function getNumberOfUniqueWords(sentence: string): number {
  const arrayOfSentences: string[] = cleaningSentences(sentence).split(" ");
  let counter: number = 0;
  for (let item of arrayOfSentences) {
    getCounterOfElements(item, arrayOfSentences) === 1 && counter++;
  }
  return counter;
}

function getCounterOfElements(element: string, array: string[]): number {
  let counter: number = 0;
  for (let item of array) {
    element === item && counter++;
  }
  return counter;
}

function cleaningSentences(sentences: string): string {
  return sentences.replace(/[,.]/g, "");
}
