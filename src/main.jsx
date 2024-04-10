import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import { CharacterAnimationsProvider } from "./context/CharAnimation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </React.StrictMode>
);
