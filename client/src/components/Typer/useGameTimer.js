import { useEffect } from "react";

export default function useGameTimer(status, dispatch) {
  useEffect(() => {
    let timerId;
    if (status === "running") {
      timerId = setInterval(() => {
        dispatch({ type: "TICK_TIMER" });
      }, 1 * 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [status, dispatch]);
}
