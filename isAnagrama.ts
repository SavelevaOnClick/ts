const getAmountLetter = (letter: string, word: string): number => {
  let counter: number = 0;
  for (const letterW of word) {
    letterW === letter && counter++;
  }
  return counter;
};

const isAnagrama = (firstWord: string, secondWord: string): boolean => {
  if (firstWord.length !== secondWord.length) {
    return false;
  }
  for (let i = 0; i < firstWord.length; i++) {
    if (
      getAmountLetter(firstWord[i], firstWord) !==
      getAmountLetter(firstWord[i], secondWord)
    ) {
      return false;
    }
  }
  return true;
};

const getAmountLetterRecursia = (
  letter: string,
  word: string,
  index?: number
): number => {
  let counter: number = 0;
  index = index || 0;
  word[index] === letter && counter++;
  if (++index < word.length) {
    counter += getAmountLetterRecursia(letter, word, index);
  }
  return counter;
};

const checkIsAnagrama = (
  firstWord: string,
  secondWord: string,
  index?: number
): boolean => {
  index = index || 0;
  let isAnagrama: boolean =
    getAmountLetter(firstWord[index], firstWord) ===
    getAmountLetter(firstWord[index], secondWord);
  if (++index < firstWord.length && isAnagrama) {
    isAnagrama = checkIsAnagrama(firstWord, secondWord, index);
  }
  return isAnagrama;
};
