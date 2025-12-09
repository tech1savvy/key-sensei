/**
 * Generates an array of random words for the typing test.
 * @param {number} wordLimit - The number of words to generate.
 * @param {string} dictionary - A string containing all possible words, separated by spaces.
 * @returns {string[]} An array of randomly selected words.
 */
function generateWordList(wordLimit, dictionary) {
  const words = dictionary.split(" ");
  const wordsCount = words.length;

  function randomWord() {
    const randomIndex = Math.floor(Math.random() * wordsCount);
    return words[randomIndex];
  }

  return Array.from({ length: wordLimit }, randomWord);
}

export default generateWordList;
