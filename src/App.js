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
      <footer className="App-footer">Coded by Savannah Hayes</footer>
    </div>
  );
}

export default App;
