import { useCallback, useState } from "react";

function useTestPreferences() {
  const [timeLimit, setTimeLimit] = useState(15);
  const [wordLimit, setWordLimit] = useState(50);

  const handleTimeLimitChange = useCallback((value) => {
    setTimeLimit(value);
  }, []);
  const handleWordLimitChange = useCallback((value) => {
    setWordLimit(value);
  }, []);

  return {
    timeLimit,
    wordLimit,
    handleTimeLimitChange,
    handleWordLimitChange,
  };
}

export default useTestPreferences;
