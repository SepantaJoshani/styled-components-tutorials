import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DarkCtxProvider from "./context/darkCtx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkCtxProvider>
      <App />
    </DarkCtxProvider>
  </React.StrictMode>
);
