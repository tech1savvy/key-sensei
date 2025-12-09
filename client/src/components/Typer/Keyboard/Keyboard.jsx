import { useState, useCallback, memo, useEffect } from "react";
import { keyboardLayout } from "./layout.js";
import styles from "./Keyboard.module.css";

const Key = memo(({ id, value, className, isPressed }) => {
  const isSpacebar = className === "spacebar";
  const keyClassName = [
    isSpacebar ? "" : "col",
    styles.key,
    isPressed ? styles.pressed : "",
    className && styles[className], // Applies styles.spacebar if className is 'spacebar'
    className && !styles[className] ? className : "", // Applies a global class if it's not in the module
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div id={id} className={keyClassName}>
      {value}
    </div>
  );
});

function Keyboard() {
  const [pressedKeys, setPressedKeys] = useState(new Set());

  const handleKeyEvent = useCallback((event, action) => {
    const { code } = event;
    event.preventDefault();
    setPressedKeys((prev) => {
      const newSet = new Set(prev);
      if (action === "add") {
        newSet.add(code);
      } else {
        newSet.delete(code);
      }
      return newSet;
    });
  }, []);

  const handleKeyDown = useCallback(
    (event) => handleKeyEvent(event, "add"),
    [handleKeyEvent]
  );

  const handleKeyUp = useCallback(
    (event) => handleKeyEvent(event, "delete"),
    [handleKeyEvent]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <section id="keyboard" className="row p-3">
      <div className="container">
        {keyboardLayout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`row ${
              rowIndex === 0 ? "list-unstyled" : ""
            } justify-content-center`}
          >
            {row.map((key) => (
              <Key
                key={key.code}
                id={key.code}
                value={key.value}
                className={key.className}
                isPressed={pressedKeys.has(key.code)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Keyboard;
