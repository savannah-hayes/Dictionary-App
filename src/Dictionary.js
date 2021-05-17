import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

function Dictionary() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function displayWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Search for a word</h2>
          <input
            className="search"
            type="search"
            autoComplete="off"
            onChange={displayWord}
          />
          <input className="submit" type="submit" value="🔍" />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}

export default Dictionary;
