import { useContext, useMemo } from "react";
import TypingTestPreferenceContext from "../../contexts/TypingTestPreferenceContext";

import Word from "./Word";
import dictionary from "./Typer.data";
import generateWordList from "./Typer.generateWordList";

function Typer() {
  const { timeLimit, wordLimit } = useContext(TypingTestPreferenceContext);

  const words = useMemo(
    () => generateWordList(wordLimit, dictionary),
    [wordLimit],
  );
  // const gameTime = timeLimit * 1000;

  return (
    <div className="container shadow-lg p-3 bg-body-tertiary rounded">
      {words.map((word, index) => (
        <Word key={index} word={word} />
      ))}
    </div>
  );
}

export default Typer;
