import { useState, useCallback, useEffect, useRef } from "react";
import KeyPressContext from "./KeyPressContext";

export function KeyPressProvider({ children }) {
  // Store pressed keys
  const [pressedKeys, setPressedKeys] = useState(new Set());

  // Hold mutable sets of listener functions without causing re-renders
  const keyDownListeners = useRef(new Set());
  const keyUpListeners = useRef(new Set());

  const handleKeyDown = useCallback((event) => {
    event.preventDefault();
    const code = event.code;

    // Register pressed key
    setPressedKeys((prev) => {
      const newSet = new Set(prev);
      newSet.add(code);
      return newSet;
    });

    // Notify all subscribed 'keydown' listeners
    keyDownListeners.current.forEach((listener) => listener(event));
  }, []);

  const handleKeyUp = useCallback((event) => {
    event.preventDefault();
    const code = event.code;

    // Register released key
    setPressedKeys((prev) => {
      const newSet = new Set(prev);
      newSet.delete(code);
      return newSet;
    });
    // Notify all subscribed 'keyup' listeners.
    keyUpListeners.current.forEach((listener) => listener(event));
  }, []);

  useEffect(() => {
    // Enable global listener
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // Subscribe
  const subscribe = useCallback((eventName, listener) => {
    if (eventName === "keydown") {
      keyDownListeners.current.add(listener);
    } else if (eventName === "keyup") {
      keyUpListeners.current.add(listener);
    }
  }, []);

  // Unsubscribe
  const unsubscribe = useCallback((eventName, listener) => {
    if (eventName === "keydown") {
      keyDownListeners.current.delete(listener);
    } else if (eventName === "keyup") {
      keyUpListeners.current.delete(listener);
    }
  }, []);

  return (
    <KeyPressContext.Provider
      value={{
        pressedKeys,
        subscribe,
        unsubscribe,
      }}
    >
      {children}
    </KeyPressContext.Provider>
  );
}
