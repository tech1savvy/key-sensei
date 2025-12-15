import { useContext } from "react";
import styles from "./Typer.module.css";
import Word from "./Word";
import Timer from "./Timer";
import Cursor from "./Cursor";
import TypingTestContext from "../../contexts/TypingTest/TypingTestContext";

function Typer() {
  const {
    timeLeft,
    cursorPosition,
    wordsContainerRef,
    status,
    wordList,
    currentWordIndex,
    currentLetterIndex,
  } = useContext(TypingTestContext);
  return (
    <>
      <div className="container shadow-lg p-2 bg-body-tertiary rounded">
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
    </>
  );
}

export default Typer;
