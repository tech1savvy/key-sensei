import Letter from "./Letter";

function Word({
  wordObj,
  isCurrentWord,
  currentWordIndex,
  currentLetterIndex,
}) {
  const { word, letters } = wordObj;

  const classNames = ["word"];
  if (isCurrentWord) {
    classNames.push("current");
  }
  return (
    <span
      className={classNames.join("") + " p-1"}
      style={{ display: "inline-block" }}
    >
      {letters.map((letterObj, letterIndex) => (
        <Letter
          key={letterIndex}
          char={letterObj.char}
          status={letterObj.status}
          isCurrentLetter={isCurrentWord && letterIndex === currentLetterIndex}
        />
      ))}
    </span>
  );
}

export default Word;
