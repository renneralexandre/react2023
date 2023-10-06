import { createTheme } from "@mui/material";

import { deepPurple, cyan } from "@mui/material/colors";

export const theme1 = createTheme({
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
    fontSize: 10,
    fontWeightRegular: 900,
    fontWeightBold: 900,
    fontWeightLight: 900,
    fontWeightMedium: 900,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          background: `linear-gradient(45deg, ${palette.primary.dark}, ${palette.secondary.light})`,
          padding: 2,
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          background: `linear-gradient(45deg, ${palette.primary.dark}, ${palette.secondary.light})`,
          padding: 2,
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          background: `linear-gradient(45deg, ${palette.primary.dark}, ${palette.secondary.light})`,
          width: 24,
          height: 24,
        }),
      },
    },
  },
});
