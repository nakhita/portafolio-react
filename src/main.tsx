import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import { PreviousPathProvider } from "./context/PreviousPathContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreviousPathProvider>
        <App />
      </PreviousPathProvider>
    </BrowserRouter>
  </React.StrictMode>
);
