import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppThemeProvider from "./context/theme.context";
// ======================= =======================
import App from "./App.tsx";
import UserList from "./components/users/index.tsx";
const router = createBrowserRouter([{ path: "/", element: <App />, children: [{ path: "users", element: <UserList /> }] }]);

// ======================= =======================
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </React.StrictMode>
);
