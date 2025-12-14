import { useContext, useReducer, useState, useRef } from "react";
import styles from "./Typer.module.css";
import Word from "./Word";
import Timer from "./Timer";
import Cursor from "./Cursor";
import TypingTestPreferenceContext from "../../contexts/TypingTestPreferenceContext";

import { initialState, reducer } from "./typerReducer";
import useGameReset from "./useGameReset";
import useGameTimer from "./useGameTimer";
import useGameOver from "./useGameOver";
import useCursorPosition from "./useCursorPosition";
import useKeyHandler from "./useKeyHandler";

function Typer() {
  const { wordLimit, timeLimit } = useContext(TypingTestPreferenceContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const wordsContainerRef = useRef(null);
  const { status, wordList, currentWordIndex, currentLetterIndex, timeLeft } =
    state;

  useKeyHandler(status, dispatch);

  // Rest test when word or time limits changed
  useGameReset(wordLimit, timeLimit, dispatch);
  // Count down time limit when game is running
  useGameTimer(status, dispatch);
  // Set stats when game over
  useGameOver(status, wordList, currentWordIndex, timeLimit, dispatch);

  // Updaet cursor position with typing
  useCursorPosition(state, wordsContainerRef, setCursorPosition);

  return (
    <div className="container shadow-lg p-3 bg-body-tertiary rounded">
      <Timer time={timeLeft} />

      <div className={styles.wordsContainer} ref={wordsContainerRef}>
        <Cursor position={cursorPosition} isVisible={status !== "finished"} />
        {wordList.map((wordObj, index) => (
          <Word
            key={index}
            wordObj={wordObj}
            isCurrentWord={index === currentWordIndex}
            currentWordIndex={currentWordIndex}
            currentLetterIndex={currentLetterIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Typer;
