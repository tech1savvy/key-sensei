export function calculateStats(status, wordList, currentWordIndex, timeLimit) {
  // Only calculate if game is finished
  if (status !== "finished") return { wpm: 0, accuracy: 0 };

  const typedWords = wordList.slice(0, currentWordIndex + 1);

  let typedChars = 0;
  let correctChars = 0;

  typedWords.forEach((word) => {
    word.letters.forEach((letter) => {
      if (letter.status === "correct" || letter.status === "incorrect")
        typedChars++;
      if (letter.status === "correct") correctChars++;
    });
    // Count space after each word
    typedChars++;
    correctChars++;
  });

  // Calcuate WPM
  const timeElapsedInMinutes = timeLimit / 60;
  const wpm =
    timeElapsedInMinutes > 0
      ? Math.round(correctChars / 5 / timeElapsedInMinutes)
      : 0;
  const accuracy =
    typedChars > 0 ? Math.round((correctChars / typedChars) * 100) : 0;

  return { wpm, accuracy };
}
