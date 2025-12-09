import TypingTestPreferenceContext from "./TypingTestPreferenceContext";
import { useState } from "react";

export function TypingTestPreferenceProvider({ children }) {
  const [timeLimit, setTimeLimit] = useState(15);
  const [wordLimit, setWordLimit] = useState(50);

  const handleTimeLimitChange = (value) => {
    setTimeLimit(value);
  };
  const handleWordLimitChange = (value) => {
    setWordLimit(value);
  };

  return (
    <TypingTestPreferenceContext.Provider
      value={{
        timeLimit,
        wordLimit,
        handleTimeLimitChange,
        handleWordLimitChange,
      }}
    >
      {children}
    </TypingTestPreferenceContext.Provider>
  );
}
