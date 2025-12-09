import { useContext } from "react";
import TypingTestPreferenceContext from "../../contexts/TypingTestPreferenceContext";

function Menubar() {
  const { timeLimit, wordLimit, handleTimeLimitChange, handleWordLimitChange } =
    useContext(TypingTestPreferenceContext);
  return (
    <>
      <div className="container text-center p-1 border border-3 border-light-subtle rounded-pill">
        <div className="row">
          {/* Time Limit Menu */}
          <div className="col border-end">
            <i className="bi bi-stopwatch p-1"></i>
            {[15, 30, 60].map((time) => (
              <span
                key={time}
                className={`p-1 ${timeLimit === time ? "text-success" : ""}`}
                onClick={() => handleTimeLimitChange(time)}
                style={{ cursor: "pointer" }}
              >
                {time}s
              </span>
            ))}
          </div>

          {/* Word Limit Menu */}
          <div className="col">
            <i className="bi bi-alphabet p-1"> </i>
            {[25, 50, 100].map((word) => (
              <span
                key={word}
                className={`p-1 ${wordLimit === word ? "text-success" : ""}`}
                onClick={() => handleWordLimitChange(word)}
                style={{ cursor: "pointer" }}
              >
                {word}w
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menubar;
