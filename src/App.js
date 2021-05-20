import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled-components/Global";
import { lightTheme, darkTheme } from "./styled-components/Themes";
import {
  StyledContainer,
  StyledFooter,
  StyledLink,
} from "./styled-components/App-styling";

import Dictionary from "./components/Dictionary";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledContainer className="app-container">
          <button onClick={themeToggler}>Switch Theme</button>
          <div className="container"></div>
          <header className="App-header">
            <section className="title">
              <h1>
                📖 Dic<span>·</span>tio<span>·</span>nary
              </h1>
            </section>
            <Dictionary defaultWord="coding" />
          </header>
          <StyledFooter className="App-footer">
            Coded by{" "}
            <StyledLink
              href="linkedin.com/in/savannah-hayes-128b0418a"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Savannah Hayes
            </StyledLink>
            , Open-sourced on{" "}
            <StyledLink
              href="https://github.com/savannah-hayes/Dictionary-App"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              GitHub{" "}
            </StyledLink>
          </StyledFooter>
        </StyledContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
