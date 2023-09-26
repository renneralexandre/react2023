import { createTheme } from "@mui/material";

import { red, cyan } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      dark: red[900],
      main: red[800],
      light: red[700],
      contrastText: red[100],
    },
    tonalOffset: 0.5,
    secondary: {
      dark: cyan[900],
      main: cyan[800],
      light: cyan[700],
    },
  },
  typography: {
    fontFamily: ["Verdana"].join(","),
    fontWeightRegular: 900,
    fontWeightBold: 900,
    fontWeightLight: 900,
    fontWeightMedium: 900,
  },
});
