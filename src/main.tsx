import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { CanvasOperationsProvider } from "./components/three/canvas-operations-context.tsx";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CanvasOperationsProvider>
          <App />
        </CanvasOperationsProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
