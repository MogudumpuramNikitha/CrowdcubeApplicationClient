import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider.jsx";
import RoutersItems from "./Component/Router/Router.jsx";
import ErrorBoundary from "./Component/ErrorBoundary/ErrorBoundary.jsx";

const router = createBrowserRouter(RoutersItems);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </ErrorBoundary>
  </StrictMode>
);
