import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled-components/Global";
import { lightTheme, darkTheme } from "./styled-components/Themes";
import {
  StyledButton,
  StyledIcon,
  StyledHeader,
  StyledSymbols,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledFooter,
  StyledLink,
} from "./styled-components/App-css";
import lightIcon from "./Icons/light.png";
import darkIcon from "./Icons/dark.png";
import Dictionary from "./components/Dictionary";

function App() {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(darkIcon);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setIcon(lightIcon);
    } else {
      setTheme("light");
      setIcon(darkIcon);
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledContainer className="app-container">
          <StyledRow>
            <StyledCol>
              Light
              <StyledButton onClick={toggleTheme}>
                <StyledIcon src={icon} alt="toggle icon" />
              </StyledButton>
              Dark
            </StyledCol>
            <StyledCol>
              <StyledHeader>
                📖 Dic<StyledSymbols>·</StyledSymbols>tio
                <StyledSymbols>·</StyledSymbols>nary
              </StyledHeader>
            </StyledCol>
          </StyledRow>
          <Dictionary defaultWord="coding" />
          <StyledCol>
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
          </StyledCol>
        </StyledContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
