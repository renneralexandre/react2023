import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";
// ======================= =======================

// import red from '@material'

const theme = createTheme({
  palette: {
    primary: {
      dark: blue[900],
      main: blue[800],
      light: blue[700],
    }
  }
});
theme.palette.primary.main = red[700];


// ======================= =======================
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
