import { useContext, useCallback, useEffect } from "react";
import KeyPressContext from "../../contexts/KeyPressContext";

function useKeyHandler(status, dispatch) {
  const { subscribe, unsubscribe } = useContext(KeyPressContext);
  const handleKeyDown = useCallback(
    (event) => {
      const { key } = event;
      // Start Game on first valid keypress
      if (status === "ready" && key.length === 1) {
        dispatch({ type: "START" });
      }
      const isLetter = key.length === 1 && key !== " ";
      const isSpace = key === " ";
      const isBackspace = key === "Backspace";

      if (isLetter) dispatch({ type: "TYPE_LETTER", payload: { key } });
      if (isSpace) dispatch({ type: "NEXT_WORD" });
      if (isBackspace) dispatch({ type: "BACKSPACE" });
    },
    [status, dispatch],
  );

  useEffect(() => {
    subscribe("keydown", handleKeyDown);
    return () => {
      unsubscribe("keydown", handleKeyDown);
    };
  }, [subscribe, unsubscribe, handleKeyDown]);
}

export default useKeyHandler;
