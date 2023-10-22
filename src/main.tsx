import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/authtentication.context";
import AppThemeProvider from "./context/theme.context";
// ======================= =======================
import Layout from "./layout";
import { Home, Users, Form } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home />, index: true },
      { path: "users", element: <Users /> },
      { path: "form", element: <Form /> },
    ],
  },
]);

// ======================= =======================
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
