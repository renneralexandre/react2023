import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppThemeProvider from "./context/theme.context";
import App from "./App.tsx";
// ======================= =======================
const router = createBrowserRouter([{ path: "/", element: <App /> }]);

// ======================= =======================
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </React.StrictMode>
);
