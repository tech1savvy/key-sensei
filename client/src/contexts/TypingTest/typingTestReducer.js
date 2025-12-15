import dictionary from "./data";
import generateWordList from "./utils/generateWordList";

export const typingTestInitialState = {
  status: "ready", // 'ready', 'running', 'finished'
  wordList: [],
  currentWordIndex: 0,
  currentLetterIndex: 0,
  timeLeft: 0,
  stats: { wpm: 0, accuracy: 0 },
};

export function typingTestReducer(state, action) {
  switch (action.type) {
    case "RESET": {
      const { wordLimit, timeLimit } = action.payload;
      const words = generateWordList(wordLimit, dictionary);
      return {
        ...typingTestInitialState,
        wordList: words.map((word) => ({
          word,
          letters: word.split("").map((char) => ({ char, status: "pending" })),
        })),
        timeLeft: timeLimit,
      };
    }

    case "START": {
      return {
        ...state,
        status: "running",
      };
    }

    case "TYPE_LETTER": {
      if (state.status !== "running") return state; // Do nothing if test hasn't started
      const { key } = action.payload;
      const currentWord = state.wordList[state.currentWordIndex];
      const currentLetter = currentWord.letters[state.currentLetterIndex];

      // If typed past end of word, do nothing
      if (state.currentLetterIndex >= currentWord.letters.length) {
        return state;
      }

      // Create a new letters array with the updated status for the current letter
      const newLetters = [...currentWord.letters];
      newLetters[state.currentLetterIndex] = {
        ...currentLetter,
        status: key === currentLetter.char ? "correct" : "incorrect",
      };

      // New word list with updated word
      const newWordList = [...state.wordList];
      newWordList[state.currentWordIndex] = {
        ...currentWord,
        letters: newLetters,
      };

      return {
        ...state,
        wordList: newWordList,
        currentLetterIndex: state.currentLetterIndex + 1,
      };
    }

    case "NEXT_WORD": {
      if (state.status !== "running") return state;

      // Prevent skipping past the last word
      if (state.currentWordIndex === state.wordList.length - 1) {
        return state;
      }

      return {
        ...state,
        currentWordIndex: state.currentWordIndex + 1,
        currentLetterIndex: 0,
      };
    }

    case "CLEAR_LETTER": {
      if (state.status !== "running") return state;

      const currentWord = state.wordList[state.currentWordIndex];
      const prevLetterIndex = state.currentLetterIndex - 1;

      // Handle backspace within the current word
      if (state.currentLetterIndex > 0) {
        const newLetters = [...currentWord.letters];
        newLetters[prevLetterIndex] = {
          ...currentWord.letters[prevLetterIndex],
          status: "pending",
        };

        const newWordList = [...state.wordList];
        newWordList[state.currentWordIndex] = {
          ...currentWord,
          letters: newLetters,
        };

        return {
          ...state,
          wordList: newWordList,
          currentLetterIndex: prevLetterIndex,
        };
      }

      // Handle backspace at the start of a word (jump to previous word)
      if (state.currentLetterIndex === 0 && state.currentWordIndex > 0) {
        return {
          ...state,
          currentWordIndex: state.currentWordIndex - 1,
          currentLetterIndex:
            state.wordList[state.currentWordIndex - 1].letters.length,
        };
      }

      // Can't backspace further
      return state;
    }

    case "TICK_TIMER": {
      if (state.status !== "running") return state;

      const newTimeLeft = state.timeLeft - 1;
      // Time ran out
      if (newTimeLeft <= 0) {
        return {
          ...state,
          status: "finished",
          timeLeft: 0,
        };
      }
      return {
        ...state,
        timeLeft: newTimeLeft,
      };
    }

    case "TEST_OVER": {
      return {
        ...state,
        status: "finished",
        timeLeft: 0,
      };
    }

    case "SET_STATS": {
      return {
        ...state,
        stats: action.payload.stats,
      };
    }

    default:
      return state;
  }
}
