import { useContext } from "react";
import TypingTestContext from "../../contexts/TypingTest/TypingTestContext";

function Result() {
  const { stats, wordLimit, timeLimit, dispatch } =
    useContext(TypingTestContext);
  const { wpm, accuracy } = stats;

  const handleNewTest = () => {
    dispatch({ type: "RESET", payload: { wordLimit, timeLimit } });
  };

  return (
    <div className="container p-2 shadow-lg bg-body-tertiary rounded">
      <div className="row">
        {/* Speed result */}
        <div className="col">
          <div className="btn btn-outline-secondary">
            WPM: <span className="text-success">{wpm}</span>
          </div>
        </div>
        {/* Accuracy result */}
        <div className="col">
          <div className="btn btn-outline-secondary">
            Accuracy: <span>{accuracy}%</span>
          </div>
        </div>
        {/* New Test Button*/}
        <div className="col d-flex justify-content-end">
          <button className="btn btn-success" onClick={handleNewTest}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
