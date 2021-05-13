import logo from "./logo.png";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dictionary />
      </header>
      <footer className="App-footer">
        Coded by{" "}
        <a
          href="https://github.com/savannah-hayes/Dictionary-App"
          target="_blank"
          rel="noreferrer"
        >
          Savannah Hayes
        </a>
      </footer>
    </div>
  );
}

export default App;
