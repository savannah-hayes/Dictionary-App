import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

function Dictionary() {
  const [word, setWord] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
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
