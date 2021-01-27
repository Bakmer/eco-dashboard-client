import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  StylesProvider,
} from "@material-ui/core/styles";
import { myTheme } from "./theme";

const theme = createMuiTheme(myTheme);

const ThemeProvider: React.FC<{}> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <StylesProvider injectFirst>{children}</StylesProvider>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
