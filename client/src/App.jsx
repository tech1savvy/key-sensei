import "./App.css";

// Enable Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// Enable Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import Menubar from "./components/Typer/Menubar";
import Typer from "./components/Typer/Typer";
import Keyboard from "./components/Typer/Keyboard/Keyboard.jsx";
import Footer from "./components/Footer";
import Result from "./components/Typer/Result";

import KeyPressProvider from "./contexts/KeyPressContext/KeyPressProvider.jsx";
import TypingTestProvider from "./contexts/TypingTest/TypingTestProvider.jsx";

function App() {
  return (
    <>
      <KeyPressProvider>
        <TypingTestProvider>
          <Navbar />
          <div className="container">
            <div className="row pt-3">
              <Menubar />
            </div>
            <div className="row p-1">
              <Typer />
            </div>
            <div className="row p-3">
              <Result />
            </div>
            <div className="row p-1">
              <Keyboard />
            </div>
          </div>
          <Footer />
        </TypingTestProvider>
      </KeyPressProvider>
    </>
  );
}

export default App;
