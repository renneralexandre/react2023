import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import theme from "./theme/index";
// import App from "./App.tsx";
// ======================= =======================
const router = createBrowserRouter([{ path: "/", element: <div>rota</div> }]);

// ======================= =======================
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <CssBaseline />
    <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
