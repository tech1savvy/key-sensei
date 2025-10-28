import { useState } from "react";

function Result() {
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const handleNewTest = () => {};

  return (
<div class="container p-2 shadow-lg bg-body-tertiary rounded">
      <div className="row">
        <div className="col">
          <div className="btn btn-outline-secondary">
            WPM: <span className="text-success">{speed}</span>
          </div>
        </div>
        <div className="col">
          <div className="btn btn-outline-secondary">
            Accuracy: <span>{accuracy}%</span>
          </div>
        </div>
        <div className="col d-flex justify-content-end">
          <button
            className="btn btn-success"
            onClick={handleNewTest}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
