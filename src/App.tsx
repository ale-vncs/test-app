import React from 'react';
import {ThemeProvider} from "@mui/material";
import useCustomTheme from "./styles/customTheme";
import {Home} from "./modules/Home/Home";
import {GlobalStyles} from "./styles/GlobalStyles";

export const App = () => {
  const theme = useCustomTheme(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme}/>
      <Home />
    </ThemeProvider>
  );
}
