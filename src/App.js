import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <header className="App-header">
        <section className="title">
          <h1>
            📖 Dic<span>·</span>tio<span>·</span>nary
          </h1>
        </section>
        <Dictionary defaultWord="coding" />
      </header>
      <footer className="App-footer">
        Coded by{" "}
        <a
          href="linkedin.com/in/savannah-hayes-128b0418a"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Savannah Hayes
        </a>
        , Open-sourced on{" "}
        <a
          href="https://github.com/savannah-hayes/Dictionary-App"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          GitHub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
