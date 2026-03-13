import { useEffect } from "react";
import { calculateStats } from "../utils/calculateStats";

function useTestOver(status, wordList, currentWordIndex, timeLimit, dispatch) {
  useEffect(() => {
    if (status === "finished") {
      const stats = calculateStats(
        status,
        wordList,
        currentWordIndex,
        timeLimit,
      );
      dispatch({ type: "SET_STATS", payload: { stats: stats } });

      // Save Stats
      fetch("/api/typing-test/results", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wpm: stats.wpm, accuracy: stats.accuracy }),
      })
        // Convert Response to JSON
        .then((response) => response.json())
        // Error handling
        .then((response) => {
          if (response.success) {
            console.log(response.success.message);
          } else {
            console.error(response.error.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [status, wordList, currentWordIndex, timeLimit, dispatch]);
}

export default useTestOver;
