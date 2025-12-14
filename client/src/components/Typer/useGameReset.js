import { useEffect } from "react";

export default function useGameReset(wordLimit, timeLimit, dispatch) {
  useEffect(() => {
    dispatch({ type: "RESET", payload: { wordLimit, timeLimit } });
  }, [timeLimit, wordLimit, dispatch]);
}
