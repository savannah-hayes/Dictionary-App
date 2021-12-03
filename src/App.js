import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled-components/Global";
import { lightTheme, darkTheme } from "./styled-components/Themes";
import {
  StyledButton,
  StyledText,
  StyledIcon,
  StyledHeader,
  StyledSymbols,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledFooter,
  StyledLink1,
  StyledLink2,
} from "./styled-components/App-css";
import lightIcon from "./Icons/light.png";
import darkIcon from "./Icons/dark.png";
import Dictionary from "./components/Dictionary";

function App() {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(darkIcon);
  const [text, setText] = useState("DarkMode");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setIcon(lightIcon);
      setText("LightMode");
    } else {
      setTheme("light");
      setIcon(darkIcon);
      setText("DarkMode");
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledContainer>
          <StyledRow>
            <StyledCol>
              <StyledButton onClick={toggleTheme}>
                <StyledText>{text}</StyledText>
                <StyledIcon src={icon} alt="toggle icon" />
              </StyledButton>
            </StyledCol>
            <StyledCol>
              <StyledHeader>
                Dic<StyledSymbols>·</StyledSymbols>tio
                <StyledSymbols>·</StyledSymbols>nary
              </StyledHeader>
            </StyledCol>
          </StyledRow>
          <Dictionary defaultWord="hello" />
          <StyledCol>
            <StyledFooter>
              Coded by{" "}
              <StyledLink1
                href="https://linkedin.com/in/savannah-hayes-128b0418a"
                target="_blank"
                rel="noreferrer"
              >
                Savannah Hayes
              </StyledLink1>
              , Open-sourced on{" "}
              <StyledLink2
                href="https://github.com/savannah-hayes/Dictionary-App"
                target="_blank"
                rel="noreferrer"
              >
                GitHub{" "}
              </StyledLink2>
            </StyledFooter>
          </StyledCol>
        </StyledContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
