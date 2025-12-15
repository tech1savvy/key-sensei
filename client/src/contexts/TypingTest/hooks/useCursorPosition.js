import { useEffect } from "react";

function useCursorPosition(state, wordsContainerRef, setCursorPosition) {
  const { status, wordList, currentWordIndex, currentLetterIndex } = state;

  useEffect(() => {
    if (status === "finished" || wordList.length === 0) {
      return;
    }

    const wordsContainer = wordsContainerRef.current;
    if (!wordsContainer) return;

    const currentWordElement = wordsContainer.children[currentWordIndex + 1];
    if (!currentWordElement) return;

    const currentLetterElement =
      currentWordElement.children[currentLetterIndex];

    const targetElement = currentLetterElement || currentWordElement;

    const isAtEndOfWord = !currentLetterElement;

    const newTop = targetElement.offsetTop;
    const newLeft = isAtEndOfWord
      ? targetElement.offsetLeft + targetElement.offsetWidth // Position After the word
      : targetElement.offsetLeft;

    setCursorPosition({ top: newTop, left: newLeft });
  }, [
    status,
    wordList,
    currentWordIndex,
    currentLetterIndex,
    wordsContainerRef,
    setCursorPosition,
  ]);
}
export default useCursorPosition;
