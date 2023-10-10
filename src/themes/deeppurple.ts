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
    MuiCard: {
      styleOverrides: {
        root: {
          width: "100%",
          WebkitBoxShadow: "0px 10px 13px -7px #000000, -19px -19px 15px 1px rgba(0,0,0,0)",
          boxShadow: "0px 10px 13px -7px #000000, -19px -19px 15px 1px rgba(0,0,0,0)",
          background: "#CE5937",
          background: "-moz-linear-gradient(-45deg, #CE5937 0%, #1C6EA4 50%, #C59237 100%)",
          background: "-webkit-linear-gradient(-45deg, #CE5937 0%, #1C6EA4 50%, #C59237 100%)",
          background: "linear-gradient(135deg, #CE5937 0%, #1C6EA4 50%, #C59237 100%)",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          background: `linear-gradient(45deg, ${palette.primary.dark}, ${palette.secondary.dark})`,
          color: palette.secondary.light,
          padding: 2,
          // [theme.breakpoints.down("md")]: {
          //   display: "none",
          // },
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
    MuiButton: {
      variants: [
        {
          props: { variant: "menu2" },
          style: {
            color: "white",
            display: "block",
            my: 2,
            background: "transparent",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          underlineHover: "none", // remove the default hover effect on links in this component (MUI v5)
        },
      },
    },
  },
});
