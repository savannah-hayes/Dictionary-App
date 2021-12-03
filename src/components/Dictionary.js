import React, { useState } from "react";
import axios from "axios";
import {
  StyledTitle,
  StyledInput,
  StyledText,
  StyledButton,
  StyledImage,
  StyledCol,
  StyledContainer,
  StyledRow,
  Section,
  StyledForm,
} from "../styled-components/Dictionary-css";
import searchIcon from "../Icons/search.png";
import Results from "./Results";
import Photos from "./Photos";

function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f9170000100000186b6bd7f35324e528d20f585fc2f4482";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function displayWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <StyledContainer>
        {" "}
        <StyledRow>
          <Section>
            <StyledCol>
              <StyledForm onSubmit={handleSubmit}>
                <StyledTitle>What word do you want to look up?</StyledTitle>
                <StyledInput
                  type="search"
                  autoComplete="off"
                  placeholder="Search for a word"
                  onChange={displayWord}
                ></StyledInput>
                <StyledButton>
                  <StyledImage src={searchIcon} />
                </StyledButton>
              </StyledForm>
              <StyledText>
                suggested words: nature, smooth, coding, sound...
              </StyledText>
            </StyledCol>
          </Section>
        </StyledRow>
        <Results results={results} />
        <Photos photos={photos} alt={word} />
      </StyledContainer>
    );
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;
