import React, { useState } from "react";

import "./Dictionary.css";

function Dictionary() {
  const [word, setWord] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${word} definition`);
  }

  function displayWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word..."
          autoComplete="off"
          onChange={displayWord}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Dictionary;
