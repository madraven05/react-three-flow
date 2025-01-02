import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CanvasOperationsProvider } from "./components/three/canvas-operations-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CanvasOperationsProvider>
      <App />
    </CanvasOperationsProvider>
  </StrictMode>
);
