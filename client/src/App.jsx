import "./App.css";

// Enable Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// Enable Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import Menubar from "./components/Typing/Menubar";
import Typer from "./components/Typing/Typer";
import Keyboard from "./components/Typing/Keyboard/Keyboard.jsx";
import Footer from "./components/Footer";
import Result from "./components/Typing/Result";

import { TypingTestPreferenceProvider } from "./contexts/TypingTestPreferenceProvider.jsx";

function App() {
  return (
    <>
      <TypingTestPreferenceProvider>
        <Navbar />
        <div className="container">
          <div className="row pt-3">
            <Menubar />
          </div>
          <div className="row p-3">
            <Typer />
          </div>
          <div className="row p-3">
            <Result />
          </div>
          <div className="row p-3">
            <Keyboard />
          </div>
        </div>
        <Footer />
      </TypingTestPreferenceProvider>
    </>
  );
}

export default App;
