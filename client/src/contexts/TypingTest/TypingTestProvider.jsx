import { useState, useReducer, useRef } from "react";
import { typingTestReducer, typingTestInitialState } from "./typingTestReducer";
import usePreferences from "./hooks/useTestPreferences";
import useKeyHandler from "./hooks/useKeyHandler";
import useTestReset from "./hooks/useTestReset";
import useTestTimer from "./hooks/useTestTimer";
import useTestOver from "./hooks/useTestOver";
import useCursorPosition from "./hooks/useCursorPosition";

import TypingTestContext from "./TypingTestContext";

function TypingTestProvider({ children }) {
  const { timeLimit, wordLimit, handleWordLimitChange, handleTimeLimitChange } =
    usePreferences();

  const [state, dispatch] = useReducer(
    typingTestReducer,
    typingTestInitialState,
  );
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const wordsContainerRef = useRef(null);
  const {
    status,
    stats,
    wordList,
    currentWordIndex,
    currentLetterIndex,
    timeLeft,
  } = state;

  useKeyHandler(status, dispatch);
  // Rest test when word or time limits changed
  useTestReset(wordLimit, timeLimit, dispatch);
  // Count down time limit when game is running
  useTestTimer(status, dispatch);
  // Set stats when game over
  useTestOver(status, wordList, currentWordIndex, timeLimit, dispatch);

  // Updaet cursor position with typing
  useCursorPosition(state, wordsContainerRef, setCursorPosition);
  const contextValue = {
    timeLimit,
    wordLimit,
    handleTimeLimitChange,
    handleWordLimitChange,
    status,
    stats,
    wordList,
    currentWordIndex,
    currentLetterIndex,
    dispatch,
    timeLeft,
    cursorPosition,
    wordsContainerRef,
  };
  return (
    <TypingTestContext.Provider value={contextValue}>
      {children}
    </TypingTestContext.Provider>
  );
}

export default TypingTestProvider;
