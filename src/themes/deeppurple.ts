import { createTheme } from "@mui/material";

import { deepPurple, cyan } from "@mui/material/colors";

export const theme1 = createTheme({
  palette: {
    primary: {
      dark: deepPurple[900],
      main: deepPurple[700],
      light: deepPurple[500],
      contrastText: deepPurple[100],
    },
    tonalOffset: 0.5,
    secondary: {
      dark: cyan[900],
      main: cyan[700],
      light: cyan[500],
    },
    text: {
      secondary: "white",
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
          background: `linear-gradient(45deg, ${palette.primary.dark}, ${palette.secondary.dark})`,
          padding: 2,
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          background: `linear-gradient(45deg, ${palette.primary.dark}, ${palette.secondary.dark})`,
          color: palette.secondary.light,
          padding: 2,
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          background: `linear-gradient(45deg, ${palette.primary.dark}, ${palette.secondary.dark})`,
          width: 24,
          height: 24,
        }),
      },
    },
  },
});
