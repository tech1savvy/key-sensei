import { useContext } from "react";
import TypingTestPreferenceContext from "../../contexts/TypingTestPreferenceContext";

function Word({ word }) {
  return (
    <span className="p-1" style={{ display: "inline-block" }}>
      {word}
    </span>
  );
}
import dictionary from "./Typer.data";

function Typer() {
  const { timeLimit, wordLimit } = useContext(TypingTestPreferenceContext);

  const words = dictionary.split(" ");
  const wordsCount = words.length;
  const gameTime = timeLimit * 1000;

  function randomWord() {
    const randomIndex = Math.floor(Math.random() * wordsCount);
    return words[randomIndex];
  }

  let selectedWords = [];
  for (let i = 0; i < wordLimit; i++) {
    selectedWords.push(randomWord());
  }

  return (
    <div className="container shadow-lg p-3 bg-body-tertiary rounded">
      {selectedWords.map((word, index) => (
        <Word key={index} word={word} />
      ))}
    </div>
  );
}

export default Typer;
