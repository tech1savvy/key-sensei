import { keyboardLayout } from "./layout.js";
import Key from "./Key.jsx";

function Keyboard() {
  return (
    <section id="keyboard" className="row p-3">
      <div className="container">
        {keyboardLayout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`row justify-content-center`}
          >
            {row.map((key) => (
              <Key
                key={key.code}
                id={key.code}
                value={key.value}
                keyClassName={key.className}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Keyboard;
