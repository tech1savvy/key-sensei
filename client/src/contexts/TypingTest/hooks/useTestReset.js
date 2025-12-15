import { useEffect } from "react";

function useTestReset(wordLimit, timeLimit, dispatch) {
  useEffect(() => {
    dispatch({ type: "RESET", payload: { wordLimit, timeLimit } });
  }, [timeLimit, wordLimit, dispatch]);
}

export default useTestReset;
