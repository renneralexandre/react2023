import { createTheme } from "@mui/material";

import { deepPurple, cyan } from "@mui/material/colors";
const theme = createTheme({
    palette: {
      primary: {
        dark: deepPurple[900],
        main: deepPurple[800],
        light: deepPurple[700],
        contrastText: deepPurple[100],
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

  export default theme;
  